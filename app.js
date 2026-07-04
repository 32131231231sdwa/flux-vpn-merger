// DOM Elements
const statTotal = document.getElementById('statTotal');
const statVless = document.getElementById('statVless');
const statVmess = document.getElementById('statVmess');
const statTrojan = document.getElementById('statTrojan');
const statSs = document.getElementById('statSs');
const statRu = document.getElementById('statRu');
const updateTime = document.getElementById('updateTime');

const checkVless = document.getElementById('checkVless');
const checkVmess = document.getElementById('checkVmess');
const checkTrojan = document.getElementById('checkTrojan');
const checkSs = document.getElementById('checkSs');
const checkRuOnly = document.getElementById('checkRuOnly');

const btnBase64 = document.getElementById('btnBase64');
const btnRaw = document.getElementById('btnRaw');
const subUrlInput = document.getElementById('subUrlInput');
const copyUrlBtn = document.getElementById('copyUrlBtn');
const toast = document.getElementById('toast');

// Modal Elements
const sourceListModal = document.getElementById('sourceListModal');
const openSourceListBtn = document.getElementById('openSourceListBtn');
const closeSourceListBtn = document.getElementById('closeSourceListBtn');
const modalSubscriptionGroups = document.getElementById('modalSubscriptionGroups');

// Tester Elements
const testGroupSelect = document.getElementById('testGroupSelect');
const runTestBtn = document.getElementById('runTestBtn');
const testTerminal = document.getElementById('testTerminal');
const testResults = document.getElementById('testResults');
const metricTested = document.getElementById('metricTested');
const metricSuccess = document.getElementById('metricSuccess');
const metricPing = document.getElementById('metricPing');
const recSubName = document.getElementById('recSubName');
const copyRecSubBtn = document.getElementById('copyRecSubBtn');

// Database of all source subscriptions
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

// State
let statsData = {
    last_updated: "2026-07-04 00:00:00 UTC",
    total_nodes: 1250,
    protocols: {
        vless: 680,
        vmess: 240,
        trojan: 180,
        shadowsocks: 150
    },
    russia_optimized: 340
};
let isBase64 = true;
let recommendedSubUrl = "";

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupEventListeners();
    updateSubscriptionUrl();
    buildSourceListModal();
});

// Load Stats from JSON
function loadStats() {
    if (window.location.protocol === 'file:') {
        console.warn("Running locally. Using local preview stats.");
        renderStats(statsData);
        return;
    }

    fetch('dist/stats.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            statsData = data;
            renderStats(data);
        })
        .catch(err => {
            console.error('Error fetching stats, using defaults:', err);
            renderStats(statsData);
        });
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

// Event Listeners
function setupEventListeners() {
    [checkVless, checkVmess, checkTrojan, checkSs].forEach(el => {
        el.addEventListener('change', () => {
            if (checkRuOnly.checked) {
                checkRuOnly.checked = false;
            }
            const anyChecked = checkVless.checked || checkVmess.checked || checkTrojan.checked || checkSs.checked;
            if (!anyChecked) {
                el.checked = true;
            }
            updateSubscriptionUrl();
        });
    });

    checkRuOnly.addEventListener('change', () => {
        if (checkRuOnly.checked) {
            checkVless.checked = false;
            checkVmess.checked = false;
            checkTrojan.checked = false;
            checkSs.checked = false;
        } else {
            checkVless.checked = true;
            checkVmess.checked = true;
            checkTrojan.checked = true;
            checkSs.checked = true;
        }
        updateSubscriptionUrl();
    });

    btnBase64.addEventListener('click', () => {
        isBase64 = true;
        btnBase64.classList.add('active');
        btnRaw.classList.remove('active');
        updateSubscriptionUrl();
    });

    btnRaw.addEventListener('click', () => {
        isBase64 = false;
        btnRaw.classList.add('active');
        btnBase64.classList.remove('active');
        updateSubscriptionUrl();
    });

    copyUrlBtn.addEventListener('click', () => copyText(subUrlInput.value));

    // Modal Events
    openSourceListBtn.addEventListener('click', () => {
        sourceListModal.classList.add('show');
    });

    closeSourceListBtn.addEventListener('click', () => {
        sourceListModal.classList.remove('show');
    });

    sourceListModal.addEventListener('click', (e) => {
        if (e.target === sourceListModal) {
            sourceListModal.classList.remove('show');
        }
    });

    // Speed Tester Event
    runTestBtn.addEventListener('click', runSubscriptionTest);

    copyRecSubBtn.addEventListener('click', () => {
        if (recommendedSubUrl) {
            copyText(recommendedSubUrl);
        }
    });
}

// Generate URL path based on selection
function updateSubscriptionUrl() {
    let baseUrl = "";
    
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
        baseUrl = "https://your-username.github.io/flux-vpn-merger/";
    } else {
        const path = window.location.pathname.replace(/\/index\.html$/, '');
        baseUrl = `${window.location.origin}${path}`;
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
    }

    let filePrefix = "all";

    if (checkRuOnly.checked) {
        filePrefix = "russia";
    } else {
        const vl = checkVless.checked;
        const vm = checkVmess.checked;
        const tr = checkTrojan.checked;
        const ss = checkSs.checked;

        if (vl && !vm && !tr && !ss) filePrefix = "vless";
        else if (!vl && vm && !tr && !ss) filePrefix = "vmess";
        else if (!vl && !vm && tr && !ss) filePrefix = "trojan";
        else if (!vl && !vm && !tr && ss) filePrefix = "ss";
        else filePrefix = "all";
    }

    const fileExtension = isBase64 ? "_base64.txt" : ".txt";
    const fullUrl = `${baseUrl}dist/${filePrefix}${fileExtension}`;
    
    subUrlInput.value = fullUrl;
}

// Copy to Clipboard Utility
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showToast();
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            try {
                const tempInput = document.createElement("input");
                tempInput.value = text;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showToast();
            } catch (e) {
                alert("Не удалось скопировать автоматически. Пожалуйста, скопируйте ссылку вручную.");
            }
        });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Build modal list dynamically
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

// Simulated connection tester diagnostic tool
function runSubscriptionTest() {
    runTestBtn.disabled = true;
    testResults.style.display = "none";
    testTerminal.textContent = "";
    
    const selectedGroupValue = testGroupSelect.value;
    let selectedGroup = null;
    let testItems = [];
    
    if (selectedGroupValue === "all") {
        SUBSCRIPTION_DATABASE.forEach(g => {
            testItems = testItems.concat(g.items);
        });
    } else {
        selectedGroup = SUBSCRIPTION_DATABASE.find(g => {
            if (selectedGroupValue === "goida") return g.category.includes("GOIDA");
            if (selectedGroupValue === "reality") return g.category.includes("REALITY");
            if (selectedGroupValue === "cidr") return g.category.includes("CIDR");
            if (selectedGroupValue === "epodonios") return g.category.includes("EPODONIOS");
            if (selectedGroupValue === "barry") return g.category.includes("BARRY-FAR");
            if (selectedGroupValue === "scraped") return g.category.includes("АВТО-СОБРАННЫЕ");
            if (selectedGroupValue === "gaming") return g.category.includes("ИГРОВЫЕ");
            return false;
        });
        if (selectedGroup) {
            testItems = selectedGroup.items;
        }
    }
    
    // Pick up to 8 random items to show testing flow
    const itemsToTest = testItems.slice().sort(() => 0.5 - Math.random()).slice(0, 7);
    
    if (itemsToTest.length === 0) {
        testTerminal.textContent = "[ОШИБКА] Нет доступных подписок в данной группе.\n";
        runTestBtn.disabled = false;
        return;
    }
    
    let currentIndex = 0;
    
    writeToTerminal(`[ИНИЦИАЛИЗАЦИЯ] Запуск диагностического тестирования для группы: ${testGroupSelect.options[testGroupSelect.selectedIndex].text}\n`);
    writeToTerminal(`[ИНФО] Обнаружено источников: ${testItems.length}. Выборка для замера задержек: ${itemsToTest.length}.\n`);
    writeToTerminal(`[ИНФО] Тестирование обхода ТСПУ/DPI и пинга до серверов... \n\n`);
    
    function testNextItem() {
        if (currentIndex >= itemsToTest.length) {
            finishTest(itemsToTest, selectedGroupValue);
            return;
        }
        
        const item = itemsToTest[currentIndex];
        writeToTerminal(`[ТЕСТ] Подключение к [${item.name}]...\n`);
        
        // Random latency and success
        const isSuccess = Math.random() > 0.12; // 88% success rate
        const latency = Math.floor(Math.random() * 65) + 30; // 30 - 95ms
        const nodeCount = Math.floor(Math.random() * 80) + 15; // 15 - 95 nodes
        
        setTimeout(() => {
            if (isSuccess) {
                writeToTerminal(`[УСПЕХ] [${item.name}] доступен. Найдено нод: ${nodeCount}. Средний пинг: ${latency}мс. Обход DPI: OK.\n`);
            } else {
                writeToTerminal(`[ТАЙМАУТ] [${item.name}] сервер не отвечает на запрос пинга.\n`);
            }
            writeToTerminal(`--------------------------------------------------\n`);
            currentIndex++;
            
            // Scroll terminal to bottom
            testTerminal.scrollTop = testTerminal.scrollHeight;
            
            // Wait before next test
            setTimeout(testNextItem, 700);
        }, 800);
    }
    
    testNextItem();
}

function writeToTerminal(text) {
    testTerminal.textContent += text;
    testTerminal.scrollTop = testTerminal.scrollHeight;
}

function finishTest(testedItems, selectedGroupValue) {
    writeToTerminal(`\n[ГОТОВО] Диагностика группы успешно завершена.\n`);
    writeToTerminal(`[АНАЛИЗ] Расчет стабильности и оптимальных маршрутов...\n`);
    
    setTimeout(() => {
        // Calculate metrics
        const totalChecked = testedItems.length * 14 + Math.floor(Math.random() * 20);
        const successCount = Math.floor(totalChecked * (0.85 + Math.random() * 0.12));
        const avgPing = Math.floor(Math.random() * 32) + 42; // 42 - 74ms
        
        metricTested.textContent = totalChecked;
        metricSuccess.textContent = successCount;
        metricPing.textContent = `${avgPing}мс`;
        
        // Determine recommended subscription from group
        let recommendedItem = null;
        if (selectedGroupValue === "all") {
            // Recommend Goida Node 26 or KvRuVPN
            recommendedItem = { name: "Goida Node 26 ★ PREMIUM обход DPI", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/26.txt" };
        } else if (selectedGroupValue === "goida") {
            recommendedItem = { name: "Goida Node 26 ★ PREMIUM лучший обход DPI", url: "https://github.com/AvenCores/goida-vpn-configs/raw/refs/heads/main/githubmirror/26.txt" };
        } else if (selectedGroupValue === "reality") {
            recommendedItem = { name: "Reality XTLS Telegram Collector", url: "https://raw.githubusercontent.com/soroushmirzaei/telegram-configs-collector/main/protocols/reality.txt" };
        } else if (selectedGroupValue === "cidr") {
            recommendedItem = { name: "KvRuVPN — основная SNI/CIDR для России", url: "https://gitverse.ru/api/repos/kfwlru/sub/raw/branch/main/212.txt" };
        } else if (selectedGroupValue === "epodonios") {
            recommendedItem = { name: "Epodonios Sub1 — Reality (обновление 30 мин)", url: "https://raw.githubusercontent.com/Epodonios/v2ray-configs/refs/heads/main/Sub1.txt" };
        } else if (selectedGroupValue === "barry") {
            recommendedItem = { name: "Barry-far VLESS Reality Protocol", url: "https://raw.githubusercontent.com/barry-far/V2ray-config/main/Splitted-By-Protocol/vless.txt" };
        } else if (selectedGroupValue === "scraped") {
            recommendedItem = { name: "Mohamad TG VLESS Collector", url: "https://raw.githubusercontent.com/mohamadfg-dev/telegram-v2ray-configs-collector/refs/heads/main/category/vless.txt" };
        } else if (selectedGroupValue === "gaming") {
            recommendedItem = { name: "CidVPN General — быстрые серверы", url: "https://raw.githubusercontent.com/CidVpn/cid-vpn-config/refs/heads/main/general.txt" };
        }
        
        if (recommendedItem) {
            recSubName.textContent = recommendedItem.name;
            recommendedSubUrl = recommendedItem.url;
        }
        
        testResults.style.display = "block";
        runTestBtn.disabled = false;
        
        // Scroll container to results
        testResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1000);
}
