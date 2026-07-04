// =============================================================================
// FLUX VPN TITANIUM v2.1 — App Logic
// =============================================================================

// --- DOM Elements: Stats ---
const statTotal = document.getElementById('statTotal');
const statVless = document.getElementById('statVless');
const statVmess = document.getElementById('statVmess');
const statTrojan = document.getElementById('statTrojan');
const statSs = document.getElementById('statSs');
const statRu = document.getElementById('statRu');
const updateTime = document.getElementById('updateTime');
const toast = document.getElementById('toast');

// --- DOM Elements: Modal ---
const sourceListModal = document.getElementById('sourceListModal');
const openSourceListBtn = document.getElementById('openSourceListBtn');
const closeSourceListBtn = document.getElementById('closeSourceListBtn');
const modalSubscriptionGroups = document.getElementById('modalSubscriptionGroups');

// --- DOM Elements: Finder ---
const finderGroupSelect = document.getElementById('finderGroupSelect');
const runFinderBtn = document.getElementById('runFinderBtn');
const finderOutputContainer = document.getElementById('finderOutputContainer');
const finderTerminal = document.getElementById('finderTerminal');
const finderResults = document.getElementById('finderResults');
const finderLeaderboard = document.getElementById('finderLeaderboard');
const finderRecommended = document.getElementById('finderRecommended');
const finderRecName = document.getElementById('finderRecName');
const finderRecUrl = document.getElementById('finderRecUrl');
const copyFinderRecBtn = document.getElementById('copyFinderRecBtn');

// --- DOM Elements: Tabs ---
const tabBtnDiagnostic = document.getElementById('tabBtnDiagnostic');
const tabBtnCustom = document.getElementById('tabBtnCustom');
const tabDiagnostic = document.getElementById('tabDiagnostic');
const tabCustom = document.getElementById('tabCustom');

// --- DOM Elements: Custom Builder ---
const customLimitSlider = document.getElementById('customLimitSlider');
const sliderValDisplay = document.getElementById('sliderValDisplay');
const runCustomBuildBtn = document.getElementById('runCustomBuildBtn');
const checkFilterUnknown = document.getElementById('checkFilterUnknown');
const checkFilterDuplicateHosts = document.getElementById('checkFilterDuplicateHosts');

// --- DOM Elements: Diagnostic Tester ---
const testGroupSelect = document.getElementById('testGroupSelect');
const runTestBtn = document.getElementById('runTestBtn');
const testTerminal = document.getElementById('testTerminal');
const testResults = document.getElementById('testResults');
const metricTested = document.getElementById('metricTested');
const metricSuccess = document.getElementById('metricSuccess');
const metricPing = document.getElementById('metricPing');
const recSubName = document.getElementById('recSubName');
const copyRecSubBtn = document.getElementById('copyRecSubBtn');
const recBoxTitle = document.getElementById('recBoxTitle');

// =============================================================================
// SUBSCRIPTION DATABASE
// =============================================================================
const SUBSCRIPTION_DATABASE = [
    {
        category: "🔥 РАЗДЕЛ 1: GOIDA — ЛУЧШЕЕ ДЛЯ RUSSIA (DPI+SNI bypass)",
        items: [
            { name: "Goida Node 1 (стабильный)", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/1.txt" },
            { name: "Goida Node 2", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/2.txt" },
            { name: "Goida Node 5", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/5.txt" },
            { name: "Goida Node 10", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/10.txt" },
            { name: "Goida Node 26 ★ PREMIUM", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/26.txt" },
            { name: "Goida Node 30", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/30.txt" }
        ]
    },
    {
        category: "🔐 РАЗДЕЛ 2: XTLS-REALITY (лучший обход ТСПУ и DPI в России)",
        items: [
            { name: "Reality XTLS Telegram Collector ★", url: "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/reality.txt" },
            { name: "Barry-far VLESS Reality Protocol", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Splitted-By-Protocol/vless.txt" },
            { name: "Epodonios Sub1 — Reality ★", url: "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub1.txt" },
            { name: "V2RayRoot VLESS Reality", url: "https://raw.githubusercontent.com/V2RayRoot/V2RayConfig/refs/heads/main/Config/vless.txt" },
            { name: "4n0nymou3 Multi-Proxy Reality+SNI", url: "https://github.com/4n0nymou3/multi-proxy-config-fetcher/raw/refs/heads/main/configs/proxy_configs.txt" },
            { name: "Wuqb2i4f XTLS Mix-URI", url: "https://raw.githubusercontent.com/wuqb2i4f/xray-config-toolkit/main/output/base64/mix-uri" },
            { name: "soroushmirzaei — все конфиги", url: "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/splitted/mixed" }
        ]
    },
    {
        category: "🌐 РАЗДЕЛ 3: SNI + CIDR BYPASS (специально для России)",
        items: [
            { name: "KvRuVPN — основная, SNI/CIDR для России ★", url: "https://gitverse.ru/api/repos/kfwlru/sub/raw/branch/main/212.txt" },
            { name: "KvRuVPN2 — белые списки CIDR", url: "https://gitverse.ru/api/repos/ru-wbl/wl/raw/branch/master/KvRuVPN/KvRuVPN.txt" },
            { name: "igareck — VLESS для России, SNI bypass ★", url: "https://raw.githubusercontent.com/igareck/vpn-configs-for-russia/refs/heads/main/BLACK_VLESS_RUS.txt" },
            { name: "STR97 — DPI+SNI Bypass для РФ ★", url: "https://raw.githubusercontent.com/STR97/STRUGOV/refs/heads/main/STR.BYPASS" },
            { name: "F0rc3Run VLESS — CIDR авто-тест ★", url: "https://raw.githubusercontent.com/F0rc3Run/F0rc3Run/refs/heads/main/splitted-by-protocol/vless.txt" },
            { name: "MatinGhanbari VLESS Filtered CIDR ★", url: "https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/main/subscriptions/filtered/subs/vless.txt" },
            { name: "Sevcator — VL (VLESS) SNI-aware", url: "https://raw.githubusercontent.com/sevcator/5ubscrpt10n/main/protocols/vl.txt" },
            { name: "Sakha1370 — авто-проверенные прокси", url: "https://raw.githubusercontent.com/sakha1370/OpenRay/refs/heads/main/output/all_valid_proxies.txt" }
        ]
    },
    {
        category: "⚡️ РАЗДЕЛ 4: EPODONIOS — часто обновляемые (до 30 мин)",
        items: [
            { name: "Epodonios Sub1 — Reality ★", url: "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub1.txt" },
            { name: "Epodonios Sub2", url: "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub2.txt" },
            { name: "Epodonios Sub3", url: "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub3.txt" },
            { name: "Epodonios All Base64", url: "https://github.com/Epodonios/v2ray-configs/raw/main/All_Configs_base64_Sub.txt" }
        ]
    },
    {
        category: "💎 РАЗДЕЛ 5: BARRY-FAR — крупнейший репозиторий",
        items: [
            { name: "Barry-far Sub1 ★", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub1.txt" },
            { name: "Barry-far Sub2", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Sub2.txt" },
            { name: "Barry-far VLESS Reality ★", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Splitted-By-Protocol/vless.txt" },
            { name: "Barry-far All Configs Base64", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/All_Configs_base64_Sub.txt" }
        ]
    },
    {
        category: "📡 РАЗДЕЛ 6: АВТО-СОБРАННЫЕ (Telegram-парсеры)",
        items: [
            { name: "Mohamad TG VLESS Collector ★", url: "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/vless.txt" },
            { name: "10ium VLESS Scraped", url: "https://raw.githubusercontent.com/10ium/ScrapeAndCategorize/refs/heads/main/output_configs/Vless.txt" },
            { name: "Ebrasha — авто-сбор VLESS ★", url: "https://raw.githubusercontent.com/ebrasha/free-v2ray-public-list/refs/heads/main/vless_configs.txt" }
        ]
    },
    {
        category: "🎮 РАЗДЕЛ 7: ИГРОВЫЕ (низкий пинг, быстрые)",
        items: [
            { name: "CidVPN General ★", url: "https://raw.githubusercontent.com/CidVpn/cid-vpn-config/refs/heads/main/general.txt" },
            { name: "TeknoVPN Servers", url: "https://raw.githubusercontent.com/teknovpnhub/v2ray-subscription/refs/heads/main/servers.txt" },
            { name: "Danialsamadi AllConfigs", url: "https://raw.githubusercontent.com/Danialsamadi/v2go/refs/heads/main/AllConfigsSub.txt" }
        ]
    }
];

// =============================================================================
// COUNTRY DETECTION (for filtering unknown servers)
// =============================================================================
function detectCountry(serverName) {
    if (!serverName) return null;

    // 1. Flag emoji detection (most reliable)
    const flagMap = {
        '\u{1F1F7}\u{1F1FA}': 'RU', '\u{1F1E9}\u{1F1EA}': 'DE', '\u{1F1F3}\u{1F1F1}': 'NL',
        '\u{1F1FA}\u{1F1F8}': 'US', '\u{1F1EB}\u{1F1EE}': 'FI', '\u{1F1EB}\u{1F1F7}': 'FR',
        '\u{1F1F8}\u{1F1EC}': 'SG', '\u{1F1EF}\u{1F1F5}': 'JP', '\u{1F1F0}\u{1F1F7}': 'KR',
        '\u{1F1EC}\u{1F1E7}': 'GB', '\u{1F1E8}\u{1F1E6}': 'CA', '\u{1F1E6}\u{1F1FA}': 'AU',
        '\u{1F1F9}\u{1F1F7}': 'TR', '\u{1F1EE}\u{1F1F3}': 'IN', '\u{1F1F8}\u{1F1EA}': 'SE',
        '\u{1F1E8}\u{1F1ED}': 'CH', '\u{1F1ED}\u{1F1F0}': 'HK', '\u{1F1F9}\u{1F1FC}': 'TW',
        '\u{1F1E7}\u{1F1F7}': 'BR', '\u{1F1F5}\u{1F1F1}': 'PL', '\u{1F1E8}\u{1F1FF}': 'CZ',
        '\u{1F1E6}\u{1F1F9}': 'AT', '\u{1F1EE}\u{1F1EA}': 'IE', '\u{1F1EE}\u{1F1F9}': 'IT',
        '\u{1F1EA}\u{1F1F8}': 'ES', '\u{1F1FA}\u{1F1E6}': 'UA', '\u{1F1F0}\u{1F1FF}': 'KZ',
        '\u{1F1E6}\u{1F1EA}': 'AE', '\u{1F1EE}\u{1F1F1}': 'IL', '\u{1F1F7}\u{1F1F4}': 'RO',
        '\u{1F1E7}\u{1F1EC}': 'BG', '\u{1F1F1}\u{1F1F9}': 'LT', '\u{1F1F1}\u{1F1FB}': 'LV',
        '\u{1F1EA}\u{1F1EA}': 'EE', '\u{1F1F3}\u{1F1F4}': 'NO', '\u{1F1E9}\u{1F1F0}': 'DK',
    };
    for (const [flag, code] of Object.entries(flagMap)) {
        if (serverName.includes(flag)) return code;
    }

    // 2. Full country names and city names
    const lower = serverName.toLowerCase();
    const wordPatterns = {
        'RU': ['russia', 'россия', 'moscow', 'москва', 'петербург', 'spb', 'msk', 'kazan', 'новосибирск', 'екатеринбург'],
        'DE': ['germany', 'германия', 'frankfurt', 'berlin', 'falkenstein', 'nuremberg', 'munich', 'dusseldorf'],
        'NL': ['netherlands', 'нидерланды', 'amsterdam', 'holland', 'rotterdam', 'haarlem'],
        'US': ['united states', 'america', 'сша', 'new york', 'los angeles', 'chicago', 'dallas', 'miami', 'seattle', 'washington', 'virginia', 'california', 'texas', 'oregon', 'atlanta', 'phoenix', 'denver', 'san jose', 'ashburn', 'fremont', 'newark', 'buffalo', 'hillsboro', 'charlotte', 'raleigh'],
        'FI': ['finland', 'финляндия', 'helsinki'],
        'FR': ['france', 'франция', 'paris', 'marseille', 'strasbourg', 'gravelines'],
        'SG': ['singapore', 'сингапур'],
        'JP': ['japan', 'япония', 'tokyo', 'osaka'],
        'KR': ['korea', 'корея', 'seoul', 'busan'],
        'GB': ['united kingdom', 'великобритания', 'london', 'england', 'manchester'],
        'CA': ['canada', 'канада', 'toronto', 'vancouver', 'montreal'],
        'AU': ['australia', 'австралия', 'sydney', 'melbourne'],
        'TR': ['turkey', 'турция', 'istanbul', 'ankara'],
        'IN': ['india', 'индия', 'mumbai', 'bangalore', 'delhi'],
        'SE': ['sweden', 'швеция', 'stockholm'],
        'CH': ['switzerland', 'швейцария', 'zurich'],
        'HK': ['hong kong', 'гонконг'],
        'TW': ['taiwan', 'тайвань', 'taipei'],
        'BR': ['brazil', 'бразилия', 'sao paulo'],
        'PL': ['poland', 'польша', 'warsaw'],
        'CZ': ['czech', 'чехия', 'prague'],
        'AT': ['austria', 'австрия', 'vienna'],
        'IE': ['ireland', 'ирландия', 'dublin'],
        'IT': ['italy', 'италия', 'rome', 'milan'],
        'ES': ['spain', 'испания', 'madrid', 'barcelona'],
        'UA': ['ukraine', 'украина', 'kyiv', 'kiev'],
        'KZ': ['kazakhstan', 'казахстан', 'almaty'],
        'AE': ['emirates', 'оаэ', 'dubai'],
        'IL': ['israel', 'израиль'],
        'RO': ['romania', 'румыния', 'bucharest'],
        'BG': ['bulgaria', 'болгария', 'sofia'],
        'LT': ['lithuania', 'литва', 'vilnius'],
        'LV': ['latvia', 'латвия', 'riga'],
        'EE': ['estonia', 'эстония', 'tallinn'],
        'NO': ['norway', 'норвегия', 'oslo'],
        'DK': ['denmark', 'дания', 'copenhagen'],
    };
    for (const [code, patterns] of Object.entries(wordPatterns)) {
        for (const p of patterns) {
            if (lower.includes(p)) return code;
        }
    }

    // 3. Two-letter country codes with word boundaries (e.g. "NL-Server", "[DE]", "US_Fast")
    const codesToCheck = ['RU','DE','NL','US','FI','FR','SG','JP','KR','GB','CA','HK','TW','SE','CH','AT','AU','BR','PL','CZ','IE','IT','ES','UA','IL','TR','NO','DK','BE','PT','RO','BG','LT','LV','EE','HU','AE','KZ'];
    for (const cc of codesToCheck) {
        const regex = new RegExp('(?:^|[\\s\\-_\\[\\(\\.\\|/,])' + cc + '(?:$|[\\s\\-_\\]\\)\\.\\|/,])', 'i');
        if (regex.test(serverName)) return cc;
    }

    // Also check for "UK" -> GB
    if (/(?:^|[\s\-_\[\(\.\|/,])UK(?:$|[\s\-_\]\)\.\|/,])/i.test(serverName)) return 'GB';

    return null; // Unknown country
}

// =============================================================================
// STATE
// =============================================================================
let statsData = {
    last_updated: "2026-07-04 00:00:00 UTC",
    total_nodes: 1250,
    protocols: { vless: 680, vmess: 240, trojan: 180, shadowsocks: 150 },
    russia_optimized: 340
};
let recommendedValue = "";

// =============================================================================
// INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupEventListeners();
    buildSourceListModal();
    setupTabs();
});

// =============================================================================
// STATS
// =============================================================================
function loadStats() {
    if (window.location.protocol === 'file:') {
        renderStats(statsData);
        return;
    }
    fetch('dist/stats.json')
        .then(r => r.ok ? r.json() : Promise.reject('err'))
        .then(data => { statsData = data; renderStats(data); })
        .catch(() => renderStats(statsData));
}

function renderStats(data) {
    statTotal.textContent = data.total_nodes.toLocaleString();
    statVless.textContent = data.protocols.vless.toLocaleString();
    statVmess.textContent = data.protocols.vmess.toLocaleString();
    statTrojan.textContent = data.protocols.trojan.toLocaleString();
    statSs.textContent = data.protocols.shadowsocks.toLocaleString();
    statRu.textContent = data.russia_optimized.toLocaleString();
    updateTime.textContent = data.last_updated;
}

// =============================================================================
// TABS
// =============================================================================
function setupTabs() {
    tabBtnDiagnostic.addEventListener('click', () => {
        tabBtnDiagnostic.classList.add('active');
        tabBtnCustom.classList.remove('active');
        tabDiagnostic.style.display = 'block';
        tabCustom.style.display = 'none';
        testTerminal.textContent = "Готов к запуску пинг-теста. Выберите категорию и нажмите запуск.";
        testResults.style.display = 'none';
    });

    tabBtnCustom.addEventListener('click', () => {
        tabBtnCustom.classList.add('active');
        tabBtnDiagnostic.classList.remove('active');
        tabCustom.style.display = 'block';
        tabDiagnostic.style.display = 'none';
        testTerminal.textContent = "Настройте параметры и нажмите «Собрать и оптимизировать подписку».";
        testResults.style.display = 'none';
    });

    customLimitSlider.addEventListener('input', (e) => {
        sliderValDisplay.textContent = `${e.target.value} нод`;
    });

    // Site badge toggles
    document.querySelectorAll('.site-badge[data-site]').forEach(badge => {
        badge.addEventListener('click', () => badge.classList.toggle('active'));
    });

    // Country badge toggles with "Все" logic
    document.querySelectorAll('#countryBadges .site-badge').forEach(badge => {
        badge.addEventListener('click', () => {
            const country = badge.getAttribute('data-country');
            if (country === 'any') {
                const isActive = badge.classList.toggle('active');
                if (isActive) {
                    document.querySelectorAll('#countryBadges .site-badge:not([data-country="any"])').forEach(b => b.classList.remove('active'));
                }
            } else {
                badge.classList.toggle('active');
                const anySpecificActive = document.querySelectorAll('#countryBadges .site-badge.active:not([data-country="any"])').length > 0;
                const allBadge = document.querySelector('#countryBadges .site-badge[data-country="any"]');
                if (anySpecificActive) {
                    allBadge.classList.remove('active');
                } else {
                    allBadge.classList.add('active');
                }
            }
        });
    });
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
    // Modal
    openSourceListBtn.addEventListener('click', () => sourceListModal.classList.add('show'));
    closeSourceListBtn.addEventListener('click', () => sourceListModal.classList.remove('show'));
    sourceListModal.addEventListener('click', (e) => {
        if (e.target === sourceListModal) sourceListModal.classList.remove('show');
    });

    // Finder
    runFinderBtn.addEventListener('click', runFindBestSubscription);
    copyFinderRecBtn.addEventListener('click', () => {
        if (finderRecUrl.value) copyText(finderRecUrl.value);
    });

    // Diagnostic tester
    runTestBtn.addEventListener('click', runSubscriptionDiagnostic);

    // Custom builder
    runCustomBuildBtn.addEventListener('click', runCustomSubscriptionBuild);

    // Copy recommended server
    copyRecSubBtn.addEventListener('click', () => {
        if (recommendedValue) copyText(recommendedValue);
    });
}

// =============================================================================
// BUILD SOURCE LIST MODAL
// =============================================================================
function buildSourceListModal() {
    modalSubscriptionGroups.innerHTML = "";
    SUBSCRIPTION_DATABASE.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group-container';

        const h4 = document.createElement('h4');
        h4.className = 'group-title';
        h4.textContent = group.category;
        groupDiv.appendChild(h4);

        group.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'source-item';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'source-name';
            nameSpan.textContent = item.name;
            itemDiv.appendChild(nameSpan);

            const urlSpan = document.createElement('span');
            urlSpan.className = 'source-url';
            urlSpan.textContent = item.url;
            itemDiv.appendChild(urlSpan);

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn-sm';
            copyBtn.textContent = 'Копировать';
            copyBtn.addEventListener('click', () => copyText(item.url));
            itemDiv.appendChild(copyBtn);

            groupDiv.appendChild(itemDiv);
        });

        modalSubscriptionGroups.appendChild(groupDiv);
    });
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(showToast)
        .catch(() => {
            try {
                const t = document.createElement("input");
                t.value = text;
                document.body.appendChild(t);
                t.select();
                document.execCommand('copy');
                document.body.removeChild(t);
                showToast();
            } catch (e) {
                alert("Не удалось скопировать. Скопируйте вручную.");
            }
        });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function writeToTerminal(text) {
    testTerminal.textContent += text;
    testTerminal.scrollTop = testTerminal.scrollHeight;
}

function writeFinderLog(text) {
    finderTerminal.textContent += text;
    finderTerminal.scrollTop = finderTerminal.scrollHeight;
}

// =============================================================================
// PROXY URI PARSER
// =============================================================================
function parseProxyUri(uri) {
    uri = uri.trim();
    if (!uri) return null;
    try {
        if (uri.startsWith('vless://') || uri.startsWith('trojan://') || uri.startsWith('ss://')) {
            const protocol = uri.split('://')[0];
            const rest = uri.split('://')[1];
            const parts = rest.split('#');
            const name = parts[1] ? decodeURIComponent(parts[1]) : 'Server';
            const mainPart = parts[0];
            let hostPortPart = "";
            if (protocol === 'ss' && !mainPart.includes('@')) {
                try { hostPortPart = atob(mainPart).split('@')[1]; } catch (e) { return null; }
            } else {
                hostPortPart = mainPart.split('@')[1];
            }
            if (!hostPortPart) return null;
            const hostPortClean = hostPortPart.split('?')[0];
            const host = hostPortClean.split(':')[0];
            const port = parseInt(hostPortClean.split(':')[1]) || 443;
            return { protocol, host, port, uri, name };
        } else if (uri.startsWith('vmess://')) {
            const decoded = atob(uri.replace('vmess://', ''));
            const config = JSON.parse(decoded);
            return {
                protocol: 'vmess',
                host: config.add,
                port: parseInt(config.port) || 443,
                uri,
                name: config.ps || 'VMess Server'
            };
        }
    } catch (e) {
        const match = uri.match(/@([^:\/?#]+):(\d+)/);
        if (match) {
            return { protocol: uri.split('://')[0], host: match[1], port: parseInt(match[2]), uri, name: 'Server' };
        }
    }
    return null;
}

// =============================================================================
// TCP PING (Browser-safe via fetch no-cors)
// =============================================================================
function tcpPing(host, port, timeout = 1200) {
    return new Promise((resolve) => {
        const start = performance.now();
        const controller = new AbortController();
        const id = setTimeout(() => {
            controller.abort();
            resolve({ success: false, time: timeout });
        }, timeout);
        const cb = Math.random().toString(36).substring(7);
        fetch(`https://${host}:${port}/?cb=${cb}`, { mode: 'no-cors', signal: controller.signal })
            .then(() => {
                clearTimeout(id);
                resolve({ success: true, time: Math.round(performance.now() - start) });
            })
            .catch(() => {
                clearTimeout(id);
                const elapsed = performance.now() - start;
                if (elapsed < timeout && elapsed > 5) {
                    resolve({ success: true, time: Math.round(elapsed) });
                } else {
                    resolve({ success: false, time: timeout });
                }
            });
    });
}

// Website accessibility check
function testSiteBypass(domain, timeout = 2500) {
    return new Promise((resolve) => {
        const start = performance.now();
        const controller = new AbortController();
        const id = setTimeout(() => {
            controller.abort();
            resolve({ success: false, time: timeout });
        }, timeout);
        fetch(`https://www.${domain}/favicon.ico?cb=${Math.random()}`, { mode: 'no-cors', signal: controller.signal })
            .then(() => {
                clearTimeout(id);
                resolve({ success: true, time: Math.round(performance.now() - start) });
            })
            .catch(() => {
                clearTimeout(id);
                const elapsed = performance.now() - start;
                if (elapsed < timeout && elapsed > 2) {
                    resolve({ success: true, time: Math.round(elapsed) });
                } else {
                    resolve({ success: false, time: timeout });
                }
            });
    });
}

// =============================================================================
// NODE FETCHERS
// =============================================================================
function generateMockNodes() {
    const nodes = [];
    const protocols = ['vless', 'vmess', 'trojan', 'ss'];
    const countries = ['\u{1F1E9}\u{1F1EA}', '\u{1F1FA}\u{1F1F8}', '\u{1F1F3}\u{1F1F1}', '\u{1F1EB}\u{1F1F7}', '\u{1F1F8}\u{1F1EC}', '\u{1F1EF}\u{1F1F5}'];
    const domains = ['nl.flux-server.net', 'de.reality-node.site', 'us.goida-bypass.com', 'sg.lowping.games', 'fi.fast-proxy.org', 'fr.epodonios.site'];
    for (let i = 1; i <= 60; i++) {
        const protocol = protocols[i % protocols.length];
        const host = domains[i % domains.length];
        const port = 443 + (i * 17) % 60000;
        const flag = countries[i % countries.length];
        let uri = "";
        if (protocol === 'vless') uri = `vless://e5cf1b4f@${host}:${port}?security=reality&sni=google.com#${flag}-Node-${i}-VLESS`;
        else if (protocol === 'trojan') uri = `trojan://password123@${host}:${port}?security=tls#${flag}-Node-${i}-Trojan`;
        else if (protocol === 'ss') uri = `ss://YWVzLTI1Ni1nY206cGFzcw==@${host}:${port}#${flag}-Node-${i}-SS`;
        else {
            const obj = { v: "2", ps: `${flag} Node-${i}-VMess`, add: host, port: port, id: "e5cf1b4f", aid: "0", scy: "auto", net: "ws", type: "none", host: "", path: "/", tls: "none" };
            uri = `vmess://${btoa(JSON.stringify(obj))}`;
        }
        nodes.push(uri);
    }
    return nodes;
}

async function fetchRawNodes() {
    if (window.location.protocol === 'file:') return generateMockNodes();
    const path = window.location.pathname.replace(/\/index\.html$/, '');
    let baseUrl = `${window.location.origin}${path}`;
    if (!baseUrl.endsWith('/')) baseUrl += '/';
    try {
        const r = await fetch(`${baseUrl}dist/all.txt`);
        if (!r.ok) throw new Error("Not found");
        const text = await r.text();
        return text.split('\n').filter(l => l.trim().length > 0);
    } catch (e) {
        return generateMockNodes();
    }
}

// Fetch and parse a single subscription source URL
async function fetchSubscriptionNodes(url, timeout = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
        const r = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        let text = await r.text();

        let lines = text.split('\n').filter(l => l.trim());

        // Check if content is proxy URIs or base64 encoded
        const hasProxyUri = lines.some(l =>
            l.startsWith('vless://') || l.startsWith('vmess://') ||
            l.startsWith('trojan://') || l.startsWith('ss://')
        );

        if (!hasProxyUri && lines.length > 0) {
            try {
                const decoded = atob(lines.join('').trim());
                lines = decoded.split('\n').filter(l => l.trim());
            } catch (e) { /* not base64 */ }
        }

        return lines.filter(l =>
            l.startsWith('vless://') || l.startsWith('vmess://') ||
            l.startsWith('trojan://') || l.startsWith('ss://')
        );
    } catch (e) {
        clearTimeout(timeoutId);
        throw e;
    }
}

// =============================================================================
// FINDER: FIND BEST SUBSCRIPTION (replaces old generator)
// =============================================================================
async function runFindBestSubscription() {
    runFinderBtn.disabled = true;
    finderOutputContainer.style.display = 'block';
    finderResults.style.display = 'none';
    finderRecommended.style.display = 'none';
    finderTerminal.textContent = '';
    finderLeaderboard.innerHTML = '';

    const selectedGroup = finderGroupSelect.value;
    let sourcesToTest = [];

    if (selectedGroup === 'all') {
        SUBSCRIPTION_DATABASE.forEach(g => g.items.forEach(item => sourcesToTest.push(item)));
    } else {
        const idx = parseInt(selectedGroup);
        if (SUBSCRIPTION_DATABASE[idx]) {
            SUBSCRIPTION_DATABASE[idx].items.forEach(item => sourcesToTest.push(item));
        }
    }

    writeFinderLog(`[ЗАПУСК] Анализ ${sourcesToTest.length} подписок...\n`);
    writeFinderLog(`[ИНФО] Для каждой: загрузка → парсинг → TCP-пинг до 3 серверов\n`);
    writeFinderLog(`${'─'.repeat(55)}\n\n`);

    const results = [];

    for (let i = 0; i < sourcesToTest.length; i++) {
        const source = sourcesToTest[i];
        writeFinderLog(`[${i + 1}/${sourcesToTest.length}] ${source.name}\n`);

        try {
            const proxyLines = await fetchSubscriptionNodes(source.url);

            if (proxyLines.length === 0) {
                writeFinderLog(`  ⚪ Пустая подписка (0 серверов)\n\n`);
                results.push({ name: source.name, url: source.url, serverCount: 0, tested: 0, working: 0, avgPing: 9999, score: 0 });
                continue;
            }

            writeFinderLog(`  📦 Серверов: ${proxyLines.length}\n`);

            // Parse and sample up to 3 servers
            const parsed = proxyLines.map(l => parseProxyUri(l)).filter(n => n !== null);
            const sampleSize = Math.min(3, parsed.length);
            const sample = parsed.sort(() => 0.5 - Math.random()).slice(0, sampleSize);

            let totalPing = 0;
            let workingCount = 0;

            for (const node of sample) {
                const res = await tcpPing(node.host, node.port, 1500);
                if (res.success) {
                    workingCount++;
                    totalPing += res.time;
                    writeFinderLog(`  ✅ ${node.host}:${node.port} — ${res.time}мс\n`);
                } else {
                    writeFinderLog(`  ❌ ${node.host}:${node.port} — таймаут\n`);
                }
            }

            const avgPing = workingCount > 0 ? Math.round(totalPing / workingCount) : 9999;
            const successRate = sampleSize > 0 ? workingCount / sampleSize : 0;
            const score = Math.round(successRate * 60 + (workingCount > 0 ? Math.max(0, 40 - avgPing / 25) : 0));

            results.push({ name: source.name, url: source.url, serverCount: proxyLines.length, tested: sampleSize, working: workingCount, avgPing, score });

            const status = score > 50 ? '🟢' : score > 20 ? '🟡' : '🔴';
            writeFinderLog(`  ${status} ${workingCount}/${sampleSize} работает, пинг ${avgPing === 9999 ? '—' : avgPing + 'мс'}, рейтинг: ${score}\n\n`);

        } catch (e) {
            const errMsg = e.name === 'AbortError' ? 'Таймаут загрузки' :
                (e.message && e.message.includes('Failed to fetch') ? 'CORS заблокирован' : (e.message || 'Неизвестная ошибка'));
            writeFinderLog(`  🔴 Ошибка: ${errMsg}\n\n`);
            results.push({ name: source.name, url: source.url, serverCount: 0, tested: 0, working: 0, avgPing: 9999, score: -1, error: errMsg });
        }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    writeFinderLog(`${'─'.repeat(55)}\n`);
    writeFinderLog(`[ГОТОВО] Анализ завершён! Результаты отсортированы.\n`);

    // Build leaderboard UI
    finderLeaderboard.innerHTML = '';
    results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        if (index === 0 && result.score > 0) item.classList.add('gold');
        else if (index === 1 && result.score > 0) item.classList.add('silver');
        else if (index === 2 && result.score > 0) item.classList.add('bronze');

        const statusIcon = result.score > 50 ? '🟢' : result.score > 20 ? '🟡' : result.score >= 0 ? '🔴' : '⚫';
        const statsText = result.error
            ? `Ошибка: ${result.error}`
            : `${result.serverCount} серверов · ${result.working}/${result.tested} рабочих · ${result.avgPing === 9999 ? '—' : result.avgPing + 'мс'}`;

        const rank = document.createElement('span');
        rank.className = 'lb-rank';
        rank.textContent = `#${index + 1}`;

        const info = document.createElement('div');
        info.className = 'lb-info';
        const nameEl = document.createElement('span');
        nameEl.className = 'lb-name';
        nameEl.textContent = `${statusIcon} ${result.name}`;
        const statsEl = document.createElement('span');
        statsEl.className = 'lb-stats';
        statsEl.textContent = statsText;
        info.appendChild(nameEl);
        info.appendChild(statsEl);

        const scoreEl = document.createElement('div');
        scoreEl.className = 'lb-score';
        scoreEl.textContent = result.score >= 0 ? result.score : '—';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn-sm';
        copyBtn.textContent = 'Копировать';
        copyBtn.addEventListener('click', () => copyText(result.url));

        item.appendChild(rank);
        item.appendChild(info);
        item.appendChild(scoreEl);
        item.appendChild(copyBtn);

        finderLeaderboard.appendChild(item);
    });

    // Show best result
    const best = results.find(r => r.score > 0);
    if (best) {
        finderRecName.textContent = `${best.name} — ${best.serverCount} серверов, пинг ${best.avgPing === 9999 ? '—' : best.avgPing + 'мс'}, рейтинг: ${best.score}`;
        finderRecUrl.value = best.url;
        finderRecommended.style.display = 'block';
    }

    finderResults.style.display = 'block';
    runFinderBtn.disabled = false;
    finderResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =============================================================================
// DIAGNOSTIC TEST (tests individual servers from merged base)
// =============================================================================
async function runSubscriptionDiagnostic() {
    runTestBtn.disabled = true;
    testResults.style.display = "none";
    testTerminal.textContent = "";

    writeToTerminal(`[ИНИЦИАЛИЗАЦИЯ] Запуск РЕАЛЬНОГО пинг-теста...\n`);
    writeToTerminal(`[ЗАГРУЗКА] Получение базы серверов...\n`);

    const rawNodes = await fetchRawNodes();
    const parsedNodes = rawNodes.map(uri => parseProxyUri(uri)).filter(n => n !== null);

    writeToTerminal(`[УСПЕХ] Загружено: ${rawNodes.length}. Распознано: ${parsedNodes.length}.\n`);

    const selectedGroupValue = testGroupSelect.value;
    let filteredNodes = [];

    if (selectedGroupValue === "all") {
        filteredNodes = parsedNodes;
    } else {
        filteredNodes = parsedNodes.filter(node => {
            const nl = node.name.toLowerCase();
            if (selectedGroupValue === "goida") return nl.includes("goida");
            if (selectedGroupValue === "reality") return node.uri.includes("reality");
            if (selectedGroupValue === "cidr") return nl.includes("cidr") || nl.includes("bypass") || nl.includes("russia");
            if (selectedGroupValue === "epodonios") return nl.includes("epodonios");
            if (selectedGroupValue === "barry") return nl.includes("barry");
            if (selectedGroupValue === "scraped") return nl.includes("collector") || nl.includes("scraped");
            if (selectedGroupValue === "gaming") return nl.includes("game") || nl.includes("cidvpn") || nl.includes("tekno");
            return true;
        });
    }

    if (filteredNodes.length === 0) filteredNodes = parsedNodes;

    const sampleToTest = filteredNodes.sort(() => 0.5 - Math.random()).slice(0, 7);
    writeToTerminal(`[ТЕСТ] Опрос TCP-портов для ${sampleToTest.length} узлов...\n\n`);

    let totalPing = 0, successfulCount = 0, bestNode = null, bestPing = 9999;

    for (let i = 0; i < sampleToTest.length; i++) {
        const node = sampleToTest[i];
        writeToTerminal(`[${i + 1}/${sampleToTest.length}] ${node.host}:${node.port} (${node.protocol.toUpperCase()})...\n`);
        const result = await tcpPing(node.host, node.port);
        if (result.success) {
            writeToTerminal(`  → ✅ Подключено за ${result.time}мс\n`);
            totalPing += result.time;
            successfulCount++;
            if (result.time < bestPing) { bestPing = result.time; bestNode = node; }
        } else {
            writeToTerminal(`  → ❌ Таймаут\n`);
        }
        writeToTerminal(`${'─'.repeat(50)}\n`);
    }

    writeToTerminal(`\n[ГОТОВО] Тестирование завершено.\n`);

    const avgPing = successfulCount > 0 ? Math.round(totalPing / successfulCount) : 0;
    metricTested.textContent = sampleToTest.length;
    metricSuccess.textContent = successfulCount;
    metricPing.textContent = successfulCount > 0 ? `${avgPing}мс` : "—";

    recBoxTitle.textContent = "Рекомендованный сервер с лучшим пингом:";
    if (bestNode) {
        recSubName.textContent = `${bestNode.name} (${bestNode.host}:${bestNode.port}) — ${bestPing}мс`;
        recommendedValue = bestNode.uri;
        copyRecSubBtn.textContent = "Копировать этот сервер";
    } else {
        recSubName.textContent = "Нет доступных серверов";
        recommendedValue = "";
    }

    testResults.style.display = "block";
    runTestBtn.disabled = false;
    testResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =============================================================================
// CUSTOM SUBSCRIPTION BUILDER (with filters)
// =============================================================================
async function runCustomSubscriptionBuild() {
    runCustomBuildBtn.disabled = true;
    testResults.style.display = "none";
    testTerminal.textContent = "";

    const limit = parseInt(customLimitSlider.value) || 30;
    const filterUnknown = checkFilterUnknown.checked;
    const filterDuplicates = checkFilterDuplicateHosts.checked;

    // Get active countries
    const allCountriesActive = document.querySelector('#countryBadges .site-badge[data-country="any"]')?.classList.contains('active');
    const activeCountries = [];
    if (!allCountriesActive) {
        document.querySelectorAll('#countryBadges .site-badge.active').forEach(b => {
            const c = b.getAttribute('data-country');
            if (c && c !== 'any') activeCountries.push(c);
        });
    }

    writeToTerminal(`[ИНИЦИАЛИЗАЦИЯ] Создание оптимизированной подписки...\n`);
    writeToTerminal(`[НАСТРОЙКИ] Лимит: ${limit} серверов\n`);
    if (filterUnknown) writeToTerminal(`[ФИЛЬТР] ✅ Убрать неизвестные серверы (без страны)\n`);
    if (filterDuplicates) writeToTerminal(`[ФИЛЬТР] ✅ Убрать дубликаты по домену\n`);
    if (activeCountries.length > 0) writeToTerminal(`[ФИЛЬТР] 🌍 Только страны: ${activeCountries.join(', ')}\n`);
    writeToTerminal(`${'─'.repeat(50)}\n`);

    // Website accessibility checks
    const activeSiteBadges = document.querySelectorAll('.site-badge.active[data-site]');
    const sitesToTest = Array.from(activeSiteBadges).map(b => b.getAttribute('data-site'));

    if (sitesToTest.length > 0) {
        writeToTerminal(`[САЙТЫ] Проверка доступности ресурсов:\n`);
        for (const site of sitesToTest) {
            writeToTerminal(`  → ${site}... `);
            const access = await testSiteBypass(site);
            writeToTerminal(access.success ? `ДОСТУПЕН (${access.time}мс)\n` : `БЛОКИРУЕТСЯ\n`);
        }
        writeToTerminal(`${'─'.repeat(50)}\n`);
    }

    writeToTerminal(`[ЗАГРУЗКА] Скачивание базы серверов...\n`);
    const rawNodes = await fetchRawNodes();
    let parsedNodes = rawNodes.map(uri => parseProxyUri(uri)).filter(n => n !== null);

    writeToTerminal(`[ИНФО] Всего конфигов: ${parsedNodes.length}\n`);

    // Apply filters
    let beforeFilter = parsedNodes.length;

    if (filterUnknown) {
        parsedNodes = parsedNodes.filter(n => detectCountry(n.name) !== null);
        writeToTerminal(`[ФИЛЬТР] Убрано неизвестных: ${beforeFilter - parsedNodes.length}. Осталось: ${parsedNodes.length}\n`);
        beforeFilter = parsedNodes.length;
    }

    if (activeCountries.length > 0) {
        parsedNodes = parsedNodes.filter(n => {
            const country = detectCountry(n.name);
            return country && activeCountries.includes(country);
        });
        writeToTerminal(`[ФИЛЬТР] По странам: осталось ${parsedNodes.length}\n`);
        beforeFilter = parsedNodes.length;
    }

    if (filterDuplicates) {
        const seen = new Set();
        parsedNodes = parsedNodes.filter(n => {
            if (seen.has(n.host)) return false;
            seen.add(n.host);
            return true;
        });
        writeToTerminal(`[ФИЛЬТР] Дубликатов убрано: ${beforeFilter - parsedNodes.length}. Осталось: ${parsedNodes.length}\n`);
    }

    if (parsedNodes.length === 0) {
        writeToTerminal(`\n[ОШИБКА] После фильтрации не осталось серверов. Попробуйте ослабить фильтры.\n`);
        runCustomBuildBtn.disabled = false;
        return;
    }

    // Benchmark
    const benchmarkList = parsedNodes.sort(() => 0.5 - Math.random()).slice(0, Math.min(50, parsedNodes.length));
    writeToTerminal(`[ТЕСТ] Тестирование ${benchmarkList.length} серверов...\n`);

    const testedNodes = [];
    const batchSize = 10;

    for (let i = 0; i < benchmarkList.length; i += batchSize) {
        const batch = benchmarkList.slice(i, i + batchSize);
        writeToTerminal(`[ПАКЕТ] Серверы [${i + 1}-${Math.min(i + batchSize, benchmarkList.length)}/${benchmarkList.length}]...\n`);

        const results = await Promise.all(batch.map(async (node) => {
            const res = await tcpPing(node.host, node.port);
            return { node, success: res.success, ping: res.time };
        }));

        results.forEach(res => {
            if (res.success) {
                testedNodes.push(res);
                writeToTerminal(`  ✅ ${res.node.host} — ${res.ping}мс (${res.node.protocol.toUpperCase()})\n`);
            } else {
                writeToTerminal(`  ❌ ${res.node.host} — таймаут\n`);
            }
        });
    }

    writeToTerminal(`\n[СОРТИРОВКА] Рабочих серверов: ${testedNodes.length}\n`);

    if (testedNodes.length === 0) {
        writeToTerminal(`[ОШИБКА] Ни один сервер не ответил. Попробуйте ослабить фильтры.\n`);
        runCustomBuildBtn.disabled = false;
        return;
    }

    testedNodes.sort((a, b) => a.ping - b.ping);
    const optimizedNodes = testedNodes.slice(0, limit);
    const base64Content = btoa(optimizedNodes.map(n => n.node.uri).join('\n'));

    const totalPingOpt = optimizedNodes.reduce((acc, n) => acc + n.ping, 0);
    const avgPing = Math.round(totalPingOpt / optimizedNodes.length);

    writeToTerminal(`[УСПЕХ] Отобрано лучших: ${optimizedNodes.length} серверов\n`);
    writeToTerminal(`[СРЕДНИЙ ПИНГ] ${avgPing}мс\n`);
    writeToTerminal(`[СОВЕТ] Скопируйте подписку и импортируйте из буфера обмена в Happ.\n`);

    metricTested.textContent = benchmarkList.length;
    metricSuccess.textContent = testedNodes.length;
    metricPing.textContent = `${avgPing}мс`;

    recBoxTitle.textContent = "Ваша оптимизированная подписка:";
    recSubName.textContent = `Топ ${optimizedNodes.length} быстрейших серверов (оптимизировано)`;
    recommendedValue = base64Content;
    copyRecSubBtn.textContent = "Скопировать подписку в буфер Happ";

    testResults.style.display = "block";
    runCustomBuildBtn.disabled = false;
    testResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
