/**
 * ASIC (客製化特定應用晶片) 全球與台灣上下游產業鏈數據庫
 * (Global & Taiwan ASIC Ecosystem & CSP In-House Silicon Hub)
 */

window.ASIC_SUPPLY_CHAIN_DATA = {
  version: "2026.1",
  lastUpdated: "2026-11-16",
  overview: {
    title: "全球 AI 運算典範轉移：自研 ASIC 與 GPU 的雙軌競合時代",
    description: "為擺脫輝達 75% 壟斷級毛利稅並大幅降低大模型推論總持有成本 (TCO)，Google、亞馬遜 AWS、Meta、微軟等雲端巨頭全力加速自研 ASIC 晶片，帶動台灣矽智財 (IP)、ASIC 設計服務 (Design Service)、台積電先進封測及白牌伺服器 (ODM) 爆發性成長！"
  },

  // 三大層級結構
  tiers: [
    {
      id: "upstream",
      nameZh: "🧬 上游：矽智財 (IP)、EDA 工具與先進晶圓封裝",
      nameEn: "Upstream: Semiconductor IP, EDA Tools & Advanced Foundry",
      color: "#8b5cf6", // 電氣紫
      accent: "rgba(139, 92, 246, 0.15)",
      description: "ASIC 晶片的底層基石。包含高速互連介面 IP (PCIe Gen6/Die-to-Die)、晶片硬體安全密鑰 IP、RISC-V 核心、台積電 3nm/5nm 先進製程與 CoWoS 晶圓級封裝。",
      sectors: [
        {
          id: "ip_design_taiwan",
          titleZh: "台灣高階矽智財 (IP) 聯盟",
          titleEn: "Taiwan Silicon IP Leaders",
          status: "核心戰略咽喉",
          description: "提供自研晶片必備的介面、安全與運算架構 IP，授權金與權利金兼收。",
          keyPlayers: [
            { name: "力旺 (3529)", role: "嵌入式非揮發性記憶體 (eNVM) 獨霸，旗下「熵碼科技」專攻晶片指紋硬體信任根 (PUF) 資安 IP", margin: "100%", share: "全球 eNVM 龍頭", ticker: "3529.TW" },
            { name: "M31 (6643)", role: "高速介面 IP (USB 4, PCIe 5/6, Die-to-Die 互聯)，深度適配台積電先進製程", margin: "80% ~ 85%", share: "高速傳輸 IP 先驅", ticker: "6643.TW" },
            { name: "晶心科 (6533)", role: "RISC-V 嵌入式處理器核心 IP，為 CSP 邊緣與伺服器自研晶片提供開放架構替代方案", margin: "95%+", share: "RISC-V 國際領頭羊", ticker: "6533.TW" },
            { name: "智原科技 (3035)", role: "聯電色彩轉進台積電與先進製程，取得 Arm Neoverse CSS 運算子系統平台授權", margin: "45% ~ 50%", share: "Arm 核心設計夥伴", ticker: "3035.TW" }
          ]
        },
        {
          id: "ip_eda_global",
          titleZh: "國際 EDA 設計工具與處理器架構巨頭",
          titleEn: "Global EDA Software & Architecture Giants",
          status: "軟體獨佔雙寡頭",
          description: "百億電晶體超複雜 ASIC 必不可少的邏輯合成、訊號完整性模擬與授權架構。",
          keyPlayers: [
            { name: "新思科技 (Synopsys / SNPS)", role: "EDA 軟體與高速介面 IP 雙霸主，客製化晶片驗證首選", margin: "80%+", share: "市佔率第一", ticker: "SNPS" },
            { name: "益華電腦 (Cadence / CDNS)", role: "系統級電子設計、3D-IC 封裝熱模擬與高速數位驗證", margin: "85%+", share: "EDA 雙寡頭之一", ticker: "CDNS" },
            { name: "安謀 (ARM Holdings)", role: "Neoverse V2/N2 伺服器 CPU 架構授權，微軟 Cobalt 與 AWS Graviton 核心", margin: "95%+", share: "架構授權壟斷", ticker: "ARM" },
            { name: "Rambus (RMBS)", role: "高頻寬記憶體 (HBM3e/HBM4) 實體層 (PHY) 與安全控制器 IP", margin: "75%+", share: "HBM 介面領導者", ticker: "RMBS" }
          ]
        },
        {
          id: "foundry_packaging",
          titleZh: "先進晶圓代工與 CoWoS 異質整合封測",
          titleEn: "Advanced Foundry & CoWoS 2.5D/3D Packaging",
          status: "全球製造唯一解",
          description: "各大 CSP 自研晶片皆以台積電 3nm/5nm 為唯一高良率量產製程。",
          keyPlayers: [
            { name: "台積電 (2330 / TSM)", role: "獨家製造 Google TPU v5/v6、AWS Trainium 2、Meta MTIA 與微軟 Maia 晶片", margin: "54% ~ 58%", share: ">95% 先進 ASIC 製造", ticker: "2330.TW" },
            { name: "日月光投控 (3711 / ASX)", role: "oS 後段基板封裝與 SiP 系統級模組測試分流，提供高性價比異質封裝", margin: "16% ~ 20%", share: "封測全球龍頭", ticker: "3711.TW" }
          ]
        }
      ]
    },

    {
      id: "midstream",
      nameZh: "⚡ 中游：ASIC 設計服務 (Turnkey)、系統整機與硬體配套",
      nameEn: "Midstream: ASIC Design Service, Server Integration & Hardware",
      color: "#06b6d4", // 科技青藍
      accent: "rgba(6, 182, 212, 0.15)",
      description: "將 CSP 的自研演算法轉化為實體矽晶片的關鍵橋樑！包含從規格定義 (RTL)、光罩委託、後段實體設計到交出白牌 AI 伺服器整櫃的完整產業鏈。",
      sectors: [
        {
          id: "design_service_giants",
          titleZh: "全球與台灣 ASIC 設計服務巨擘 (Turnkey)",
          titleEn: "Global & Taiwan ASIC Turnkey Providers",
          status: "最大受惠族群 (營收純度最高)",
          description: "擁有最深厚先進製程實體設計經驗與光罩整合能力，直接對接北美四大 CSP 數億美元客製晶片訂單。",
          keyPlayers: [
            { name: "博通 (Broadcom / AVGO)", role: "全球客製化 AI ASIC 絕對霸主，獨吞 Google TPU、Meta MTIA 與字節跳動自研單", margin: "75%+", share: "全球 ASIC 份額 >60%", ticker: "AVGO" },
            { name: "聯發科 (2454 / MediaTek)", role: "台灣 IC 設計龍頭全力跨足 Enterprise AI ASIC！手握 224G SerDes、台積電 3nm/2nm 先進製程流片特權，搶攻北美四大 CSP 次世代自研專案，並結盟 NVIDIA 打造車用座艙與 AI PC 客製晶片", margin: "48% ~ 50%", share: "台灣研發工程師規模第一 (逾萬人)", ticker: "2454.TW" },
            { name: "世芯-KY (3661)", role: "純度最高之台灣 ASIC 股王，通吃 AWS Trainium/Inferentia 與北美新創晶片", margin: "18% ~ 22% (量產)", share: "北美 CSP 核心主力", ticker: "3661.TW" },
            { name: "創意電子 (3443)", role: "台積電直屬設計服務旗艦，專攻 HBM3e 整合、微軟 Maia/Cobalt 與高速介面 ASIC", margin: "25% ~ 30%", share: "台積電 CoWoS 第一首選", ticker: "3443.TW" },
            { name: "Marvell (MRVL)", role: "AWS 雲端算力與網通互連 ASIC 核心夥伴，具備客製化運算與光電轉換實力", margin: "52% ~ 55%", share: "雲端客製運算二哥", ticker: "MRVL" },
            { name: "巨有科技 (8227)", role: "台積電 Design Center Alliance (DCA) 夥伴，專注中高階成熟與先進製程轉譯", margin: "35% ~ 42%", share: "台積電利基夥伴", ticker: "8227.TW" }
          ]
        },
        {
          id: "server_odm_asic",
          titleZh: "ASIC 白牌 AI 伺服器整機整合與水冷代工",
          titleEn: "ASIC AI Server ODM & White-box Integration",
          status: "量產交付主戰場",
          description: "CSP 不向品牌廠（Dell/HP）採購，而是直接委託台灣 ODM 廠客製專用機櫃與主板。",
          keyPlayers: [
            { name: "緯穎 (6669)", role: "AWS Trainium 伺服器最大主供，同時直供 Meta MTIA，全台 ASIC 營收純度第一", margin: "8.5% ~ 10.5%", share: "AWS & Meta ASIC 旗艦", ticker: "6669.TW" },
            { name: "廣達 (2382)", role: "Google TPU 白牌伺服器核心代工廠，與 Google 合作自研伺服器逾十年", margin: "8.0% ~ 10.0%", share: "Google 核心 ODM", ticker: "2382.TW" },
            { name: "英業達 (2356)", role: "參與 Google TPU 與微軟客製伺服器主板組裝，具備扎實主板打件產能", margin: "5.0% ~ 6.0%", share: "老牌伺服器主力", ticker: "2356.TW" }
          ]
        },
        {
          id: "hardware_cooling_pcb",
          titleZh: "高階載板、高速 PCB 與散熱模組",
          titleEn: "High-Density ABF, Ultra-Low Loss PCB & Cooling",
          status: "規格升級受惠",
          description: "ASIC 面積龐大且需整合 HBM，帶動大尺寸 ABF 載板與散熱升級。",
          keyPlayers: [
            { name: "欣興 (3037)", role: "Google TPU 與 AWS 自研晶片高階 ABF 載板主力供應商", margin: "25% ~ 30%", share: "載板龍頭", ticker: "3037.TW" },
            { name: "金像電 (2368)", role: "高層數 AI 伺服器主機板 (UBB/OAM) 與自研 ASIC 運算板市佔第一", margin: "28% ~ 32%", share: "AI PCB 霸主", ticker: "2368.TW" },
            { name: "奇鋐 (3017)", role: "為 Google TPU 與 AWS 客製專用水冷板 (Cold Plate) 與 3D VC 散熱模組", margin: "22% ~ 25%", share: "散熱主力", ticker: "3017.TW" },
            { name: "貿聯-KY (3665)", role: "高壓電源連接線束、Busbar 與機櫃內部高速互連線束", margin: "26% ~ 28%", share: "客製線束龍頭", ticker: "3665.TW" }
          ]
        }
      ]
    },

    {
      id: "downstream",
      nameZh: "☁️ 下游：四大 CSP 自研晶片矩陣與終端算力消耗",
      nameEn: "Downstream: Hyperscalers In-House Chips & Workloads",
      color: "#10b981", // 翠綠
      accent: "rgba(16, 185, 129, 0.15)",
      description: "最終買單者與商業落地端！各大雲端巨頭藉由自研晶片達到「算力成本自主化」，每年節省數十億美元採購成本。",
      sectors: [
        {
          id: "google_tpu_ecosystem",
          titleZh: "Google TPU 旗艦家族 (Tensor Processing Unit)",
          titleEn: "Google TPU: v4, v5e, v5p, v6 (Trillium)",
          status: "自研最成熟、規模最大",
          description: "自 2015 年起深耕十年，TPU 已全面承擔 Gemini 2.0 基礎大模型訓練與搜尋推論。",
          keyPlayers: [
            { name: "Alphabet (Google)", role: "全球唯一成功以自研 ASIC 完整替代 GPU 訓練前沿大模型的科技巨頭", ticker: "GOOGL" },
            { name: "Broadcom (博通)", role: "TPU 實體設計與高速 SerDes 互聯晶片獨家夥伴", ticker: "AVGO" },
            { name: "台積電 (2330)", role: "Trillium (TPU v6) 採用 4nm 製程獨家製造", ticker: "2330.TW" }
          ]
        },
        {
          id: "aws_trainium_inferentia",
          titleZh: "Amazon AWS Trainium & Inferentia 運算生態",
          titleEn: "AWS Annapurna Labs: Trainium 1/2 & Inferentia 1/2",
          status: "雲端性價比之王",
          description: "收購 Annapurna Labs 自研，主打比同等級 GPU 便宜 40%~50% 之雲端租賃服務。",
          keyPlayers: [
            { name: "亞馬遜 (Amazon AWS)", role: "部署數十萬顆 Trainium 2 支持 Anthropic Claude 3.5 訓練", ticker: "AMZN" },
            { name: "世芯-KY (3661)", role: "Trainium 2 先進封裝與後段設計服務第一主供", ticker: "3661.TW" },
            { name: "緯穎 (6669)", role: "AWS Trainium 伺服器整櫃最大代工廠", ticker: "6669.TW" }
          ]
        },
        {
          id: "meta_mtia_ecosystem",
          titleZh: "Meta MTIA (Meta Training & Inference Accelerator)",
          titleEn: "Meta MTIA: v1 (7nm), v2 (5nm Artemis)",
          status: "社群與推薦演算法特化",
          description: "專注加速 Instagram 與 Facebook 之廣告推薦演算法與 Llama 輕量推論。",
          keyPlayers: [
            { name: "Meta Platforms", role: "雙軌策略：大規模採購 Blackwell 訓練 Llama 4，同時大建 MTIA 支撐內部推薦系統", ticker: "META" },
            { name: "Broadcom (博通)", role: "Meta 次世代 3nm MTIA 核心設計夥伴", ticker: "AVGO" },
            { name: "台積電 (2330)", role: "5nm Artemis 與未來 3nm MTIA 晶圓製造", ticker: "2330.TW" }
          ]
        },
        {
          id: "msft_maia_cobalt",
          titleZh: "Microsoft Maia 100 & Cobalt 100 運算節點",
          titleEn: "Microsoft Silicon: Maia 100 AI & Cobalt 128-Core CPU",
          status: "全面直供 Azure AI",
          description: "為降低 Azure OpenAI 運算推論成本而打造的特製化加速晶片與 Arm 伺服器 CPU。",
          keyPlayers: [
            { name: "微軟 (Microsoft)", role: "Azure 資料中心全面換代，Maia 晶片專屬液冷機櫃部署", ticker: "MSFT" },
            { name: "創意電子 (3443)", role: "微軟 Maia 晶片 HBM 介面設計與 CoWoS 先進封裝設計服務", ticker: "3443.TW" }
          ]
        }
      ]
    }
  ],

  // 五大 CSP 自研晶片硬體規格橫向對比大表
  cspChipMatrix: [
    {
      name: "Google TPU v6 (Trillium)",
      owner: "Alphabet / Google",
      processNode: "TSMC 4nm",
      designPartner: "Broadcom (博通)",
      memorySpec: "32GB HBM3 (2.5 TB/s)",
      interconnect: "自研 ICI (Optical Circuit Switch 光開關)",
      primaryWorkload: "訓練 Gemini 2.0、YouTube 推薦、Google 搜尋推論",
      deploymentScale: "百萬顆晶片規模 (已部署超過 6 代)",
      tcoAdvantage: "比同代 GPU 推論成本節省約 55%~60%"
    },
    {
      name: "AWS Trainium 2",
      owner: "Amazon AWS",
      processNode: "TSMC 4nm / 5nm",
      designPartner: "世芯-KY (3661) / Annapurna",
      memorySpec: "96GB HBM3e",
      interconnect: "AWS 自研 NeuronLink-v2 (16 晶片環狀直連)",
      primaryWorkload: "支持 Anthropic Claude 3.5 萬卡集群訓練、EC2 雲租賃",
      deploymentScale: "單一 UltraCluster 規模達 100,000 顆晶片",
      tcoAdvantage: "訓練性價比 (Performance/$) 較 GPU 提升 40%"
    },
    {
      name: "Meta MTIA v2 (Artemis)",
      owner: "Meta Platforms",
      processNode: "TSMC 5nm (次世代 3nm)",
      designPartner: "Broadcom (博通)",
      memorySpec: "128GB LPDDR5 / 8-channel",
      interconnect: "PCIe Gen5 + 自研晶片網格互連",
      primaryWorkload: "Instagram / Facebook Reels 廣告推薦、Llama 3 推論",
      deploymentScale: "數十萬顆大規模部署於 Meta 全球資料中心",
      tcoAdvantage: "專屬廣告圖譜矩陣計算，能耗僅 GPU 的 35%"
    },
    {
      name: "Microsoft Maia 100",
      owner: "Microsoft Azure",
      processNode: "TSMC 5nm",
      designPartner: "創意電子 (3443)",
      memorySpec: "64GB HBM2e (1.8 TB/s)",
      interconnect: "客製化 Ethernet 乙太網 RDMA (RoCEv2)",
      primaryWorkload: "Azure OpenAI 服務、Copilot 企業推論、語音/代碼生成",
      deploymentScale: "專用垂直液冷機架，優先支撐 GPT-4 推論",
      tcoAdvantage: "顯著降低向 NVIDIA 支付之高額雲端毛利率溢價"
    },
    {
      name: "Tesla Dojo D1",
      owner: "Tesla (特斯拉)",
      processNode: "TSMC 7nm (D2 規劃 3nm)",
      designPartner: "Tesla 內部自研晶片團隊",
      memorySpec: "超高密度客製 SRAM (無 HBM，極致低延遲)",
      interconnect: "Wafer-scale 晶圓級超高密度互連 (Training Tile)",
      primaryWorkload: "FSD 自動駕駛百萬車輛視頻數據神經網絡訓練",
      deploymentScale: "部署於田納西與加州 Dojo 超級計算中心",
      tcoAdvantage: "針對自動駕駛視頻幀優化，頻寬密度高於標準 GPU 4 倍"
    }
  ]
};
