/**
 * ASIC vs. GPU 成本效益與 3 年 TCO 試算引擎
 * (In-House ASIC vs. Commercial GPU 3-Year Total Cost of Ownership Calculator)
 */

class TcoCalculator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.chipCount = 50000; // 預設 50,000 顆自研晶片規模 (標準大型 CSP 集群)
    this.workloadType = "inference"; // 'training' or 'inference'
    this.powerCostPerKwh = 0.085; // 每度電 0.085 美元
    this.years = 3; // 3 年運維週期
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setChipCount(count) {
    this.chipCount = parseInt(count, 10);
    this.render();
  }

  setWorkload(type) {
    this.workloadType = type;
    this.render();
  }

  calculate() {
    const n = this.chipCount;
    const isInf = this.workloadType === "inference";

    // 1. GPU (以 NVIDIA 旗艦晶片 B200/H100 採購價估算)
    const gpuChipPrice = isInf ? 28000 : 35000; // 晶片單價 (美元)
    const gpuPowerWatts = isInf ? 700 : 1000; // 單晶片含伺服器等效功耗 (Watts)
    const gpuServerOverheadPerChip = 4500; // 伺服器主板、機殼、電源與水冷分攤

    const gpuHardwareTotal = n * (gpuChipPrice + gpuServerOverheadPerChip);
    // 3 年電費 (kWh) = n * (watts / 1000) * 24 * 365 * 3 * costPerKwh * PUE(1.2)
    const gpuElectricityKwh = n * (gpuPowerWatts / 1000) * 24 * 365 * this.years * 1.2;
    const gpuElectricityCost = gpuElectricityKwh * this.powerCostPerKwh;
    const gpuSoftwareCost = n * 500; // CUDA 授權與維護支援費
    const gpuTotalTco = gpuHardwareTotal + gpuElectricityCost + gpuSoftwareCost;

    // 2. 自研 ASIC (如 TPU v6, Trainium 2, MTIA)
    // 晶片直接生產成本 (台積電 4nm 晶圓 + CoWoS + HBM3e) 約 $7,500 ~ $9,500
    const asicChipBomCost = isInf ? 6500 : 9200;
    // 光罩與前期研發 NRE 費用固定約 1.5 億美元，按晶片數量分攤
    const nreFixedCost = 150000000;
    const asicNrePerChip = nreFixedCost / n;
    const asicPowerWatts = isInf ? 380 : 550; // 客製指令集無冗餘電路，功耗省 45%~50%
    const asicServerOverheadPerChip = 3200; // 白牌 ODM 自研伺服器成本較低

    const asicHardwareTotal = n * (asicChipBomCost + asicNrePerChip + asicServerOverheadPerChip);
    const asicElectricityKwh = n * (asicPowerWatts / 1000) * 24 * 365 * this.years * 1.15; // 專用架構散熱效率高
    const asicElectricityCost = asicElectricityKwh * this.powerCostPerKwh;
    // 自研軟體編譯器 (XLA / PyTorch 驅動研發團隊固定成本約 8,000 萬美元)
    const asicSoftwareCost = 80000000;
    const asicTotalTco = asicHardwareTotal + asicElectricityCost + asicSoftwareCost;

    // 3. 節省金額與比例
    const savingsUsd = gpuTotalTco - asicTotalTco;
    const savingsPct = ((savingsUsd / gpuTotalTco) * 100).toFixed(1);
    const savingsTwdBillion = (savingsUsd * 32.2 / 1000000000).toFixed(1);

    return {
      n,
      gpu: {
        chipPrice: gpuChipPrice,
        hardwareTotal: gpuHardwareTotal,
        electricityCost: gpuElectricityCost,
        totalTco: gpuTotalTco,
        powerWatts: gpuPowerWatts
      },
      asic: {
        bomCost: asicChipBomCost,
        nrePerChip: asicNrePerChip.toFixed(0),
        hardwareTotal: asicHardwareTotal,
        electricityCost: asicElectricityCost,
        totalTco: asicTotalTco,
        powerWatts: asicPowerWatts
      },
      savingsUsd,
      savingsPct,
      savingsTwdBillion
    };
  }

  render() {
    const res = this.calculate();

    this.container.innerHTML = `
      <div class="tco-calc-wrapper">
        <!-- 頂部標題與核心結論看板 -->
        <div class="tco-header-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
            <div>
              <div class="live-pill" style="display:inline-flex; margin-bottom:6px;">
                <span class="live-dot"></span>
                <span>量化財務模型 · 3 年運維總持有成本 (TCO)</span>
              </div>
              <h2 style="font-size:20px; font-weight:900; color:#fff;">
                ⚔️ 自研 ASIC vs. 商業 GPU 成本效益與 3 年 TCO 試算器
              </h2>
              <p style="font-size:12px; color:#cbd5e1; margin-top:3px; max-width:850px;">
                為什麼微軟、Google、Meta 與亞馬遜拚死也要自研晶片？因為在數萬顆運算規模下，自研 ASIC 能繞過輝達高達 75% 的毛利率溢價，3 年 TCO 直接腰斬，為雲端巨頭節省<strong>十億美元級</strong>巨額現金！
              </p>
            </div>
            
            <!-- 核心總節省成果 Banner -->
            <div class="tco-savings-badge">
              <div style="font-size:11px; color:#cbd5e1;">預估 3 年總持有成本淨節省</div>
              <div style="font-size:26px; font-weight:900; color:#a3e635; font-family:var(--font-mono);">
                $${(res.savingsUsd / 1000000000).toFixed(2)} 億美元
              </div>
              <div style="font-size:11.5px; color:#ffd700; font-weight:bold;">
                約合新台幣 ${res.savingsTwdBillion} 億元 (-${res.savingsPct}%)
              </div>
            </div>
          </div>
        </div>

        <!-- 互動控制條 (Sliders & Switches) -->
        <div class="tco-controls-panel">
          <div class="tco-control-item">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <label style="font-size:13px; font-weight:700; color:#fff;">
                🎛️ 部署晶片總規模 (Cluster Scale)：
              </label>
              <span style="font-size:18px; font-weight:900; color:#38bdf8; font-family:var(--font-mono);">
                ${res.n.toLocaleString()} 顆晶片
              </span>
            </div>
            <input type="range" id="tcoChipCountSlider" min="5000" max="200000" step="5000" value="${res.n}" class="tco-slider">
            <div style="display:flex; justify-content:space-between; font-size:10px; color:#64748b; margin-top:4px;">
              <span>5,000 顆 (試驗集群)</span>
              <span>50,000 顆 (標準萬卡雲)</span>
              <span>100,000 顆 (旗艦超算)</span>
              <span>200,000 顆 (頂級超大規模)</span>
            </div>
          </div>

          <div class="tco-control-item" style="max-width:320px;">
            <label style="font-size:13px; font-weight:700; color:#fff; display:block; margin-bottom:8px;">
              🎯 運算工作負載類型 (Workload Type)：
            </label>
            <div class="tco-btn-group">
              <button class="tco-mode-btn ${this.workloadType === 'inference' ? 'active' : ''}" data-type="inference">
                ⚡ 大模型推論 (Inference)
              </button>
              <button class="tco-mode-btn ${this.workloadType === 'training' ? 'active' : ''}" data-type="training">
                🧠 巨型模型訓練 (Training)
              </button>
            </div>
            <div style="font-size:10.5px; color:#94a3b8; margin-top:6px;">
              ${this.workloadType === 'inference' ? '推論強調極致能效比與低延遲，ASIC 成本優勢高達 50%~60%' : '訓練需大量 HBM 互連，光罩與軟體編譯投入較高'}
            </div>
          </div>
        </div>

        <!-- 雙柱對比核心大卡 -->
        <div class="tco-compare-grid">
          <!-- GPU 方案 -->
          <div class="tco-card" style="border-top: 4px solid #f43f5e;">
            <div class="tco-card-header">
              <div>
                <h3 style="font-size:17px; font-weight:900; color:#fff;">商業 GPU 方案 (NVIDIA 旗艦)</h3>
                <div style="font-size:11px; color:#94a3b8;">包含 75% 品牌利潤溢價與標準機房電費</div>
              </div>
              <span class="fin-badge-red">高採購門檻</span>
            </div>

            <div class="tco-metric-main">
              <span style="font-size:12px; color:#94a3b8;">3 年 TCO 總花費：</span>
              <div style="font-size:28px; font-weight:900; color:#fb7185; font-family:var(--font-mono);">
                $${(res.gpu.totalTco / 1000000000).toFixed(2)} 億美元
              </div>
              <div style="font-size:11px; color:#cbd5e1;">單顆晶片綜合等效成本：約 $${(res.gpu.totalTco / res.n).toFixed(0)} 美元</div>
            </div>

            <div class="tco-breakdown-list">
              <div class="tco-breakdown-row">
                <span>晶片與伺服器硬體採購：</span>
                <strong style="color:#fff;">$${(res.gpu.hardwareTotal / 1000000000).toFixed(2)} 億</strong>
              </div>
              <div class="tco-breakdown-row">
                <span>單顆晶片功耗：</span>
                <span style="color:#fb7185;">${res.gpu.powerWatts}W (散熱負擔重)</span>
              </div>
              <div class="tco-breakdown-row">
                <span>3 年龐大冷氣與電力消耗：</span>
                <strong style="color:#f43f5e;">$${(res.gpu.electricityCost / 1000000000).toFixed(2)} 億</strong>
              </div>
            </div>

            <div class="tco-card-footer" style="color:#cbd5e1;">
              ⚠️ <strong>劣勢：</strong>受制於輝達配額限制，每顆晶片被抽走約 $20,000 美元原廠利潤，巨量推論時電費極高。
            </div>
          </div>

          <!-- 自研 ASIC 方案 -->
          <div class="tco-card" style="border-top: 4px solid #a3e635;">
            <div class="tco-card-header">
              <div>
                <h3 style="font-size:17px; font-weight:900; color:#fff;">自研 ASIC 方案 (如 TPU / Trainium)</h3>
                <div style="font-size:11px; color:#a3e635;">代工直採成本 + 客製化指令集省電 45%</div>
              </div>
              <span class="fin-badge-green">高性價比冠軍</span>
            </div>

            <div class="tco-metric-main">
              <span style="font-size:12px; color:#94a3b8;">3 年 TCO 總花費：</span>
              <div style="font-size:28px; font-weight:900; color:#a3e635; font-family:var(--font-mono);">
                $${(res.asic.totalTco / 1000000000).toFixed(2)} 億美元
              </div>
              <div style="font-size:11px; color:#cbd5e1;">單顆晶片綜合等效成本：約 $${(res.asic.totalTco / res.n).toFixed(0)} 美元 (-${res.savingsPct}%)</div>
            </div>

            <div class="tco-breakdown-list">
              <div class="tco-breakdown-row">
                <span>台積電製造+NRE+ODM硬體：</span>
                <strong style="color:#fff;">$${(res.asic.hardwareTotal / 1000000000).toFixed(2)} 億</strong>
              </div>
              <div class="tco-breakdown-row">
                <span>單顆晶片功耗：</span>
                <span style="color:#a3e635;">${res.asic.powerWatts}W (省電 45%)</span>
              </div>
              <div class="tco-breakdown-row">
                <span>3 年運維電力成本：</span>
                <strong style="color:#a3e635;">$${(res.asic.electricityCost / 1000000000).toFixed(2)} 億</strong>
              </div>
            </div>

            <div class="tco-card-footer" style="color:#cbd5e1;">
              ✅ <strong>優勢：</strong>晶片成本直接透明化，繞過品牌溢價；專為 Transformer 矩陣優化，單位推論成本最低！
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const slider = this.container.querySelector('#tcoChipCountSlider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.setChipCount(e.target.value);
      });
    }

    const modeBtns = this.container.querySelectorAll('.tco-mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        this.setWorkload(type);
      });
    });
  }
}

window.TcoCalculator = TcoCalculator;
