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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupEventListeners();
    updateSubscriptionUrl();
});

// Load Stats from JSON
function loadStats() {
    // If running locally on file:// protocol, CORS will block standard fetch
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
                checkRuOnly.checked = false; // Turn off RU filter if toggling individual ones
            }
            // Prevent all unchecked
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
            // Re-check defaults if unchecked
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

    copyUrlBtn.addEventListener('click', copyToClipboard);
}

// Generate URL path based on selection
function updateSubscriptionUrl() {
    let baseUrl = "";
    
    // Auto-detect GitHub Pages URL path
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
        baseUrl = "https://your-username.github.io/flux-vpn-merger/";
    } else {
        // Construct base repo URL
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

        // If only one is selected
        if (vl && !vm && !tr && !ss) filePrefix = "vless";
        else if (!vl && vm && !tr && !ss) filePrefix = "vmess";
        else if (!vl && !vm && tr && !ss) filePrefix = "trojan";
        else if (!vl && !vm && !tr && ss) filePrefix = "ss";
        // Otherwise, fallback to all (since GitHub pages is static, we serve pre-built files)
        else filePrefix = "all";
    }

    const fileExtension = isBase64 ? "_base64.txt" : ".txt";
    const fullUrl = `${baseUrl}dist/${filePrefix}${fileExtension}`;
    
    subUrlInput.value = fullUrl;
}

// Copy to Clipboard Utility
function copyToClipboard() {
    subUrlInput.select();
    subUrlInput.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(subUrlInput.value)
        .then(() => {
            showToast();
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback
            try {
                document.execCommand('copy');
                showToast();
            } catch (e) {
                alert("Не удалось скопировать. Пожалуйста, выделите ссылку и скопируйте вручную.");
            }
        });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}
