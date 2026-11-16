/**
 * ASIC 與資安產業鏈互動拓撲流向視覺化引擎
 * (ASIC & Cybersecurity Interactive Topology Blueprint Engine)
 */

class AsicVisualizer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedNodeId = "mid_alchip";
    this.nodes = this.getTopologyNodes();
    this.links = this.getTopologyLinks();
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  getTopologyNodes() {
    return {
      // 1. 上游
      up_eda: { id: "up_eda", stage: 1, name: "EDA 設計與驗證軟體", sub: "Synopsys / Cadence", col: 0, row: 0, margin: "80%+", role: "百億電晶體邏輯合成與 3D-IC 先進封裝熱模擬工具", share: "雙寡頭市佔 >90%", tickers: ["SNPS", "CDNS"] },
      up_ip_tw: { id: "up_ip_tw", stage: 1, name: "高速介面與 RISC-V IP", sub: "M31 (6643) / 晶心科 (6533)", col: 0, row: 1, margin: "80% ~ 95%", role: "PCIe 6.0、Die-to-Die 互聯與開源處理器核心 IP", share: "台積聯盟首選", tickers: ["6643", "6533"] },
      up_puf_sec: { id: "up_puf_sec", stage: 1, name: "🔐 晶片硬體信任根 (PUF)", sub: "力旺 (3529) / 熵碼科技", col: 0, row: 2, margin: "100%", role: "利用微觀晶圓指紋打造不可篡改之晶片安全密鑰與量子抗性 IP", share: "全球 eNVM 霸主", tickers: ["3529"] },
      up_tsmc: { id: "up_tsmc", stage: 1, name: "台積電先進晶圓製造", sub: "台積電 (2330 / TSM)", col: 0, row: 3, margin: "54% ~ 58%", role: "3nm/5nm 先進製程與 CoWoS-S/R 晶圓級異質封裝", share: ">95% 先進 ASIC 代工", tickers: ["2330", "TSM"] },
      up_arm: { id: "up_arm", stage: 1, name: "ARM Neoverse 架構", sub: "ARM Holdings (ARM)", col: 0, row: 4, margin: "95%+", role: "Neoverse V2/N2 伺服器 CPU 核心授權 (微軟 Cobalt/AWS Graviton)", share: "雲端 CPU 架構壟斷", tickers: ["ARM"] },

      // 2. 中游
      mid_broadcom: { id: "mid_broadcom", stage: 2, name: "⭐ 博通 (Broadcom)", sub: "AVGO (全球客製 ASIC 霸主)", col: 1, row: 0, margin: "75%+", role: "通吃 Google TPU、Meta MTIA 與字節跳動，年 ASIC 營收突破百億美元", share: "全球份額 >60%", tickers: ["AVGO"] },
      mid_mediatek: { id: "mid_mediatek", stage: 2, name: "⭐ 聯發科 (2454)", sub: "MediaTek (Enterprise ASIC 巨擘)", col: 1, row: 1, margin: "48% ~ 50%", role: "手握 224G SerDes 自研矽智財、台積電 3nm/2nm 先進流片特權，搶攻北美四大 CSP 次世代自研專案，並結盟 NVIDIA 打造車用座艙與 AI PC 客製晶片", share: "台灣研發工程師逾萬人", tickers: ["2454"] },
      mid_alchip: { id: "mid_alchip", stage: 2, name: "⭐ 世芯-KY (3661)", sub: "Alchip (台灣 ASIC 股王)", col: 1, row: 2, margin: "20% ~ 24%", role: "北美雲端巨頭 AWS Trainium 2 與超大規模 AI 晶片後段設計服務主供", share: "3nm 先進製程純度第一", tickers: ["3661"] },
      mid_guc: { id: "mid_guc", stage: 2, name: "創意電子 (3443)", sub: "GUC (台積電旗艦子公司)", col: 1, row: 3, margin: "25% ~ 30%", role: "微軟 Maia 100 AI 加速晶片、HBM 介面與 CoWoS 先進封裝 Turnkey", share: "微軟核心夥伴", tickers: ["3443"] },
      mid_sec_asic: { id: "mid_sec_asic", stage: 2, name: "🛡️ 專用資安加速硬體", sub: "Fortinet (FTNT) / 立端 (6245)", col: 1, row: 4, margin: "40% ~ 75%", role: "自研 SP5 資安 ASIC 晶片、網路邊緣安全伺服器與次世代防火牆代工", share: "資安硬體市佔第一", tickers: ["FTNT", "6245"] },
      mid_server_odm: { id: "mid_server_odm", stage: 2, name: "白牌 AI 伺服器整機", sub: "緯穎 (6669) / 廣達 (2382)", col: 1, row: 5, margin: "8% ~ 10%", role: "AWS Trainium 與 Meta MTIA 專屬整機櫃水冷組裝直供，零品牌溢價", share: "ASIC 伺服器龍頭", tickers: ["6669", "2382"] },

      // 3. 下游
      down_tpu: { id: "down_tpu", stage: 3, name: "Google TPU v5/v6", sub: "Alphabet / Google", col: 2, row: 0, margin: "廣告+雲端高利", role: "Gemini 2.0 基礎大模型訓練、Google 搜尋與 YouTube 推薦引擎", share: "百萬顆規模", tickers: ["GOOGL"] },
      down_trainium: { id: "down_trainium", stage: 3, name: "AWS Trainium 2", sub: "Amazon AWS", col: 2, row: 1, margin: "雲端基礎設施", role: "支持 Anthropic Claude 3.5 萬卡集群訓練、EC2 性價比雲端推論租賃", share: "單一集群十萬顆", tickers: ["AMZN"] },
      down_mtia: { id: "down_mtia", stage: 3, name: "Meta MTIA v2", sub: "Meta Platforms", col: 2, row: 2, margin: "廣告轉換率高", role: "Instagram / Facebook Reels 廣告排序推薦演算法、Llama 推論", share: "內部運算骨幹", tickers: ["META"] },
      down_maia: { id: "down_maia", stage: 3, name: "Microsoft Maia 100", sub: "Microsoft Azure", col: 2, row: 3, margin: "軟體高毛利", role: "Azure OpenAI 服務、Copilot 企業推論，大幅降低外部採購成本", share: "專屬液冷部署", tickers: ["MSFT"] },
      down_cyber_defense: { id: "down_cyber_defense", stage: 3, name: "🛡️ 雲端零信任與端點安全", sub: "Palo Alto / CrowdStrike / 零壹", col: 2, row: 4, margin: "ARR 訂閱高毛利", role: "防護 AI 巨量算力集群，阻斷 Prompt 注入攻擊、數據污染與惡意滲透", share: "全球資安霸主", tickers: ["PANW", "CRWD", "3029"] }
    };
  }

  getTopologyLinks() {
    return [
      // 上游至中游
      { from: "up_eda", to: "mid_broadcom" },
      { from: "up_eda", to: "mid_mediatek" },
      { from: "up_eda", to: "mid_alchip" },
      { from: "up_ip_tw", to: "mid_alchip" },
      { from: "up_ip_tw", to: "mid_guc" },
      { from: "up_puf_sec", to: "mid_alchip" },
      { from: "up_puf_sec", to: "mid_sec_asic" },
      { from: "up_tsmc", to: "mid_broadcom" },
      { from: "up_tsmc", to: "mid_mediatek" },
      { from: "up_tsmc", to: "mid_alchip" },
      { from: "up_tsmc", to: "mid_guc" },
      { from: "up_arm", to: "mid_guc" },
      { from: "up_arm", to: "mid_alchip" },

      // 中游至整機與下游
      { from: "mid_broadcom", to: "down_tpu" },
      { from: "mid_broadcom", to: "down_mtia" },
      { from: "mid_mediatek", to: "down_mtia" },
      { from: "mid_mediatek", to: "down_tpu" },
      { from: "mid_alchip", to: "mid_server_odm" },
      { from: "mid_alchip", to: "down_trainium" },
      { from: "mid_guc", to: "down_maia" },
      { from: "mid_server_odm", to: "down_trainium" },
      { from: "mid_server_odm", to: "down_mtia" },
      { from: "mid_sec_asic", to: "down_cyber_defense" },
      { from: "down_tpu", to: "down_cyber_defense" },
      { from: "down_trainium", to: "down_cyber_defense" }
    ];
  }

  getNodeCoords(node) {
    // 3 欄式設計：寬度 1100 x 600
    const colX = [30, 420, 800];
    const colWidths = [270, 270, 270];
    const x = colX[node.col];
    const w = colWidths[node.col];
    const h = node.col === 1 ? 58 : 64;
    const gap = node.col === 1 ? 88 : 100;
    const y = 65 + node.row * gap;

    return {
      x, y, w, h,
      outX: x + w,
      outY: y + h / 2,
      inX: x,
      inY: y + h / 2
    };
  }

  selectNode(id) {
    this.selectedNodeId = id;
    this.updateHighlight();
    this.renderInspector();
  }

  updateHighlight() {
    const selId = this.selectedNodeId;
    if (!selId) return;

    const related = new Set([selId]);
    this.links.forEach(l => {
      if (l.from === selId || l.to === selId) {
        related.add(l.from);
        related.add(l.to);
      }
    });

    const nodeEls = this.container.querySelectorAll(".asic-topo-node");
    nodeEls.forEach(el => {
      const id = el.getAttribute("data-id");
      el.classList.remove("active-node", "related-node", "dimmed");
      if (id === selId) el.classList.add("active-node");
      else if (related.has(id)) el.classList.add("related-node");
      else el.classList.add("dimmed");
    });

    const linkEls = this.container.querySelectorAll(".asic-topo-link");
    linkEls.forEach(el => {
      const from = el.getAttribute("data-from");
      const to = el.getAttribute("data-to");
      el.classList.remove("active-flow", "dimmed");
      if (from === selId || to === selId) el.classList.add("active-flow");
      else el.classList.add("dimmed");
    });
  }

  renderInspector() {
    const inspectorEl = this.container.querySelector("#asicNodeInspector");
    if (!inspectorEl) return;

    const node = this.nodes[this.selectedNodeId];
    if (!node) return;

    const stageNames = [
      "🧬 上游：IP / EDA / 晶圓 / 信任根",
      "⚡ 中游：ASIC 設計服務 / 資安硬體 / ODM",
      "☁️ 下游：四大 CSP 自研晶片 / 終端防護"
    ];
    const stageColors = ["#8b5cf6", "#06b6d4", "#10b981"];
    const curColor = stageColors[node.stage - 1];

    inspectorEl.innerHTML = `
      <div class="asic-inspector-card" style="border-left: 4px solid ${curColor};">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
          <div>
            <div style="font-size:11px; font-weight:bold; color:${curColor}; text-transform:uppercase;">
              ${stageNames[node.stage - 1]}
            </div>
            <h3 style="font-size:18px; font-weight:900; color:#fff; margin-top:2px;">
              ${node.name}
            </h3>
            <div style="font-size:12px; color:#94a3b8; font-family:var(--font-mono); margin-top:2px;">
              代表廠商：<strong style="color:#f8fafc;">${node.sub}</strong>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:10px; color:#94a3b8;">預估毛利率</div>
            <div style="font-size:20px; font-weight:900; color:${curColor}; font-family:var(--font-mono);">
              ${node.margin}
            </div>
          </div>
        </div>

        <div class="asic-inspector-grid">
          <div class="asic-metric-box">
            <span class="asic-metric-label">🎯 核心技術職責：</span>
            <span class="asic-metric-val">${node.role}</span>
          </div>
          <div class="asic-metric-box">
            <span class="asic-metric-label">📊 產業份額與競爭地位：</span>
            <span class="asic-metric-val" style="color:#38bdf8;">${node.share}</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:10px; border-top:1px solid rgba(255,255,255,0.06); padding-top:10px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:11px; color:#94a3b8;">關聯代號：</span>
            ${node.tickers.map(t => `<span class="asic-ticker-tag">${t}</span>`).join("")}
          </div>
          <button class="asic-reset-btn" id="asicResetBtn">🔄 重設全景流向</button>
        </div>
      </div>
    `;

    const resetBtn = inspectorEl.querySelector("#asicResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.selectNode("mid_alchip");
      });
    }
  }

  render() {
    const nodes = this.nodes;
    const links = this.links;
    const stageColors = ["#8b5cf6", "#06b6d4", "#10b981"];

    const pathsHtml = links.map(link => {
      const fromNode = nodes[link.from];
      const toNode = nodes[link.to];
      if (!fromNode || !toNode) return "";

      const c1 = this.getNodeCoords(fromNode);
      const c2 = this.getNodeCoords(toNode);
      const dx = Math.max(30, (c2.inX - c1.outX) * 0.5);
      const d = `M ${c1.outX} ${c1.outY} C ${c1.outX + dx} ${c1.outY}, ${c2.inX - dx} ${c2.inY}, ${c2.inX} ${c2.inY}`;

      return `
        <path d="${d}" 
              class="asic-topo-link" 
              data-from="${link.from}" 
              data-to="${link.to}" 
              marker-end="url(#asicArrow)" />
      `;
    }).join("");

    const nodesHtml = Object.values(nodes).map(node => {
      const c = this.getNodeCoords(node);
      const color = stageColors[node.stage - 1];
      const isCore = node.id === "mid_alchip" || node.id === "mid_broadcom" || node.id === "up_puf_sec";

      return `
        <g class="asic-topo-node ${node.id === this.selectedNodeId ? "active-node" : ""}" 
           data-id="${node.id}"
           style="transform-origin: ${c.x + c.w / 2}px ${c.y + c.h / 2}px;">
          
          <rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="8" ry="8" 
                class="asic-node-rect ${isCore ? "asic-core-rect" : ""}" 
                style="stroke:${color};" />

          <rect x="${c.x}" y="${c.y}" width="4" height="${c.h}" rx="2" ry="2" 
                style="fill:${color};" />

          <text x="${c.x + 14}" y="${c.y + 22}" class="asic-node-title">
            ${node.name}
          </text>

          <text x="${c.x + 14}" y="${c.y + 40}" class="asic-node-sub">
            ${node.sub}
          </text>

          <text x="${c.x + c.w - 12}" y="${c.y + 54}" class="asic-node-margin" text-anchor="end" style="fill:${color};">
            毛利: ${node.margin}
          </text>
        </g>
      `;
    }).join("");

    this.container.innerHTML = `
      <div class="asic-topo-section">
        <div class="asic-topo-header">
          <div>
            <div class="live-pill" style="display:inline-flex; margin-bottom:6px;">
              <span class="live-dot"></span>
              <span>自研晶片與晶片資安 · 全球產業脈絡</span>
            </div>
            <h2 style="font-size:20px; font-weight:900; color:#fff;">
              🌐 全球與台灣 ASIC × 資安產業鏈視覺拓撲圖 (ASIC & Security Topology)
            </h2>
            <p style="font-size:12px; color:#94a3b8; margin-top:3px;">
              點選任意節點（如世芯-KY、博通、力旺/熵碼資安、Google TPU），系統將動態點亮該節點的上下游供應鏈與終端客戶！
            </p>
          </div>
        </div>

        <div class="asic-svg-wrapper">
          <svg viewBox="0 0 1100 580" class="asic-svg-canvas">
            <defs>
              <marker id="asicArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#64748b" />
              </marker>
              <pattern id="asicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" stroke-width="1"/>
              </pattern>
            </defs>

            <rect width="1100" height="580" fill="#090d18" rx="10" />
            <rect width="1100" height="580" fill="url(#asicGrid)" rx="10" />

            <!-- 三大欄表頭 -->
            <g class="asic-stage-headers">
              <rect x="30" y="16" width="270" height="34" rx="6" fill="rgba(139, 92, 246, 0.15)" stroke="#8b5cf655" />
              <text x="165" y="38" text-anchor="middle" fill="#8b5cf6" font-size="12" font-weight="800">
                🧬 1. 上游：IP / EDA / 信任根 / 晶圓
              </text>

              <rect x="420" y="16" width="270" height="34" rx="6" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d455" />
              <text x="555" y="38" text-anchor="middle" fill="#06b6d4" font-size="12" font-weight="800">
                ⚡ 2. 中游：ASIC 設計服務 / 資安硬體 / ODM
              </text>

              <rect x="800" y="16" width="270" height="34" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b98155" />
              <text x="935" y="38" text-anchor="middle" fill="#10b981" font-size="12" font-weight="800">
                ☁️ 3. 下游：四大 CSP 自研晶片 / 終端防護
              </text>
            </g>

            <g class="asic-links-group">${pathsHtml}</g>
            <g class="asic-nodes-group">${nodesHtml}</g>
          </svg>
        </div>

        <div id="asicNodeInspector" style="margin-top:14px;"></div>
      </div>
    `;

    this.bindEvents();
    this.updateHighlight();
    this.renderInspector();
  }

  bindEvents() {
    const nodeEls = this.container.querySelectorAll(".asic-topo-node");
    nodeEls.forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-id");
        this.selectNode(id);
      });
    });
  }
}

/**
 * Google TPU 全球上下游產業鏈旗艦互動視覺拓撲引擎
 * (Google TPU Dedicated Interactive Ecosystem Topology Engine)
 */
class GoogleTpuVisualizer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedNodeId = "tpu_mid_quanta"; // 預設聚焦核心整機 ODM 廣達
    this.nodes = this.getTopologyNodes();
    this.links = this.getTopologyLinks();
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  getTopologyNodes() {
    return {
      // 1. 上游
      tpu_up_tsmc: { id: "tpu_up_tsmc", stage: 1, name: "台積電先進晶圓製造", sub: "TSMC (2330 / TSM)", col: 0, row: 0, margin: "54% ~ 58%", role: "獨家製造 TPU v4(7nm)、v5(5nm/4nm) 與 v6 Trillium(4nm)，整合 CoWoS-S 2.5D 先進封裝", share: "獨家製造 (100%)", tickers: ["2330.TW", "TSM"] },
      tpu_up_hbm: { id: "tpu_up_hbm", stage: 1, name: "高頻寬記憶體 (HBM)", sub: "SK 海力士 / 三星電子", col: 0, row: 1, margin: "45% ~ 55%", role: "供應 TPU v5p (95GB) 與 v6 (32GB HBM3)，高達 2.5 TB/s 極致頻寬直通矩陣運算核心", share: "SK 海力士主供 (>70%)", tickers: ["000660.KS"] },
      tpu_up_ocs: { id: "tpu_up_ocs", stage: 1, name: "Google 自研全光開關 (OCS)", sub: "2D MEMS 旋轉光鏡 / 聯鈞 (3450)", col: 0, row: 2, margin: "光通訊高利", role: "Google 獨門殺手鐧！利用微反射鏡直接以光路反射路由，零光電光 (O-E-O) 轉換延遲與能耗", share: "Google 專利壟斷", tickers: ["3450.TW", "3081.TW"] },
      tpu_up_eda: { id: "tpu_up_eda", stage: 1, name: "EDA 設計軟體與 IP", sub: "Synopsys / Cadence / Arm", col: 0, row: 3, margin: "80%+", role: "百億電晶體邏輯驗證、訊號完整性模擬及 Host 處理器輔助架構 IP", share: "雙寡頭市佔 >90%", tickers: ["SNPS", "CDNS", "ARM"] },

      // 2. 中游
      tpu_mid_broadcom: { id: "tpu_mid_broadcom", stage: 2, name: "⭐ 博通 (Broadcom)", sub: "AVGO (十年核心設計夥伴)", col: 1, row: 0, margin: "75%+", role: "將 Google 脈動陣列藍圖進行實體佈局 (RTL to GDSII)，整合自研 224G SerDes 並協同台積電投片", share: "TPU 客製營收首要來源", tickers: ["AVGO"] },
      tpu_mid_quanta: { id: "tpu_mid_quanta", stage: 2, name: "⭐ 廣達電腦 / 雲達 (QCT)", sub: "Quanta (2382.TW / 白牌 ODM 龍頭)", col: 1, row: 1, margin: "8.5% ~ 10%", role: "深耕 Google 超過 15 年，全面主導主板打件、水冷管路配置與 TPU Pod 8,960 顆晶片整機櫃集成組裝", share: "TPU 整機市佔第一 (>65%)", tickers: ["2382.TW"] },
      tpu_mid_cooling: { id: "tpu_mid_cooling", stage: 2, name: "液冷散熱與 CDU 冷卻分配", sub: "雙鴻 (3324) / 奇鋐 (3017)", col: 1, row: 2, margin: "22% ~ 28%", role: "TPU v3 起強制全液冷，特製純銅水冷板 (Cold Plate) 與機櫃級 CDU，單晶片解熱能力突破 1000W", share: "台灣水冷散熱雙雄", tickers: ["3324.TW", "3017.TW"] },
      tpu_mid_abf: { id: "tpu_mid_abf", stage: 2, name: "高階大尺寸 ABF 載板", sub: "欣興 (3037) / 揖斐電 (Ibiden)", col: 1, row: 3, margin: "25% ~ 30%", role: "承載超大面積 TPU 晶粒與多顆 HBM 堆疊之 16~20 層高密度載板，欣興為第一大主供", share: "全球載板雙雄", tickers: ["3037.TW", "4062.T"] },
      tpu_mid_pcb: { id: "tpu_mid_pcb", stage: 2, name: "高層數 PCB 與低損耗 CCL", sub: "金像電 (2368) / 台光電 (2383)", col: 1, row: 4, margin: "28% ~ 32%", role: "供應 TPU 運算托盤 (Tray) 與 OCS 背板 PCB，台光電獨家供應 Ultra Low Loss 銅箔基板", share: "AI PCB 霸主", tickers: ["2368.TW", "2383.TW"] },
      tpu_mid_power: { id: "tpu_mid_power", stage: 2, name: "高壓電源與 Busbar 線束", sub: "台達電 (2308) / 貿聯-KY (3665)", col: 1, row: 5, margin: "26% ~ 30%", role: "符合 Open Rack 規範之 48V/12V 鈦金級高轉換電源與大電流 Busbar 銅排匯流排", share: "電源線束龍頭", tickers: ["2308.TW", "3665.TW"] },

      // 3. 下游
      tpu_down_gemini: { id: "tpu_down_gemini", stage: 3, name: "Gemini 2.0 / 1.5 旗艦大模型", sub: "Google DeepMind 核心訓練", col: 2, row: 0, margin: "全自研無溢價稅", role: "Gemini 1.0、1.5 Pro 與最新 2.0 前沿多模態大模型 100% 在 TPU Pod 上預訓練完成，0% 依賴外部 GPU", share: "內部旗艦核心", tickers: ["GOOGL"] },
      tpu_down_google_core: { id: "tpu_down_google_core", stage: 3, name: "Google 搜尋與 YouTube 推薦", sub: "每日數十億用戶核心推論", col: 2, row: 1, margin: "超高廣告槓桿", role: "Google 搜尋 AI Overviews、YouTube 視頻推薦矩陣、Gmail 智慧撰寫，每年節省數十億美元租賃成本", share: "全球每日數十億請求", tickers: ["GOOGL"] },
      tpu_down_gcp_pod: { id: "tpu_down_gcp_pod", stage: 3, name: "GCP Cloud TPU 超級算力雲", sub: "8,960 顆晶片單一網格集群", col: 2, row: 2, margin: "高續約率雲端服務", role: "透過 GKE 提供彈性動態算力切片，性價比比同級商業 GPU 便宜 40%~50%", share: "全球頂尖 AI 雲端", tickers: ["GOOGL"] },
      tpu_down_apple: { id: "tpu_down_apple", stage: 3, name: "🍏 蘋果 (Apple Intelligence)", sub: "Apple AFM 基礎模型由 TPU 訓練", col: 2, row: 3, margin: "巨頭戰略互信", role: "蘋果官方發布之技術論文明確證實：Apple Intelligence 基礎大模型 (AFM) 全面由 Google Cloud TPU v4/v5p 訓練", share: "全球市值第一巨頭採用", tickers: ["AAPL"] },
      tpu_down_clients: { id: "tpu_down_clients", stage: 3, name: "🤖 Anthropic · Midjourney", sub: "Claude 3.5 與全球最大 AI 生圖平台", col: 2, row: 4, margin: "高黏著度算力租賃", role: "Anthropic 部署大規模 Claude 訓練於 TPU，Midjourney 全面以 TPU v5e 生成全球數億張 AI 圖像", share: "頂尖 AI 獨角獸代表", tickers: ["ANTHROPIC", "MIDJOURNEY"] }
    };
  }

  getTopologyLinks() {
    return [
      // 上游至中游
      { from: "tpu_up_eda", to: "tpu_mid_broadcom" },
      { from: "tpu_up_tsmc", to: "tpu_mid_broadcom" },
      { from: "tpu_up_tsmc", to: "tpu_mid_abf" },
      { from: "tpu_up_hbm", to: "tpu_mid_broadcom" },
      { from: "tpu_up_ocs", to: "tpu_mid_pcb" },

      // 中游各環節至廣達 ODM 整機整合
      { from: "tpu_mid_broadcom", to: "tpu_mid_quanta" },
      { from: "tpu_mid_abf", to: "tpu_mid_quanta" },
      { from: "tpu_mid_cooling", to: "tpu_mid_quanta" },
      { from: "tpu_mid_pcb", to: "tpu_mid_quanta" },
      { from: "tpu_mid_power", to: "tpu_mid_quanta" },

      // 廣達整機直供 GCP Cloud TPU 超級算力中心
      { from: "tpu_mid_quanta", to: "tpu_down_gcp_pod" },

      // 下游算力分發
      { from: "tpu_down_gcp_pod", to: "tpu_down_gemini" },
      { from: "tpu_down_gcp_pod", to: "tpu_down_google_core" },
      { from: "tpu_down_gcp_pod", to: "tpu_down_apple" },
      { from: "tpu_down_gcp_pod", to: "tpu_down_clients" }
    ];
  }

  getNodeCoords(node) {
    const colX = [30, 420, 800];
    const colWidths = [270, 270, 270];
    const x = colX[node.col];
    const w = colWidths[node.col];
    
    // 依據欄位設定高度與間隔
    let h, gap, startY;
    if (node.col === 0) {
      h = 66;
      gap = 120;
      startY = 75;
    } else if (node.col === 1) {
      h = 56;
      gap = 82;
      startY = 68;
    } else {
      h = 64;
      gap = 100;
      startY = 72;
    }

    const y = startY + node.row * gap;

    return {
      x, y, w, h,
      outX: x + w,
      outY: y + h / 2,
      inX: x,
      inY: y + h / 2
    };
  }

  selectNode(id) {
    this.selectedNodeId = id;
    this.updateHighlight();
    this.renderInspector();
  }

  updateHighlight() {
    const selId = this.selectedNodeId;
    if (!selId) return;

    const related = new Set([selId]);
    this.links.forEach(l => {
      if (l.from === selId || l.to === selId) {
        related.add(l.from);
        related.add(l.to);
      }
    });

    const nodeEls = this.container.querySelectorAll(".tpu-topo-node");
    nodeEls.forEach(el => {
      const id = el.getAttribute("data-id");
      el.classList.remove("active-node", "related-node", "dimmed");
      if (id === selId) el.classList.add("active-node");
      else if (related.has(id)) el.classList.add("related-node");
      else el.classList.add("dimmed");
    });

    const linkEls = this.container.querySelectorAll(".tpu-topo-link");
    linkEls.forEach(el => {
      const from = el.getAttribute("data-from");
      const to = el.getAttribute("data-to");
      el.classList.remove("active-flow", "dimmed");
      if (from === selId || to === selId) el.classList.add("active-flow");
      else el.classList.add("dimmed");
    });
  }

  renderInspector() {
    const inspectorEl = this.container.querySelector("#tpuNodeInspector");
    if (!inspectorEl) return;

    const node = this.nodes[this.selectedNodeId];
    if (!node) return;

    const stageNames = [
      "🧬 上游：晶片物理製造 / HBM 記憶體 / 自研光開關",
      "⚡ 中游：實體設計服務 / 水冷散熱 / 伺服器 ODM 整櫃",
      "☁️ 下游：GCP 雲端超算 / 基礎大模型 / 標竿客戶"
    ];
    const stageColors = ["#8b5cf6", "#06b6d4", "#10b981"];
    const curColor = stageColors[node.stage - 1];

    inspectorEl.innerHTML = `
      <div class="asic-inspector-card" style="border-left: 4px solid ${curColor}; background:#080e1a;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
          <div>
            <div style="font-size:11px; font-weight:bold; color:${curColor}; text-transform:uppercase;">
              ${stageNames[node.stage - 1]}
            </div>
            <h3 style="font-size:18px; font-weight:900; color:#fff; margin-top:2px;">
              ${node.name}
            </h3>
            <div style="font-size:12px; color:#94a3b8; font-family:var(--font-mono); margin-top:2px;">
              代表廠商：<strong style="color:#f8fafc;">${node.sub}</strong>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:10px; color:#94a3b8;">預估毛利率 / 定位</div>
            <div style="font-size:18px; font-weight:900; color:${curColor}; font-family:var(--font-mono);">
              ${node.margin}
            </div>
          </div>
        </div>

        <div class="asic-inspector-grid">
          <div class="asic-metric-box">
            <span class="asic-metric-label">🎯 在 Google TPU 生態中的關鍵職責：</span>
            <span class="asic-metric-val">${node.role}</span>
          </div>
          <div class="asic-metric-box">
            <span class="asic-metric-label">📊 供應鏈地位與份額：</span>
            <span class="asic-metric-val" style="color:#38bdf8;">${node.share}</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-top:10px; border-top:1px solid rgba(255,255,255,0.06); padding-top:10px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:11px; color:#94a3b8;">關聯代號：</span>
            ${node.tickers.map(t => `<span class="asic-ticker-tag">${t}</span>`).join("")}
          </div>
          <button class="asic-reset-btn" id="tpuResetBtn">🔄 重設為廣達整機核心</button>
        </div>
      </div>
    `;

    const resetBtn = inspectorEl.querySelector("#tpuResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.selectNode("tpu_mid_quanta");
      });
    }
  }

  render() {
    const nodes = this.nodes;
    const links = this.links;
    const stageColors = ["#8b5cf6", "#06b6d4", "#10b981"];

    const pathsHtml = links.map(link => {
      const fromNode = nodes[link.from];
      const toNode = nodes[link.to];
      if (!fromNode || !toNode) return "";

      const c1 = this.getNodeCoords(fromNode);
      const c2 = this.getNodeCoords(toNode);
      const dx = Math.max(30, (c2.inX - c1.outX) * 0.5);
      const d = `M ${c1.outX} ${c1.outY} C ${c1.outX + dx} ${c1.outY}, ${c2.inX - dx} ${c2.inY}, ${c2.inX} ${c2.inY}`;

      return `
        <path d="${d}" 
              class="asic-topo-link tpu-topo-link" 
              data-from="${link.from}" 
              data-to="${link.to}" 
              marker-end="url(#tpuArrow)" />
      `;
    }).join("");

    const nodesHtml = Object.values(nodes).map(node => {
      const c = this.getNodeCoords(node);
      const color = stageColors[node.stage - 1];
      const isCore = node.id === "tpu_mid_quanta" || node.id === "tpu_mid_broadcom" || node.id === "tpu_up_tsmc" || node.id === "tpu_down_gemini";

      return `
        <g class="asic-topo-node tpu-topo-node ${node.id === this.selectedNodeId ? "active-node" : ""}" 
           data-id="${node.id}"
           style="transform-origin: ${c.x + c.w / 2}px ${c.y + c.h / 2}px;">
          
          <rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="8" ry="8" 
                class="asic-node-rect ${isCore ? "asic-core-rect" : ""}" 
                style="stroke:${color};" />

          <rect x="${c.x}" y="${c.y}" width="4" height="${c.h}" rx="2" ry="2" 
                style="fill:${color};" />

          <text x="${c.x + 14}" y="${c.y + 20}" class="asic-node-title">
            ${node.name}
          </text>

          <text x="${c.x + 14}" y="${c.y + 36}" class="asic-node-sub" style="font-size:9px;">
            ${node.sub}
          </text>

          <text x="${c.x + c.w - 10}" y="${c.y + c.h - 10}" class="asic-node-margin" text-anchor="end" style="fill:${color}; font-size:9.5px;">
            ${node.share}
          </text>
        </g>
      `;
    }).join("");

    this.container.innerHTML = `
      <div class="asic-topo-section" style="border: 1px solid rgba(66, 133, 244, 0.35); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
        <div class="asic-topo-header">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <div class="live-pill" style="display:inline-flex; margin-bottom:6px; background:rgba(66, 133, 244, 0.15); border-color:#4285f4;">
                <span class="live-dot" style="background:#4285f4; box-shadow:0 0 8px #4285f4;"></span>
                <span style="color:#93c5fd;">GOOGLE TPU 專屬產業鏈全景拓撲流向圖</span>
              </div>
              <h2 style="font-size:20px; font-weight:900; color:#fff;">
                ⚡ Google TPU (Tensor Processing Unit) 全球上下游產業鏈視覺化拓撲圖
              </h2>
              <p style="font-size:12px; color:#94a3b8; margin-top:3px;">
                點選任意節點（如台積電、博通、廣達 ODM、自研 OCS 光開關、Gemini 2.0、蘋果 Apple Intelligence），動態點亮全鏈流向！
              </p>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="tco-mode-btn active" id="tpuFilterQuanta">聚焦廣達 ODM 整機</button>
              <button class="tco-mode-btn" id="tpuFilterTsmc">聚焦台積電 100% 製造</button>
              <button class="tco-mode-btn" id="tpuFilterApple">聚焦蘋果與 Gemini 算力</button>
            </div>
          </div>
        </div>

        <div class="asic-svg-wrapper">
          <svg viewBox="0 0 1100 580" class="asic-svg-canvas">
            <defs>
              <marker id="tpuArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#06b6d4" />
              </marker>
              <pattern id="tpuGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(66, 133, 244, 0.05)" stroke-width="1"/>
              </pattern>
            </defs>

            <rect width="1100" height="580" fill="#080e1a" rx="10" />
            <rect width="1100" height="580" fill="url(#tpuGrid)" rx="10" />

            <!-- 三大欄表頭 -->
            <g class="asic-stage-headers">
              <rect x="30" y="16" width="270" height="34" rx="6" fill="rgba(139, 92, 246, 0.18)" stroke="#8b5cf666" />
              <text x="165" y="38" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="800">
                🧬 1. 上游：晶圓 / HBM / 光開關 / IP
              </text>

              <rect x="420" y="16" width="270" height="34" rx="6" fill="rgba(6, 182, 212, 0.18)" stroke="#06b6d466" />
              <text x="555" y="38" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="800">
                ⚡ 2. 中游：設計服務 / 水冷 / 伺服器 ODM
              </text>

              <rect x="800" y="16" width="270" height="34" rx="6" fill="rgba(16, 185, 129, 0.18)" stroke="#10b98166" />
              <text x="935" y="38" text-anchor="middle" fill="#34d399" font-size="12" font-weight="800">
                ☁️ 3. 下游：GCP 超算雲 / 大模型 / 終端客戶
              </text>
            </g>

            <g class="asic-links-group">${pathsHtml}</g>
            <g class="asic-nodes-group">${nodesHtml}</g>
          </svg>
        </div>

        <div id="tpuNodeInspector" style="margin-top:14px;"></div>
      </div>
    `;

    this.bindEvents();
    this.updateHighlight();
    this.renderInspector();
  }

  bindEvents() {
    const nodeEls = this.container.querySelectorAll(".tpu-topo-node");
    nodeEls.forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-id");
        this.selectNode(id);
      });
    });

    const btnQuanta = this.container.querySelector("#tpuFilterQuanta");
    const btnTsmc = this.container.querySelector("#tpuFilterTsmc");
    const btnApple = this.container.querySelector("#tpuFilterApple");

    if (btnQuanta) {
      btnQuanta.addEventListener("click", () => {
        this.selectNode("tpu_mid_quanta");
      });
    }
    if (btnTsmc) {
      btnTsmc.addEventListener("click", () => {
        this.selectNode("tpu_up_tsmc");
      });
    }
    if (btnApple) {
      btnApple.addEventListener("click", () => {
        this.selectNode("tpu_down_apple");
      });
    }
  }
}

window.AsicVisualizer = AsicVisualizer;
window.GoogleTpuVisualizer = GoogleTpuVisualizer;
