/**
 * 全球與台灣 ASIC 自研晶片 × 資安概念股戰情終端主控制器 (Main Controller)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 初始化分頁切換
  initTabNavigation();

  // 2. 渲染各核心模組
  renderKpis();
  initVisualizer();
  renderTierCards();
  renderCybersecuritySection();
  renderCspChipsSection();
  initTcoCalculator();
  renderFinancialsSection();
  renderJapanKoreaSection();
});

function initTabNavigation() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderKpis() {
  const container = document.getElementById('kpiTickerContainer');
  if (!container) return;

  const kpis = [
    { label: "2026 全球自研 ASIC 產值", val: "> $450 億美元", sub: "年複合成長率 (CAGR) > 28%", color: "#8b5cf6" },
    { label: "博通 (Broadcom) 客製 ASIC 營收", val: "$120 億美元+", sub: "通吃 Google TPU 與 Meta MTIA", color: "#06b6d4" },
    { label: "世芯-KY (3661) 先進製程純度", val: "> 85% 先進製程", sub: "AWS Trainium 2 核心設計服務主供", color: "#10b981" },
    { label: "自研 ASIC 3 年 TCO 總節省", val: "45% ~ 58%", sub: "相較商業 GPU 節省逾十億美元", color: "#ffd700" },
    { label: "2026 全球資安市場總支出", val: "> $2,600 億美元", sub: "晶片硬體信任根與 AI-SPM 剛需", color: "#f43f5e" }
  ];

  container.innerHTML = kpis.map(k => `
    <div class="kpi-ticker-card">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-val" style="color:${k.color};">${k.val}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>
  `).join('');
}

function initVisualizer() {
  if (window.AsicVisualizer) {
    new window.AsicVisualizer('asicVisualizerContainer');
  }
}

function renderTierCards() {
  const container = document.getElementById('asicTierCardsContainer');
  const data = window.ASIC_SUPPLY_CHAIN_DATA;
  if (!container || !data) return;

  let html = `
    <div style="margin: 30px 0 16px 0; display:flex; justify-content:space-between; align-items:center;">
      <h3 style="font-size:17px; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px;">
        <span>📑</span> ASIC 產業鏈三大層級詳細賽道清單 (Detailed Sector Directory)
      </h3>
      <span style="font-size:11px; color:#94a3b8;">涵蓋矽智財 IP、設計服務 Turnkey、先進晶圓封測與白牌伺服器</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:20px;">
  `;

  data.tiers.forEach(tier => {
    html += `
      <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:10px; padding:20px; border-top:3px solid ${tier.color};">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h4 style="font-size:17px; font-weight:900; color:#fff;">${tier.nameZh}</h4>
            <div style="font-size:11px; color:#94a3b8; font-family:var(--font-mono);">${tier.nameEn}</div>
          </div>
          <span style="font-size:11px; padding:3px 10px; border-radius:12px; background:${tier.accent}; color:${tier.color}; font-weight:bold; border:1px solid ${tier.color}44;">
            ${tier.sectors.length} 個關鍵技術領域
          </span>
        </div>
        <p style="font-size:12px; color:#cbd5e1; margin-bottom:16px; background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid ${tier.color};">
          ${tier.description}
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:14px;">
          ${tier.sectors.map(sec => `
            <div style="background:rgba(10,16,28,0.7); border:1px solid var(--border-subtle); border-radius:8px; padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <strong style="color:#fff; font-size:14px;">${sec.titleZh}</strong>
                <span style="font-size:10px; padding:2px 6px; border-radius:4px; background:rgba(139,92,246,0.15); color:#c084fc; font-weight:bold;">
                  ${sec.status}
                </span>
              </div>
              <p style="font-size:11.5px; color:#94a3b8; margin-bottom:12px; line-height:1.5;">${sec.description}</p>
              
              <div style="border-top:1px dashed rgba(255,255,255,0.08); padding-top:8px;">
                <div style="font-size:10.5px; color:#64748b; font-weight:bold; margin-bottom:6px;">🎯 核心領頭羊與毛利率：</div>
                ${sec.keyPlayers.map(p => `
                  <div style="background:rgba(15,23,42,0.8); border-radius:4px; padding:6px 8px; margin-bottom:5px; font-size:11px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <strong style="color:#f8fafc;">${p.name}</strong>
                      <span style="color:#06b6d4; font-family:var(--font-mono); font-weight:bold;">${p.margin || ''}</span>
                    </div>
                    <div style="font-size:10.5px; color:#94a3b8; margin-top:2px;">${p.role}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function renderCybersecuritySection() {
  const container = document.getElementById('cybersecurityContainer');
  const data = window.CYBERSECURITY_DATA;
  if (!container || !data) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderView() {
    let list = [...data.stocks];
    if (currentCategory !== 'all') {
      list = list.filter(s => s.category === currentCategory);
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => 
        s.nameZh.toLowerCase().includes(q) || 
        s.nameEn.toLowerCase().includes(q) || 
        s.ticker.toLowerCase().includes(q) ||
        s.roleDescription.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <!-- 頂部三大戰略支柱 Banner -->
      <div style="margin-bottom:20px; padding:18px 22px; background:linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.12)); border:1px solid rgba(6,182,212,0.3); border-radius:10px;">
        <h2 style="font-size:19px; font-weight:900; color:#06b6d4; display:flex; align-items:center; gap:8px;">
          <span>🛡️</span> 為什麼 ASIC 算力爆炸時代，「晶片硬體信任根與資安」是絕對剛需？
        </h2>
        <p style="font-size:12px; color:#cbd5e1; margin-top:4px; line-height:1.6;">
          AI 晶片運算的是千億參數商業機密與隱私數據。沒有底層晶片信任根 (PUF) 與專用 Security ASIC 防護，再龐大的 AI 叢集也將淪為黑客攻擊與模型竊取的溫床！
        </p>
      </div>

      <!-- 三大戰略支柱卡片 -->
      <div class="cyber-pillars-grid">
        ${data.synergyPillars.map(p => `
          <div class="cyber-pillar-card">
            <h3 class="cyber-pillar-title">${p.title}</h3>
            <p class="cyber-pillar-desc">${p.description}</p>
            <div class="cyber-pillar-rep">代表廠商：${p.representative}</div>
          </div>
        `).join('')}
      </div>

      <!-- 股票過濾條 -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <div style="display:flex; gap:6px; flex-wrap:wrap;" id="cyberCatPills">
          <button class="tco-mode-btn ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">全部資安概念股 (All)</button>
          <button class="tco-mode-btn ${currentCategory === 'chip_puf' ? 'active' : ''}" data-cat="chip_puf">🔐 晶片硬體信任根 (力旺/PUF)</button>
          <button class="tco-mode-btn ${currentCategory === 'soc_service' ? 'active' : ''}" data-cat="soc_service">🏢 台灣 SOC 監控與通路 (安碁/精誠)</button>
          <button class="tco-mode-btn ${currentCategory === 'distribution' ? 'active' : ''}" data-cat="distribution">📦 企業資安代理 (零壹)</button>
          <button class="tco-mode-btn ${currentCategory === 'hardware_appliance' ? 'active' : ''}" data-cat="hardware_appliance">⚡ 資安硬體與 ASIC (Fortinet/立端)</button>
          <button class="tco-mode-btn ${currentCategory === 'global_leader' ? 'active' : ''}" data-cat="global_leader">🌐 美股純資安巨擘 (Palo Alto/CrowdStrike)</button>
        </div>
        <div>
          <input type="text" id="cyberSearchInput" placeholder="🔍 搜尋代號、資安技術或廠商..." style="background:#0b1324; border:1px solid #1e293b; color:#fff; padding:7px 14px; border-radius:20px; font-size:12px; outline:none; min-width:240px;">
        </div>
      </div>

      <!-- 資安卡片網格 -->
      <div class="cyber-stocks-grid">
        ${list.map(s => `
          <div class="cyber-stock-card">
            <div class="cyber-stock-header">
              <div>
                <h4 style="font-size:16px; font-weight:800; color:#fff;">${s.nameZh} (${s.ticker})</h4>
                <div style="font-size:11px; color:#06b6d4; font-family:var(--font-mono); margin-top:2px;">
                  ${s.categoryZh} · ${s.country}
                </div>
              </div>
              <div class="cyber-price-badge">
                ${s.currency === 'NTD' ? 'NT$' : 'US$'} ${s.price}
                <div style="font-size:11px; color:${s.changePct >= 0 ? '#10b981' : '#f43f5e'}; text-align:right;">
                  ${s.changePct >= 0 ? '+' : ''}${s.changePct}%
                </div>
              </div>
            </div>

            <div class="cyber-metrics-row">
              <span>本益比: <strong style="color:#fff;">${s.peRatio}x</strong></span>
              <span>殖利率: <strong style="color:#10b981;">${s.dividendYield}</strong></span>
              <span>市值: <strong style="color:#cbd5e1;">${s.marketCap}</strong></span>
            </div>

            <div style="font-size:11.5px; color:#cbd5e1; line-height:1.55; margin-bottom:10px;">
              ${s.roleDescription}
            </div>

            <div style="font-size:11px; background:rgba(15,23,42,0.6); padding:8px; border-radius:4px; margin-top:auto; border-left:3px solid #8b5cf6;">
              <span style="color:#c084fc; font-weight:bold;">🛡️ 核心護城河：</span>${s.moat}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    const pills = container.querySelectorAll('#cyberCatPills button');
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-cat');
        renderView();
      });
    });

    const searchInput = container.querySelector('#cyberSearchInput');
    if (searchInput) {
      searchInput.value = searchQuery;
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderView();
      });
    }
  }

  renderView();
}

function renderCspChipsSection() {
  const container = document.getElementById('cspChipsContainer');
  const fullData = window.ASIC_SUPPLY_CHAIN_DATA;
  const tpuData = fullData?.googleTpuSupplyChain;
  if (!container || !fullData) return;

  const taiwanTpuBeneficiaries = [
    { name: "聯發科 (2454 / MediaTek)", role: "Google 去博通化關鍵先鋒！手握自研 224G SerDes 核心 IP 與台積電 3nm/2nm 先進流片特權，搶攻次世代 TPU (v7) 雙供 (Dual Sourcing) 體系", share: "次世代雙供核心候選", margin: "48% ~ 50%", ticker: "2454.TW" },
    { name: "廣達 (2382 / QCT)", role: "TPU 白牌 AI 伺服器整機與機櫃主供 (深耕 Google 超過 15 年，主導 TPU Pod 組裝)", share: "TPU 整機市佔第一 (>65%)", margin: "8.5% ~ 10%", ticker: "2382.TW" },
    { name: "台積電 (2330 / TSM)", role: "TPU 歷代晶片 100% 獨家先進晶圓製造 (v4 7nm, v5 5nm/4nm, v6 4nm) 與 CoWoS 封裝", share: "獨家製造 (100%)", margin: "54% ~ 58%", ticker: "2330.TW" },
    { name: "雙鴻 (3324)", role: "TPU 水冷板 (Cold Plate) 與液冷系統核心主力，單卡解熱能力突破 700W~1000W", share: "水冷散熱雙雄", margin: "25% ~ 28%", ticker: "3324.TW" },
    { name: "奇鋐 (3017)", role: "TPU 機櫃級冷卻液分配系統 (CDU) 與 3D VC / 水冷模組關鍵代工", share: "機櫃水冷主力", margin: "22% ~ 25%", ticker: "3017.TW" },
    { name: "欣興 (3037)", role: "TPU 晶片高階 ABF 載板第一主供 (大尺寸 16~20 層高密度載板)", share: "全球載板龍頭", margin: "25% ~ 30%", ticker: "3037.TW" },
    { name: "金像電 (2368)", role: "TPU 主板 (UBB/OAM) 與 OCS 交換機背板超高層數 PCB", share: "AI PCB 霸主", margin: "28% ~ 32%", ticker: "2368.TW" },
    { name: "台光電 (2383)", role: "極低損耗 (Ultra Low Loss) CCL 銅箔基板，獨家吃下高速訊號板材", share: "高階 CCL 龍頭", margin: "28% ~ 30%", ticker: "2383.TW" },
    { name: "聯鈞 (3450)", role: "自研光開關 (OCS) 矽光子雷射封裝與光通訊收發模組", share: "矽光子戰略受惠", margin: "20% ~ 24%", ticker: "3450.TW" }
  ];

  container.innerHTML = `
    <!-- TPU 旗艦專用頂部 Banner -->
    <div class="tpu-hero-banner">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
        <div style="max-width:850px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="background:#4285f4; color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:800;">GOOGLE TPU SPECIAL</span>
            <span style="color:#34d399; font-size:11px; font-family:var(--font-mono); font-weight:bold;">100% 支撐 GEMINI 2.0 基礎大模型</span>
          </div>
          <h2 style="font-size:22px; font-weight:900; color:#fff; line-height:1.3;">
            ${tpuData?.title || 'Google TPU 全球上下游產業鏈旗艦全景地圖'}
          </h2>
          <p style="font-size:12.5px; color:#cbd5e1; margin-top:8px; line-height:1.65;">
            ${tpuData?.overview || ''}
          </p>
        </div>
        <div style="background:rgba(15,23,42,0.85); border:1px solid rgba(66,133,244,0.4); border-radius:10px; padding:12px 18px; font-size:11px; text-align:right;">
          <div style="color:#94a3b8;">累計晶片出貨</div>
          <div style="font-size:18px; font-weight:900; color:#4285f4;">> 2,000,000 顆</div>
          <div style="color:#34d399; font-size:10.5px; margin-top:2px;">單一 Pod 算力高達 8,960 顆直連</div>
        </div>
      </div>
    </div>

    <!-- 0. Google TPU 全球上下游產業鏈旗艦全景圖 (高清實體圖 + 互動拓撲圖) -->
    <div style="margin-bottom:28px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
        <h3 style="font-size:17px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
          <span>🗺️</span> Google TPU 全球上下游產業鏈旗艦全景圖
        </h3>
        <span style="font-size:11px; color:#38bdf8; background:rgba(6,182,212,0.12); padding:3px 10px; border-radius:12px; border:1px solid rgba(6,182,212,0.3);">
          包含晶圓代工、HBM、自研光開關、博通設計服務、廣達 ODM 與雲端大模型
        </span>
      </div>

      <!-- 高解析度產業鏈全景圖片展示 -->
      <div style="border: 1px solid rgba(66, 133, 244, 0.4); border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); margin-bottom: 20px; background:#070b14;">
        <img src="images/google_tpu_chain.png" alt="Google TPU 全球上下游產業鏈旗艦全景地圖" style="width: 100%; height: auto; display: block; min-height: 280px;" loading="eager">
      </div>
    </div>

    <!-- 0-B. Google TPU 全球上下游產業鏈專屬視覺化拓撲圖 -->
    <div id="googleTpuVisualizerContainer" style="margin-bottom:28px;"></div>

    <!-- 1. Google TPU 歷代進化時間軸 (Timeline) -->
    <div style="margin-bottom:28px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h3 style="font-size:16px; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px;">
          <span>⏳</span> Google TPU 十年架構演進史 (From TPU v1 to TPU v6 Trillium)
        </h3>
        <span style="font-size:11px; color:#94a3b8;">橫跨 28nm 至 4nm / 自研全光開關 OCS 顛覆</span>
      </div>
      <div class="tpu-timeline-scroll">
        ${tpuData?.generations.map(g => `
          <div class="tpu-gen-card ${g.gen.includes('v6') ? 'active-gen' : ''}">
            <div class="tpu-gen-badge">
              <span>${g.gen}</span>
              <span class="tpu-gen-pill">${g.year}</span>
            </div>
            <div style="font-size:11px; color:#06b6d4; font-family:var(--font-mono); margin-bottom:6px;">
              🏭 ${g.node}
            </div>
            <div style="font-size:11px; color:#cbd5e1; margin-bottom:4px;">
              💾 記憶體：<strong style="color:#fff;">${g.memory}</strong>
            </div>
            <div style="font-size:11px; color:#cbd5e1; margin-bottom:4px;">
              ❄️ 散熱：<span style="color:${g.cooling.includes('水冷') ? '#06b6d4' : '#94a3b8'};">${g.cooling}</span>
            </div>
            <div style="font-size:11px; color:#c084fc; margin-bottom:8px; font-family:var(--font-mono);">
              🌐 叢集：${g.scale}
            </div>
            <div style="font-size:10.5px; color:#94a3b8; background:rgba(15,23,42,0.6); padding:6px; border-radius:4px; line-height:1.4;">
              🎯 ${g.workload}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 2. Google TPU 上中下游三大層級核心地圖 -->
    <div class="tpu-tiers-grid">
      ${tpuData?.tiers.map(tier => `
        <div class="tpu-tier-container" style="border-top:3px solid ${tier.color};">
          <div class="tpu-tier-header">
            <div>
              <h4 style="font-size:17px; font-weight:900; color:#fff;">${tier.titleZh}</h4>
              <div style="font-size:11px; color:#94a3b8; font-family:var(--font-mono);">${tier.titleEn}</div>
            </div>
            <span style="font-size:11px; padding:3px 10px; border-radius:12px; background:rgba(255,255,255,0.06); color:${tier.color}; font-weight:bold;">
              ${tier.categories.length} 個關鍵環節
            </span>
          </div>
          <p style="font-size:12px; color:#cbd5e1; margin-bottom:16px; background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:6px; border-left:3px solid ${tier.color};">
            ${tier.description}
          </p>

          <div class="tpu-categories-grid">
            ${tier.categories.map(c => `
              <div class="tpu-cat-card">
                <div class="tpu-cat-header">
                  <div>
                    <div style="font-size:11px; color:#06b6d4; font-weight:bold;">${c.name}</div>
                    <div class="tpu-key-partner">${c.keyPlayer}</div>
                  </div>
                  ${c.share ? `<span class="tpu-share-tag">${c.share}</span>` : ''}
                </div>
                <p style="font-size:11.5px; color:#cbd5e1; line-height:1.55; margin-bottom:10px;">
                  ${c.role}
                </p>
                ${c.workload ? `
                  <div style="font-size:10.5px; color:#94a3b8; background:rgba(15,23,42,0.8); padding:6px 8px; border-radius:4px; margin-top:auto;">
                    ⚡ <strong>負載：</strong>${c.workload}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- 3. Google TPU 三大核心技術殺手鐧 -->
    <div style="margin-bottom:30px;">
      <h3 style="font-size:16px; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px; margin-bottom:14px;">
        <span>🚀</span> Google TPU 三大核心技術殺手鐧 (Architectural Innovations)
      </h3>
      <div class="tpu-innovations-grid">
        ${tpuData?.innovations.map(inno => `
          <div class="tpu-inno-card">
            <h4 style="font-size:14.5px; font-weight:800; color:#fff; margin-bottom:8px;">${inno.title}</h4>
            <p style="font-size:12px; color:#cbd5e1; line-height:1.6;">${inno.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 4. 台灣 TPU 核心概念股受惠排行榜 -->
    <div class="arch-table-card" style="margin-bottom:30px;">
      <div style="padding:16px 20px; background:#09101d; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <h3 style="font-size:16px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
            <span style="color:#06b6d4;">🇹🇼</span> 台灣 Google TPU 核心概念股與營收受惠純度排行榜
          </h3>
          <p style="font-size:11px; color:#94a3b8; margin-top:2px;">
            從廣達伺服器整機、台積電先進製造、雙鴻/奇鋐水冷到金像電 PCB 與聯鈞矽光子
          </p>
        </div>
        <span class="fin-badge-green">TPU 供應鏈主力</span>
      </div>
      <div class="arch-table-wrapper">
        <table class="arch-spec-table">
          <thead>
            <tr>
              <th>公司名稱 (代號)</th>
              <th>在 Google TPU 生態中的關鍵角色</th>
              <th style="color:#10b981;">供應鏈市佔 / 純度</th>
              <th style="color:#06b6d4;">毛利率區間</th>
              <th style="color:#ffd700;">戰略受惠評估</th>
            </tr>
          </thead>
          <tbody>
            ${taiwanTpuBeneficiaries.map(tb => `
              <tr>
                <td><strong style="color:#fff; font-size:13px;">${tb.name}</strong></td>
                <td style="font-size:11.5px; color:#cbd5e1; max-width:320px; white-space:normal; line-height:1.4;">${tb.role}</td>
                <td style="color:#10b981; font-weight:bold; font-family:var(--font-mono);">${tb.share}</td>
                <td style="color:#06b6d4; font-family:var(--font-mono); font-weight:bold;">${tb.margin}</td>
                <td><span class="fin-badge-purple">核心受惠冠軍</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- 5. 五大 CSP 自研晶片矩陣橫向大對決 -->
    <div class="arch-table-card">
      <div style="padding:16px 20px; background:#09101d; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <h3 style="font-size:16px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
            <span style="color:#06b6d4;">🏢</span> 五大 CSP 自研晶片架構與硬體規格大對決 (In-House Silicon Matrix)
          </h3>
          <p style="font-size:11px; color:#94a3b8; margin-top:2px;">
            包含 Google TPU v6 (Trillium)、AWS Trainium 2、Meta MTIA v2、微軟 Maia 100 與特斯拉 Dojo D1
          </p>
        </div>
        <span class="fin-badge-purple">自研晶片世代交替</span>
      </div>
      <div class="arch-table-wrapper">
        <table class="arch-spec-table">
          <thead>
            <tr>
              <th>自研晶片名稱 (Chip)</th>
              <th>所屬巨頭 (Owner)</th>
              <th style="color:#06b6d4;">先進製程 (Node)</th>
              <th style="color:#8b5cf6;">設計服務夥伴 (Turnkey)</th>
              <th>記憶體架構 (Memory)</th>
              <th>晶片互聯通訊協議</th>
              <th>主要運算工作負載</th>
              <th style="color:#10b981;">TCO 性價比優勢</th>
            </tr>
          </thead>
          <tbody>
            ${fullData.cspChipMatrix.map(m => `
              <tr>
                <td><strong style="color:#fff; font-size:13px;">${m.name}</strong></td>
                <td style="color:#cbd5e1;">${m.owner}</td>
                <td style="color:#06b6d4; font-family:var(--font-mono); font-weight:bold;">${m.processNode}</td>
                <td style="color:#c084fc; font-weight:bold;">${m.designPartner}</td>
                <td style="font-family:var(--font-mono);">${m.memorySpec}</td>
                <td>${m.interconnect}</td>
                <td style="font-size:11px; color:#cbd5e1; max-width:240px; white-space:normal; line-height:1.4;">${m.primaryWorkload}</td>
                <td><span class="fin-badge-green">${m.tcoAdvantage}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // 初始化 Google TPU 專屬拓撲視覺化引擎
  if (window.GoogleTpuVisualizer) {
    new window.GoogleTpuVisualizer('googleTpuVisualizerContainer');
  }
}

function initTcoCalculator() {
  if (window.TcoCalculator) {
    new window.TcoCalculator('tcoCalculatorContainer');
  }
}

function renderFinancialsSection() {
  const container = document.getElementById('financialsContainer');
  if (!container) return;

  const financialTableData = [
    { company: "聯發科 (2454 / MediaTek)", sector: "Enterprise AI ASIC / IC設計霸主", price: "NT$ 1,295", pe: "19.5x", roic: "26.5%", wacc: "8.0%", spread: "+18.5%", status: "高利差巨無霸 (+18.5%)", moat: "224G SerDes 自研 IP、台積電 3nm/2nm 先進流片與 NVIDIA 策略結盟" },
    { company: "世芯-KY (3661)", sector: "ASIC 設計服務 (股王)", price: "NT$ 2,350", pe: "38.5x", roic: "32.0%", wacc: "7.8%", spread: "+24.2%", status: "高利差成長怪物", moat: "北美 CSP 3nm/5nm 先進製程市佔第一" },
    { company: "創意電子 (3443)", sector: "ASIC 設計服務 (台積子公司)", price: "NT$ 1,280", pe: "42.0x", roic: "28.5%", wacc: "7.6%", spread: "+20.9%", status: "卓越價值創造", moat: "台積電 CoWoS 封裝與 HBM 介面直通" },
    { company: "力旺 (3529)", sector: "晶片硬體信任根 (PUF IP)", price: "NT$ 2,980", pe: "78.5x", roic: "45.0%", wacc: "7.5%", spread: "+37.5%", status: "輕資產超高利差 (毛利100%)", moat: "量子抗性晶片指紋資安 IP 獨佔" },
    { company: "博通 (Broadcom / AVGO)", sector: "全球客製 ASIC 霸主", price: "US$ 172.0", pe: "28.0x", roic: "34.0%", wacc: "9.5%", spread: "+24.5%", status: "全球市佔第一 (>60%)", moat: "Google TPU 與 Meta 核心綁定" },
    { company: "安碁資訊 (6690)", sector: "SOC 資安監控鑑識", price: "NT$ 215.0", pe: "21.5x", roic: "22.5%", wacc: "7.2%", spread: "+15.3%", status: "政府金融特許壁壘", moat: "台灣最大 SOC 監控，法規剛性需求" },
    { company: "零壹科技 (3029)", sector: "企業資安與雲端代理", price: "NT$ 108.5", pe: "15.2x", roic: "24.2%", wacc: "7.4%", spread: "+16.8%", status: "高股息穩健利差", moat: "獨家代理 Palo Alto / Fortinet / Cisco" },
    { company: "立端科技 (6245)", sector: "網通資安硬體伺服器", price: "NT$ 98.0", pe: "16.8x", roic: "18.5%", wacc: "7.5%", spread: "+11.0%", status: "台達電綜效硬體代工", moat: "Check Point 核心硬體合作夥伴" },
    { company: "Palo Alto (PANW)", sector: "全球純資安市佔龍頭", price: "US$ 395.0", pe: "48.0x", roic: "26.5%", wacc: "9.2%", spread: "+17.3%", status: "全面平台化 (ARR>40億)", moat: "次世代防火牆與 AI 原生 Cortex" },
    { company: "CrowdStrike (CRWD)", sector: "終端 EDR/XDR 王者", price: "US$ 345.0", pe: "65.0x", roic: "25.0%", wacc: "9.6%", spread: "+15.4%", status: "超高自由現金流利潤", moat: "Falcon 單一代理巨型威脅資料庫" },
    { company: "Fortinet (FTNT)", sector: "自研資安 ASIC 晶片霸主", price: "US$ 92.5", pe: "42.0x", roic: "35.5%", wacc: "9.0%", spread: "+26.5%", status: "極致硬體性價比利差", moat: "自研 SP5 資安晶片效能領先同業5倍" }
  ];

  container.innerHTML = `
    <div class="arch-table-card">
      <div style="padding:16px 20px; background:#09101d; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <h3 style="font-size:16px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
            <span style="color:#ffd700;">📊</span> ASIC 概念股與資安股財務指標與 ROIC − WACC 評級大表
          </h3>
          <p style="font-size:11px; color:#94a3b8; margin-top:2px;">
            衡量每家公司在自研晶片與資安防護大浪潮中的真實股東價值創造力 (Economic Spread)
          </p>
        </div>
        <span class="fin-badge-green">EVA 價值創造矩陣</span>
      </div>
      <div class="arch-table-wrapper">
        <table class="arch-spec-table">
          <thead>
            <tr>
              <th>公司名稱 (代號)</th>
              <th>所屬賽道</th>
              <th>現價</th>
              <th>本益比 (PE)</th>
              <th style="color:#10b981;">ROIC (資本回報率)</th>
              <th style="color:#f43f5e;">WACC (資金成本)</th>
              <th style="color:#ffd700;">經濟利差 (ROIC − WACC)</th>
              <th>價值創造狀態</th>
              <th>核心競爭護城河</th>
            </tr>
          </thead>
          <tbody>
            ${financialTableData.map(f => `
              <tr>
                <td><strong style="color:#fff;">${f.company}</strong></td>
                <td style="color:#94a3b8;">${f.sector}</td>
                <td style="font-family:var(--font-mono); color:#cbd5e1;">${f.price}</td>
                <td style="font-family:var(--font-mono);">${f.pe}</td>
                <td style="font-family:var(--font-mono); color:#10b981; font-weight:bold;">${f.roic}</td>
                <td style="font-family:var(--font-mono); color:#f43f5e;">${f.wacc}</td>
                <td style="font-family:var(--font-mono); color:#ffd700; font-weight:900; font-size:13px;">${f.spread}</td>
                <td><span class="fin-badge-green">${f.status}</span></td>
                <td style="font-size:11px; color:#cbd5e1;">${f.moat}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderJapanKoreaSection() {
  const container = document.getElementById('japanKoreaContainer');
  const data = window.ASIC_SUPPLY_CHAIN_DATA?.japanKoreaAsic;
  if (!container || !data) return;

  let currentTab = 'all'; // 'all', 'japan', 'korea', 'matrix'
  let searchQuery = '';

  function renderView() {
    let jpList = [...data.japan];
    let krList = [...data.korea];

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      jpList = jpList.filter(c => 
        c.company.toLowerCase().includes(q) || 
        c.role.toLowerCase().includes(q) || 
        c.techFocus.toLowerCase().includes(q) ||
        c.advantage.toLowerCase().includes(q)
      );
      krList = krList.filter(c => 
        c.company.toLowerCase().includes(q) || 
        c.role.toLowerCase().includes(q) || 
        c.techFocus.toLowerCase().includes(q) ||
        c.advantage.toLowerCase().includes(q)
      );
    }

    let cardsHtml = '';
    const showJp = (currentTab === 'all' || currentTab === 'japan') && currentTab !== 'matrix';
    const showKr = (currentTab === 'all' || currentTab === 'korea') && currentTab !== 'matrix';
    const showMatrix = currentTab === 'matrix';

    if (showJp || showKr) {
      let combined = [];
      if (showJp) combined = combined.concat(jpList);
      if (showKr) combined = combined.concat(krList);

      cardsHtml = `
        <div class="jk-cards-grid">
          ${combined.map(c => {
            const isJp = c.country.includes('日本');
            return `
              <div class="jk-card ${isJp ? 'jk-card-jp' : 'jk-card-kr'}">
                <div class="jk-card-header">
                  <div>
                    <h4 class="jk-company-name">${c.company}</h4>
                    <div style="font-size:11px; color:#94a3b8; font-family:var(--font-mono); margin-top:2px;">
                      ${c.ticker}
                    </div>
                  </div>
                  <span class="jk-badge-country ${isJp ? 'jk-badge-jp' : 'jk-badge-kr'}">
                    ${c.country}
                  </span>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span style="font-size:11px; color:#f8fafc; font-weight:700;">${c.role}</span>
                  <span style="font-size:10px; padding:2px 6px; border-radius:4px; background:rgba(255,255,255,0.06); color:#cbd5e1;">
                    ${c.status}
                  </span>
                </div>

                <div class="jk-foundry-tag">
                  <span>🏭 晶圓夥伴：</span>
                  <strong>${c.foundryPartner}</strong>
                </div>

                <div class="jk-desc-box">
                  <div style="font-weight:700; color:#06b6d4; margin-bottom:4px;">🎯 技術核心與產品：</div>
                  ${c.techFocus}
                </div>

                <div class="jk-advantage-box">
                  <span style="color:#c084fc; font-weight:bold;">⚔️ 核心競爭優勢：</span>
                  ${c.advantage}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <!-- 頂部戰略背景 Banner -->
      <div class="jk-hero-banner">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
          <div style="max-width:850px;">
            <h2 style="font-size:20px; font-weight:900; color:#fff; display:flex; align-items:center; gap:10px;">
              <span>🇯🇵🇰🇷</span> ${data.overview.title}
            </h2>
            <p style="font-size:12.5px; color:#cbd5e1; margin-top:8px; line-height:1.65;">
              ${data.overview.description}
            </p>
          </div>
          <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px 14px; font-size:11px; text-align:right;">
            <div style="color:#94a3b8;">國家隊覆蓋</div>
            <div style="font-size:15px; font-weight:bold; color:#06b6d4;">日本 6 家 · 南韓 7 家</div>
            <div style="color:#10b981; font-size:10px; margin-top:2px;">涵蓋 3nm/2nm、HBM3e 與 RISC-V</div>
          </div>
        </div>
      </div>

      <!-- 篩選列 -->
      <div class="jk-filter-bar">
        <div class="jk-filter-group" id="jkTabGroup">
          <button class="tco-mode-btn ${currentTab === 'all' ? 'active' : ''}" data-val="all">
            🌐 全部日韓隊伍 (${data.japan.length + data.korea.length})
          </button>
          <button class="tco-mode-btn ${currentTab === 'japan' ? 'active' : ''}" data-val="japan">
            🇯🇵 日本代表隊 (Socionext / PFN / Rapidus / MegaChips / Renesas)
          </button>
          <button class="tco-mode-btn ${currentTab === 'korea' ? 'active' : ''}" data-val="korea">
            🇰🇷 南韓代表隊 (Rebellions / FuriosaAI / Gaonchips / ADTech / SemiFive)
          </button>
          <button class="tco-mode-btn ${currentTab === 'matrix' ? 'active' : ''}" data-val="matrix">
            📊 台美日韓四角競合戰略對決大表
          </button>
        </div>
        <div>
          <input type="text" id="jkSearchInput" placeholder="🔍 搜尋日韓廠商、製程、技術..." style="background:#0b1324; border:1px solid #1e293b; color:#fff; padding:7px 14px; border-radius:20px; font-size:12px; outline:none; min-width:240px;">
        </div>
      </div>

      <!-- 主要內容區塊 -->
      ${!showMatrix ? cardsHtml : ''}

      <!-- 台美日韓四角橫向大表 (當選擇 matrix 或全部時呈現) -->
      ${(showMatrix || currentTab === 'all') ? `
        <div class="arch-table-card" style="margin-top: ${currentTab === 'all' ? '20px' : '0'};">
          <div style="padding:16px 20px; background:#09101d; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
              <h3 style="font-size:16px; font-weight:900; color:#fff; display:flex; align-items:center; gap:8px;">
                <span style="color:#06b6d4;">🌐</span> 台、美、日、韓 ASIC 產業鏈商業模式與戰略定位橫向大對決
              </h3>
              <p style="font-size:11px; color:#94a3b8; margin-top:2px;">
                跨國半導體戰略：晶圓代工後盾、核心主力廠商、目標終端市場與產業挑戰全面剖析
              </p>
            </div>
            <span class="fin-badge-purple">四角地緣戰略格局</span>
          </div>
          <div class="arch-table-wrapper">
            <table class="arch-spec-table">
              <thead>
                <tr>
                  <th>國家 / 地區陣營</th>
                  <th>主導商業模式 (Model)</th>
                  <th style="color:#06b6d4;">晶圓代工與封裝後盾</th>
                  <th>核心代表企業 (Key Players)</th>
                  <th>主要聚焦市場</th>
                  <th style="color:#10b981;">核心競爭護城河</th>
                  <th style="color:#f43f5e;">面臨瓶頸與挑戰</th>
                  <th style="color:#ffd700;">戰略定位結論</th>
                </tr>
              </thead>
              <tbody>
                ${data.quadComparison.map(q => `
                  <tr>
                    <td><strong style="color:#fff; font-size:13px;">${q.region}</strong></td>
                    <td style="font-size:11.5px; color:#cbd5e1; max-width:200px; white-space:normal; line-height:1.4;">${q.businessModel}</td>
                    <td style="color:#06b6d4; font-size:11.5px; max-width:180px; white-space:normal;">${q.foundrySupport}</td>
                    <td style="font-size:11px; color:#c084fc; max-width:210px; white-space:normal; line-height:1.4;">${q.keyPlayers}</td>
                    <td style="font-size:11px; color:#94a3b8; max-width:180px; white-space:normal;">${q.targetMarket}</td>
                    <td style="font-size:11px; color:#10b981; max-width:200px; white-space:normal; line-height:1.4;">${q.coreStrength}</td>
                    <td style="font-size:11px; color:#fda4af; max-width:180px; white-space:normal; line-height:1.4;">${q.challenges}</td>
                    <td><span class="fin-badge-green" style="font-size:11px;">${q.strategicScore}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}

      <!-- 日韓半導體與台積電合作深層解析 -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-top:24px;">
        <div style="background:#09101d; border:1px solid #1e293b; border-radius:8px; padding:16px;">
          <h4 style="font-size:14px; color:#f8fafc; font-weight:800; display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="color:#f43f5e;">🇯🇵</span> 日本 ASIC 的戰略路徑：為何緊抱車用與台積電？
          </h4>
          <p style="font-size:11.5px; color:#94a3b8; line-height:1.6;">
            日本雖然在 1990 年代失去了 PC 處理器霸權，但以 <strong>Socionext</strong> 為首的團隊承襲了富士通與松下的世界級 LSI 技術。由於車用電子 (Toyota/Denso) 與工業機器人對故障率要求近乎為零，Socionext 與台積電深度綁定推進 3nm/2nm，成為全球最穩定的高階車用 ADAS 與網通客製化晶片主力。
          </p>
        </div>

        <div style="background:#09101d; border:1px solid #1e293b; border-radius:8px; padding:16px;">
          <h4 style="font-size:14px; color:#f8fafc; font-weight:800; display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="color:#3b82f6;">🇰🇷</span> 南韓 SAFE 體系：三星如何打造「韓版創意與世芯」？
          </h4>
          <p style="font-size:11.5px; color:#94a3b8; line-height:1.6;">
            面對台積電龐大的 DCA/OIP 生態圈，三星晶圓代工 (Samsung Foundry) 成立了 <strong>SAFE (Samsung Advanced Foundry Ecosystem)</strong>。其中 <strong>Gaonchips</strong> 專攻三星 3nm/4nm 先進設計 (角色如同台灣創意 GUC)；<strong>ADTechnology</strong> 擁有逾 600 名工程師專攻北美 HPC；<strong>SemiFive</strong> 則以模組化 RISC-V 平台快速量產，形成了三星代工出擊客製化 ASIC 的三叉戟！
          </p>
        </div>

        <div style="background:#09101d; border:1px solid #1e293b; border-radius:8px; padding:16px;">
          <h4 style="font-size:14px; color:#f8fafc; font-weight:800; display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="color:#10b981;">⚡</span> 記憶體牆突破：韓國自帶 HBM 直供的戰略底氣
          </h4>
          <p style="font-size:11.5px; color:#94a3b8; line-height:1.6;">
            全球超過 90% 的 HBM3e 由 SK 海力士與三星電子包辦。南韓 AI 國家隊 <strong>Rebellions (REBEL 晶片)</strong> 能夠直接在本土與三星代工廠取得最頂級的 HBM3e 封裝支援；而 <strong>OpenEdges</strong> 則提供世界少數抗衡美商的高速 HBM 與記憶體控制器 IP，使南韓具備極為罕見的晶片記憶體直通優勢！
          </p>
        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    const tabBtns = container.querySelectorAll('#jkTabGroup button');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentTab = btn.getAttribute('data-val');
        renderView();
      });
    });

    const searchInput = container.querySelector('#jkSearchInput');
    if (searchInput) {
      searchInput.value = searchQuery;
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderView();
      });
    }
  }

  renderView();
}
