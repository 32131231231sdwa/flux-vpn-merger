$GoidaUrls = 1..30 | ForEach-Object {
    "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/$_.txt"
}

$OtherUrls = @(
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
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub2.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub3.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub4.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub5.txt",
    "https://github.com/Epodonios/v2ray-configs/raw/main/All_Configs_base64_Sub.txt",
    "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/All_Configs_Sub.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub1.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub2.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub3.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub4.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub5.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub6.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub7.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub8.txt",
    "https://raw.githubusercontent.com/barry-far/V2ray-config/main/All_Configs_base64_Sub.txt",
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
    "https://raw.githubusercontent.com/CidVpn/cid-vpn-config/refs/heads/main/general.txt",
    "https://raw.githubusercontent.com/teknovpnhub/v2ray-subscription/refs/heads/main/servers.txt",
    "https://raw.githubusercontent.com/Danialsamadi/v2go/refs/heads/main/AllConfigsSub.txt",
    "https://raw.githubusercontent.com/acymz/AutoVPN/refs/heads/main/data/V2.txt",
    "https://raw.githubusercontent.com/yitong2333/proxy-minging/refs/heads/main/v2ray.txt",
    "https://raw.githubusercontent.com/ripaojiedian/freenode/main/sub",
    "https://github.com/LalatinaHub/Mineral/raw/refs/heads/master/result/nodes",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-1.txt",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-2.txt",
    "https://raw.githubusercontent.com/Firmfox/Proxify/refs/heads/main/v2ray_configs/mixed/subscription-3.txt",
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
    "https://gitverse.ru/api/repos/kfwlru/sub/raw/branch/main/config.txt",
    "https://raw.githubusercontent.com/igareck/vpn-configs-for-russia/refs/heads/main/VLESS_RUS.txt",
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
)

$AllUrls = ($GoidaUrls + $OtherUrls) | Select-Object -Unique

Write-Host "Starting merge of $($AllUrls.Count) sources using PowerShell..."

# Setup dist folder
$DistPath = Join-Path $PSScriptRoot "dist"
if (!(Test-Path $DistPath)) {
    New-Item -ItemType Directory -Path $DistPath | Out-Null
}

$AllProxies = [System.Collections.Generic.List[PSCustomObject]]::new()
$Lock = [object]::new()

# User Agent
$UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 v2rayNG/1.8.5"

# Parse single URI
function Parse-ProxyUri {
    param([string]$uri)
    try {
        $uri = $uri.Trim()
        if ($uri -match "^vmess://(.*)") {
            $b64 = $Matches[1].Trim()
            $pad = $b64.Length % 4
            if ($pad -ne 0) { $b64 += "=" * (4 - $pad) }
            $bytes = [System.Convert]::FromBase64String($b64)
            $json = [System.Text.Encoding]::UTF8.GetString($bytes)
            $obj = ConvertFrom-Json $json -ErrorAction SilentlyContinue
            if ($obj) {
                return [PSCustomObject]@{
                    Protocol = "vmess"
                    Host     = $obj.add.Trim()
                    Port     = [int]$obj.port
                    Name     = $obj.ps.Trim()
                    Raw      = $uri
                }
            }
            return $null
        }

        if ($uri -match "^(vless|trojan|ss|shadowsocks)://(?:([^@]+)@)?([^/?#]+)(?:[^#]*)(?:#(.*))?") {
            $proto = $Matches[1].ToLower()
            if ($proto -eq "ss") { $proto = "shadowsocks" }
            $hostPort = $Matches[3]
            $name = if ($Matches[4]) { [System.Web.HttpUtility]::UrlDecode($Matches[4]) } else { "" }
            
            $host = $hostPort
            $port = 0
            if ($hostPort -match "^([^:]+):(\d+)$") {
                $host = $Matches[1]
                $port = [int]$Matches[2]
            }

            return [PSCustomObject]@{
                Protocol = $proto
                Host     = $host.Trim()
                Port     = $port
                Name     = $name.Trim()
                Raw      = $uri
            }
        }
    } catch {}
    return $null
}

# Fetch subscription URL
function Fetch-Subscription {
    param([string]$url)
    try {
        $web = New-Object System.Net.WebClient
        $web.Headers.Add("User-Agent", $UA)
        $content = $web.DownloadString($url).Trim()
        if ([string]::IsNullOrEmpty($content)) { return @() }

        # Check for Base64 encoding
        $decoded = $null
        $cleaned = $content -replace '\s+',''
        if ($cleaned -match '^[A-Za-z0-9+/=]+$') {
            try {
                $pad = $cleaned.Length % 4
                if ($pad -ne 0) { $cleaned += "=" * (4 - $pad) }
                $bytes = [System.Convert]::FromBase64String($cleaned)
                $decStr = [System.Text.Encoding]::UTF8.GetString($bytes).Trim()
                if ($decStr -match '(vless|vmess|trojan|ss)://') {
                    $decoded = $decStr
                }
            } catch {}
        }

        $lines = if ($decoded) { $decoded -split "`n" } else { $content -split "`n" }
        $list = [System.Collections.Generic.List[PSCustomObject]]::new()
        
        foreach ($line in $lines) {
            $line = $line.Trim()
            if ([string]::IsNullOrEmpty($line) -or ($line.StartsWith("#") -and $line -notmatch '(vless|vmess|trojan|ss)://')) {
                continue
            }
            
            # Find protocol links in line
            foreach ($p in @("vless://", "vmess://", "trojan://", "ss://", "shadowsocks://")) {
                if ($line.Contains($p)) {
                    $idx = $line.IndexOf($p)
                    $line = $line.Substring($idx)
                    break
                }
            }

            $pInfo = Parse-ProxyUri $line
            if ($pInfo) {
                $isRu = $url.ToLower() -match '(goida|gitverse|ru-wbl|kfwlru|igareck|str|sevcator|sakha)'
                $pInfo | Add-Member -MemberType NoteProperty -Name "IsRuOptimized" -Value $isRu
                $list.Add($pInfo)
            }
        }
        return $list
    } catch {
        return @()
    }
}

# Parallel Fetch
$jobs = [System.Collections.Generic.List[System.Threading.Tasks.Task]]::new()
foreach ($url in $AllUrls) {
    $task = [System.Threading.Tasks.Task]::Run({
        param($u)
        $res = Fetch-Subscription $u
        if ($res.Count -gt 0) {
            [System.Threading.Monitor]::Enter($Lock)
            try {
                $AllProxies.AddRange($res)
            } finally {
                [System.Threading.Monitor]::Exit($Lock)
            }
        }
    }.GetAction($url))
    $jobs.Add($task)
}
[System.Threading.Tasks.Task]::WaitAll($jobs.ToArray())

# Deduplicate
$seen = [System.Collections.Generic.HashSet[string]]::new()
$uniqueProxies = [System.Collections.Generic.List[PSCustomObject]]::new()

foreach ($p in $AllProxies) {
    if ([string]::IsNullOrEmpty($p.Host) -or $p.Host -eq "127.0.0.1" -or $p.Host -eq "localhost") {
        continue
    }
    $key = "$($p.Protocol):$($p.Host):$($p.Port)"
    if ($seen.Add($key)) {
        $uniqueProxies.Add($p)
    }
}

Write-Host "Fetched $($AllProxies.Count) total nodes. Deduplicated to $($uniqueProxies.Count) nodes."

# Categorize
$vlessNodes = [System.Collections.Generic.List[string]]::new()
$vmessNodes = [System.Collections.Generic.List[string]]::new()
$trojanNodes = [System.Collections.Generic.List[string]]::new()
$ssNodes = [System.Collections.Generic.List[string]]::new()
$ruNodes = [System.Collections.Generic.List[string]]::new()

foreach ($p in $uniqueProxies) {
    $raw = $p.Raw
    switch ($p.Protocol) {
        "vless" { $vlessNodes.Add($raw) }
        "vmess" { $vmessNodes.Add($raw) }
        "trojan" { $trojanNodes.Add($raw) }
        "shadowsocks" { $ssNodes.Add($raw) }
    }
    
    $isRuName = $p.Name.ToLower() -match '(ru|russia|rus|goida|рф|мск|msk)'
    if ($p.IsRuOptimized -or $isRuName) {
        $ruNodes.Add($raw)
    }
}

# Helper to save files
function Save-Subscription {
    param([string]$name, [string[]]$items)
    $textContent = $items -join "`n"
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($textContent)
    $b64Content = [System.Convert]::ToBase64String($bytes)
    
    [System.IO.File]::WriteAllText((Join-Path $DistPath "$name.txt"), $textContent, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText((Join-Path $DistPath "$name_base64.txt"), $b64Content, [System.Text.Encoding]::UTF8)
}

# Save subscription lists
Save-Subscription "all" ($uniqueProxies | ForEach-Object { $_.Raw })
Save-Subscription "vless" $vlessNodes
Save-Subscription "vmess" $vmessNodes
Save-Subscription "trojan" $trojanNodes
Save-Subscription "ss" $ssNodes
Save-Subscription "russia" $ruNodes

# Save stats JSON
$stats = [ordered]@{
    last_updated     = [DateTime]::UtcNow.ToString("yyyy-MM-dd HH:mm:ss UTC")
    total_nodes      = $uniqueProxies.Count
    protocols        = @{
        vless       = $vlessNodes.Count
        vmess       = $vmessNodes.Count
        trojan      = $trojanNodes.Count
        shadowsocks = $ssNodes.Count
    }
    russia_optimized = $ruNodes.Count
}

$statsJson = ConvertTo-Json $stats -Depth 5
[System.IO.File]::WriteAllText((Join-Path $DistPath "stats.json"), $statsJson, [System.Text.Encoding]::UTF8)

Write-Host "PowerShell Merge completed successfully!"
Write-Host $statsJson
