import os
import re
import json
import base64
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime

# 1. Complete list of subscription sources from user input
GOIDA_URLS = [
    f"https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/{i}.txt"
    for i in range(1, 31)
]

OTHER_URLS = [
    # РАЗДЕЛ 2: XTLS-REALITY
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/reality.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Splitted-By-Protocol/vless.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub1.txt",
    "https://raw.githubusercontent.com/V2RayRoot/V2RayConfig/refs/heads/main/Config/vless.txt",
    "https://github.com/4n0nymou3/multi-proxy-config-fetcher/raw/refs/heads/main/configs/proxy_configs.txt",
    "https://raw.githubusercontent.com/wuqb2i4f/xray-config-toolkit/main/output/base64/mix-uri",
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/splitted/mixed",
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/vless.txt",
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/vmess.txt",
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/trojan.txt",
    "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/shadowsocks.txt",

    # РАЗДЕЛ 3: SNI + CIDR BYPASS
    "https://gitverse.ru/api/repos/kfwlru/sub/raw/branch/main/212.txt",
    "https://gitverse.ru/api/repos/ru-wbl/wl/raw/branch/master/KvRuVPN/KvRuVPN.txt",
    "https://raw.githubusercontent.com/igareck/vpn-configs-for-russia/refs/heads/main/BLACK_VLESS_RUS.txt",
    "https://raw.githubusercontent.com/STR97/STRUGOV/refs/heads/main/STR.BYPASS",
    "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/splitted-by-protocol/vless.txt",
    "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/splitted-by-protocol/vmess.txt",
    "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/splitted-by-protocol/shadowsocks.txt",
    "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/splitted-by-protocol/trojan.txt",
    "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/all_configs.txt",
    "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/subscriptions/filtered/subs/vless.txt",
    "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/subscriptions/filtered/subs/vmess.txt",
    "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/subscriptions/filtered/subs/trojan.txt",
    "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/subscriptions/xray/mix_base64",
    "https://raw.githubusercontent.com/sevcator/5ubscrpt10n/main/protocols/vl.txt",
    "https://raw.githubusercontent.com/sevcator/5ubscrpt10n/main/protocols/vm.txt",
    "https://raw.githubusercontent.com/sakha1370/OpenRay/refs/heads/main/output/all_valid_proxies.txt",

    # РАЗДЕЛ 4: EPODONIOS
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub2.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub3.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub4.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub5.txt",
    "https://github.com/Epodonios/v2ray-configs/raw/main/All_Configs_base64_Sub.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/All_Configs_Sub.txt",

    # РАЗДЕЛ 5: BARRY-FAR
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub1.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub2.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub3.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub4.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub5.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub6.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub7.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub8.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/All_Configs_base64_Sub.txt",

    # РАЗДЕЛ 6: АВТО-СОБРАННЫЕ (Telegram)
    "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/vless.txt",
    "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/vmess.txt",
    "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/trojan.txt",
    "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/shadowsocks.txt",
    "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/splitted/mixed",
    "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/Vless.txt",
    "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/Vmess.txt",
    "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/Trojan.txt",
    "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/Shadowsocks.txt",
    "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/All.txt",
    "https://raw.githubusercontent.com/ebrasha/free-v2ray-public-list/refs/heads/main/vless_configs.txt",
    "https://raw.githubusercontent.com/ebrasha/free-v2ray-public-list/refs/heads/main/vmess_configs.txt",
    "https://raw.githubusercontent.com/ebrasha/free-v2ray-public-list/refs/heads/main/all_configs.txt",

    # РАЗДЕЛ 7: ИГРОВЫЕ
    "https://raw.githubusercontent.com/CidVpn/cid-vpn-config/refs/heads/main/general.txt",
    "https://raw.githubusercontent.com/teknovpnhub/v2ray-subscription/refs/heads/main/servers.txt",
    "https://raw.githubusercontent.com/Danialsamadi/v2go/refs/heads/main/AllConfigsSub.txt",
    "https://raw.githubusercontent.com/acymz/AutoVPN/refs/heads/main/data/V2.txt",
    "https://raw.githubusercontent.com/yitong2333/proxy-minging/refs/heads/main/v2ray.txt",

    # РАЗДЕЛ 8: СМЕШАННЫЕ БОЛЬШИЕ БАЗЫ
    "https://raw.githubusercontent.com/ripaojiedian/freenode/main/sub",
    "https://github.com/LalatinaHub/Mineral/raw/refs/heads/master/result/nodes",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-1.txt",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-2.txt",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-3.txt",

    # РАЗДЕЛ 9: ДОПОЛНИТЕЛЬНЫЕ ИСТОЧНИКИ
    "https://raw.githubusercontent.com/NiREvil/vless/main/sub/G-Core",
    "https://raw.githubusercontent.com/NiREvil/vless/main/sub/Reality",
    "https://raw.githubusercontent.com/NiREvil/vless/main/sub/svless2",
    "https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/sub_merge.txt",
    "https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/splitted/vless.txt",
    "https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/splitted/vmess.txt",
    "https://raw.githubusercontent.com/mheidari98/proxy-list/main/all",
    "https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub",
    "https://raw.githubusercontent.com/itsyebekhe/HiN-VPN/main/subscription/normal/mix",
    "https://raw.githubusercontent.com/itsyebekhe/HiN-VPN/main/subscription/normal/vless",
    "https://raw.githubusercontent.com/Bardiafa/Free-V2ray-Config/main/All_Configs_Sub.txt",
    "https://raw.githubusercontent.com/TheyCallMeSecond/config-examples/main/VLESS/1.txt",
    "https://raw.githubusercontent.com/kaist1/v2ray_sub/main/v2ray.txt",
    "https://raw.githubusercontent.com/Leon406/SubCrawler/master/sub/share/vless",
    "https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/mix",
    "https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/base64/reality",
    "https://raw.githubusercontent.com/tbbatbb/Proxy/master/dist/v2ray.config.txt",
    "https://raw.githubusercontent.com/mlaalibi/configs/main/mix",
    "https://raw.githubusercontent.com/Ashikan/v2ray-configs/main/sub/sub.txt",
    "https://raw.githubusercontent.com/R-Type/free-vpn-nodes/main/sub.txt",

    # РАЗДЕЛ 10: СПЕЦИАЛЬНО ДЛЯ RUSSIA (Gitverse + РКН обход)
    "https://gitverse.ru/api/repos/kfwlru/sub/raw/branch/main/config.txt",
    "https://raw.githubusercontent.com/igareck/vpn-configs-for-russia/refs/heads/main/VLESS_RUS.txt",

    # РАЗДЕЛ 12: ЕЩЁ ИСТОЧНИКИ
    "https://raw.githubusercontent.com/ALIILAPRO/v2rayNG-Config/main/sub.txt",
    "https://raw.githubusercontent.com/freefq/free/master/v2",
    "https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt",
    "https://raw.githubusercontent.com/snakem989/proxypool/main/base64",
    "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.txt",
    "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt",
    "https://raw.githubusercontent.com/vmessprotocol/vmess/main/vmess.txt",
    "https://raw.githubusercontent.com/AzadNet/v2ray/main/sub",
    "https://raw.githubusercontent.com/MhdiTaheri/V2NodeBot/main/vlessconfig/vless.txt",
    "https://raw.githubusercontent.com/Alvin9999/pac2/master/shadowsocks/1/user.yaml",
    "https://raw.githubusercontent.com/SoliSpirit/v2ray-configs/main/all_configs.txt",
    "https://raw.githubusercontent.com/RenatoSn5/free-vpn-config-list/main/sub/reality.txt",
    "https://raw.githubusercontent.com/AbidHasan84/freeVpnServer/main/v2",
    "https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/socks5.txt",
    "https://raw.githubusercontent.com/prxyprx/prxl/main/vless",
    "https://raw.githubusercontent.com/mmp-go/v2ray/main/v2ray.txt"
]

ALL_URLS = list(set(GOIDA_URLS + OTHER_URLS))

def parse_proxy_uri(uri):
    """
    Parses a proxy URI (vless, vmess, trojan, ss) and returns normalization details.
    """
    try:
        uri = uri.strip()
        parts = urllib.parse.urlparse(uri)
        protocol = parts.scheme
        if not protocol:
            return None
        
        # Normalization
        if protocol == 'vmess':
            # vmess configs are base64 JSON
            b64_data = uri[8:]
            # Adjust padding
            b64_data += '=' * (-len(b64_data) % 4)
            try:
                decoded = base64.b64decode(b64_data).decode('utf-8', errors='ignore').strip()
                data = json.loads(decoded)
                host = data.get('add', '')
                port = data.get('port', 0)
                name = data.get('ps', '')
                return {
                    'protocol': 'vmess',
                    'host': host.strip(),
                    'port': int(port),
                    'name': name.strip(),
                    'raw': uri
                }
            except Exception:
                return None
        
        # Other protocols: vless://, trojan://, ss://, shadowsocks://
        netloc = parts.netloc
        if not netloc:
            # Fallback regex split
            match = re.match(r'^(vless|trojan|ss|shadowsocks)://([^@]+@)?([^/?#]+)', uri, re.IGNORECASE)
            if match:
                protocol = match.group(1).lower()
                host_port = match.group(3)
                if ':' in host_port:
                    host, port = host_port.split(':', 1)
                else:
                    host, port = host_port, '0'
            else:
                return None
        else:
            host = parts.hostname or ''
            port = parts.port or 0
            
        name = urllib.parse.unquote(parts.fragment) if parts.fragment else ''
        
        return {
            'protocol': 'shadowsocks' if protocol == 'ss' else protocol,
            'host': host.strip(),
            'port': int(port) if port else 0,
            'name': name.strip(),
            'raw': uri
        }
    except Exception:
        return None

def fetch_subscription(url):
    """
    Fetches subscription configs from a URL using urllib.
    """
    try:
        req = urllib.request.Request(
            url,
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 v2rayNG/1.8.5'
            }
        )
        with urllib.request.urlopen(req, timeout=12) as resp:
            content_bytes = resp.read()
            content = content_bytes.decode('utf-8', errors='ignore').strip()
            
        if not content:
            return []
            
        # Try base64 decoding first
        decoded = None
        cleaned_content = "".join(content.split())
        if re.match(r'^[A-Za-z0-9+/=\s]+$', content) or not any(x in content for x in ['vless://', 'vmess://', 'trojan://', 'ss://']):
            try:
                cleaned_content += "=" * (-len(cleaned_content) % 4)
                dec_bytes = base64.b64decode(cleaned_content)
                dec_str = dec_bytes.decode('utf-8', errors='ignore').strip()
                if any(p in dec_str for p in ['vless://', 'vmess://', 'ss://', 'trojan://']):
                    decoded = dec_str
            except Exception:
                pass
                
        lines = (decoded or content).splitlines()
        
        proxies = []
        for line in lines:
            line = line.strip()
            if not line:
                continue
            if line.startswith('#') and not any(p in line for p in ['vless://', 'vmess://', 'ss://', 'trojan://']):
                continue
                
            for protocol in ['vless://', 'vmess://', 'trojan://', 'ss://', 'shadowsocks://']:
                if protocol in line:
                    idx = line.find(protocol)
                    line = line[idx:]
                    break
            
            p_info = parse_proxy_uri(line)
            if p_info:
                is_ru = any(x in url.lower() for x in ['goida', 'gitverse', 'ru-wbl', 'kfwlru', 'igareck', 'str', 'sevcator', 'sakha'])
                p_info['is_ru_optimized'] = is_ru
                proxies.append(p_info)
                
        return proxies
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def deduplicate(proxies):
    """
    Deduplicates proxies by (protocol, host, port).
    """
    seen = set()
    unique = []
    for p in proxies:
        if not p['host'] or p['host'] in ['127.0.0.1', 'localhost']:
            continue
        key = (p['protocol'], p['host'], p['port'])
        if key not in seen:
            seen.add(key)
            unique.append(p)
    return unique

def main():
    print(f"Starting merge of {len(ALL_URLS)} sources...")
    all_proxies = []
    
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = {executor.submit(fetch_subscription, url): url for url in ALL_URLS}
        for future in as_completed(futures):
            url = futures[future]
            try:
                res = future.result()
                if res:
                    all_proxies.extend(res)
            except Exception as e:
                print(f"Error resolving future for {url}: {e}")
                
    unique_proxies = deduplicate(all_proxies)
    print(f"Fetched {len(all_proxies)} total nodes. Deduplicated to {len(unique_proxies)} nodes.")
    
    vless_nodes = []
    vmess_nodes = []
    trojan_nodes = []
    ss_nodes = []
    ru_nodes = []
    
    for p in unique_proxies:
        raw_uri = p['raw']
        proto = p['protocol']
        
        if proto == 'vless':
            vless_nodes.append(raw_uri)
        elif proto == 'vmess':
            vmess_nodes.append(raw_uri)
        elif proto == 'trojan':
            trojan_nodes.append(raw_uri)
        elif proto in ['shadowsocks', 'ss']:
            ss_nodes.append(raw_uri)
            
        if p['is_ru_optimized'] or any(keyword in p['name'].lower() for keyword in ['ru', 'russia', 'rus', 'goida', 'рф', 'мск', 'msk']):
            ru_nodes.append(raw_uri)

    os.makedirs('dist', exist_ok=True)
    
    def save_subscription(name, items):
        text_content = "\n".join(items)
        base64_content = base64.b64encode(text_content.encode('utf-8')).decode('utf-8')
        
        with open(f"dist/{name}.txt", "w", encoding="utf-8") as f:
            f.write(text_content)
        with open(f"dist/{name}_base64.txt", "w", encoding="utf-8") as f:
            f.write(base64_content)
            
    save_subscription("all", [p['raw'] for p in unique_proxies])
    save_subscription("vless", vless_nodes)
    save_subscription("vmess", vmess_nodes)
    save_subscription("trojan", trojan_nodes)
    save_subscription("ss", ss_nodes)
    save_subscription("russia", ru_nodes)
    
    stats = {
        "last_updated": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "total_nodes": len(unique_proxies),
        "protocols": {
            "vless": len(vless_nodes),
            "vmess": len(vmess_nodes),
            "trojan": len(trojan_nodes),
            "shadowsocks": len(ss_nodes)
        },
        "russia_optimized": len(ru_nodes)
    }
    
    with open("dist/stats.json", "w", encoding="utf-8") as f:
        json.dump(stats, f, indent=4, ensure_ascii=False)
        
    print("Merge completed successfully!")
    print(json.dumps(stats, indent=2))

if __name__ == '__main__':
    main()
