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
  const data = window.ASIC_SUPPLY_CHAIN_DATA;
  if (!container || !data) return;

  container.innerHTML = `
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
            ${data.cspChipMatrix.map(m => `
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
