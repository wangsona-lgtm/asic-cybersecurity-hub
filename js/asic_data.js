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
  ],

  // 日韓 ASIC 國家隊、全球設計服務生態與四角戰略競合
  japanKoreaAsic: {
    overview: {
      title: "台美日韓半導體與 ASIC 戰略競合：代工、設計服務與自研新創的四角賽局",
      description: "在北美四大 CSP 掀起自研晶片淘金熱的同時，日本與南韓亦全力打造屬於自己的 ASIC 與 AI 晶片生態系。日本憑藉深厚的傳統大型系統 LSI (Socionext)、超算能效冠軍 (PFN) 與國家級 Rapidus 2nm 先進晶圓代工，鎖定車用 ADAS 與工業邊緣；南韓則依託三星半導體與 SK 海力士的 HBM 記憶體優勢，由三星 SAFE 設計服務聯盟 (Gaonchips、ADTech、SemiFive) 協同本土 AI 新創國家隊 (Rebellions × Sapeon、FuriosaAI) 發起反攻！"
    },
    japan: [
      {
        company: "Socionext (索思未來 / 6526.T)",
        role: "日本最大 ASIC / Solution SoC 龍頭 (富士通+松下半導體整併)",
        status: "全球前五大 ASIC 巨頭",
        country: "日本 🇯🇵",
        foundryPartner: "台積電 (TSMC 3nm / 2nm) 深度結盟",
        techFocus: "攜手台積電推進 3nm 與 2nm 客製化大型 SoC，主攻車用 ADAS (豐田/Denso) 與北美資料中心 HPC",
        advantage: "具備數十年大型系統 LSI 設計與複雜晶片光罩經驗，是少數能與博通、創意並駕齊驅的非美台設計服務旗艦",
        ticker: "6526.T (東證 Prime)"
      },
      {
        company: "Preferred Networks (PFN)",
        role: "日本頂級 AI 獨角獸國家隊 (自研 MN-Core 超算晶片)",
        status: "全球 Green500 超算能效冠軍",
        country: "日本 🇯🇵",
        foundryPartner: "台積電 (TSMC 7nm/5nm)",
        techFocus: "自研 MN-Core 系列深度學習矩陣運算 ASIC，專為浮點矩陣乘法特化，連續多次斬獲全球 Green500 超算能耗第一名",
        advantage: "軟體框架 (Chainer 創始團隊) 到硬體晶片全棧垂直整合，獲豐田 (Toyota)、Fanuc 與日本新能源產業技術綜合開發機構 (NEDO) 重金注資",
        ticker: "未上市 (日本估值最高 AI 獨角獸)"
      },
      {
        company: "Rapidus (日本國家 2nm 先進晶圓隊)",
        role: "日本國家級 2nm 先進晶圓代工製造廠",
        status: "日本半導體復興終極旗艦",
        country: "日本 🇯🇵",
        foundryPartner: "自建北海道千歲 2nm IIM-1 晶圓廠",
        techFocus: "獲日本政府數千億日圓補貼，引進 IBM 2nm 環繞閘極 (GAA) 技術，並與傳奇晶片架構師 Jim Keller 創辦之 Tenstorrent 戰略結盟，專攻 2nm AI ASIC 與 RISC-V 晶片製造",
        advantage: "國家資本傾力扶持，鎖定 2027 年量產，目標成為全球雲端與車廠在台積電之外的 2nm 第二代工來源",
        ticker: "日本政府主導特許"
      },
      {
        company: "MegaChips (メガチップス / 6875.T)",
        role: "任天堂御用 ASIC / 邊緣物聯網客製化晶片",
        status: "老牌無晶圓廠 Fabless ASIC 廠",
        country: "日本 🇯🇵",
        foundryPartner: "聯電 (UMC) / 宏捷科等全球代工廠",
        techFocus: "數十年長期承攬任天堂 (Nintendo) 遊戲機特製處理器與高速通訊 ASIC，近年積極轉型跨足車載乙太網與智慧感測邊緣 ASIC",
        advantage: "擁有極為成熟穩定的消費性電子高良率量產驗證，現金流與資產負債表極度健全",
        ticker: "6875.T (東證 Prime)"
      },
      {
        company: "Renesas Electronics (瑞薩電子 / 6723.T)",
        role: "全球車用 MCU/SoC 霸主，加速整合自研 DRP-AI 晶片",
        status: "車用客製化晶片領導者",
        country: "日本 🇯🇵",
        foundryPartner: "台積電先進製程代工 + 自有車規成熟晶圓廠",
        techFocus: "將自研動態可配置處理器 (DRP-AI) 嵌入車載與工業客製晶片，並併購 Altium 與 Celeno 打造完整的軟硬體設計生態",
        advantage: "全球車廠 Tier-1 車規安全認證壁壘不可撼動",
        ticker: "6723.T (東證 Prime)"
      },
      {
        company: "EdgeCortix (東京邊緣 AI 晶片新創)",
        role: "次世代超低功耗邊緣 AI 推論 ASIC 研發",
        status: "邊緣 AI 架構挑戰者",
        country: "日本 🇯🇵",
        foundryPartner: "台積電 (TSMC 12nm/7nm)",
        techFocus: "自研 Dynamic Neural Accelerator (DNA) 架構與 SAKURA 系列晶片，專門為無人機、機器人與智慧安防提供極低功耗即時推論",
        advantage: "軟體一鍵相容 PyTorch 與 ONNX，獲瑞薩 (Renesas) 策略注資",
        ticker: "未上市 (頂尖日系硬體新創)"
      }
    ],
    korea: [
      {
        company: "Rebellions (리벨리온) × Sapeon",
        role: "南韓最大 AI 晶片獨角獸國家隊 (兩大龍頭戰略合併)",
        status: "南韓 AI 算力第一旗艦 (估值破 1.3 兆韓元)",
        country: "南韓 🇰🇷",
        foundryPartner: "三星晶圓代工 (Samsung Foundry 4nm GAA) + HBM3e",
        techFocus: "2024 年由 SK 電信旗下 Sapeon 與 Rebellions 合併，推出次世代旗艦晶片「REBEL」，整合三星先進 4nm 製程與 HBM3e 記憶體，主攻大規模 LLM 雲端推論，直球對決 NVIDIA L40S/H100",
        advantage: "背靠 SK 集團、KT 電信、Kakao 與南韓科學技術情報通信部 (MSIT)「K-Cloud 國家雲端計畫」，獨佔南韓本土政府資料中心採購",
        ticker: "SK 集團與主權基金重金控股"
      },
      {
        company: "FuriosaAI (퓨리오사AI)",
        role: "南韓頂級神經網絡 NPU 新創",
        status: "國際級 LLM 推論挑戰者",
        country: "南韓 🇰🇷",
        foundryPartner: "台積電 (TSMC 5nm) + 48GB HBM3 (投片台積電以確保良率)",
        techFocus: "發表旗艦晶片 RNGD (Renegade 叛逆者)，功耗僅 150W TDP，專為 40B~70B 大模型推論打造，能效比傳統 GPU 高出 2.5~3 倍",
        advantage: "自主研發高效率編譯器軟體棧，成功打入南韓搜尋巨頭 Naver 與 LG AI 研究院",
        ticker: "未上市 (韓國最受矚目 NPU 新創)"
      },
      {
        company: "Gaonchips (가온칩스 / 399720.KQ)",
        role: "三星晶圓代工 Tier-1 首席設計服務夥伴 (SAFE DSP)",
        status: "南韓版創意電子 (GUC)",
        country: "南韓 🇰🇷",
        foundryPartner: "三星代工 (Samsung Foundry 3nm/4nm/8nm)",
        techFocus: "三星晶圓代工生態圈 (SAFE) 最重要之設計服務商，專攻 3nm GAA 與 4nm AI 伺服器加速器、自駕車車規晶片實體設計 (Turnkey)",
        advantage: "與三星高層戰略互信最深，連續榮獲三星最佳合作夥伴 (Best DSP) 大獎，直接受惠三星 Foundry 先進製程推進",
        ticker: "399720.KQ (Kosdaq)"
      },
      {
        company: "ADTechnology (에이디테크놀로지 / 200710.KQ)",
        role: "南韓規模最大之半導體設計服務巨擘 (600+ 工程師)",
        status: "三星 HPC/AI 先進設計核心",
        country: "南韓 🇰🇷",
        foundryPartner: "曾為台積電 DCA，後全面轉投三星 Foundry SAFE",
        techFocus: "主攻北美與歐洲超大規模 HPC / 伺服器 AI 客製化晶片，擁有深厚的 Arm Neoverse CSS 架構整合與 4nm/3nm 實體佈局能力",
        advantage: "工程師研發團隊規模全韓第一，手握多個跨國雲端伺服器晶片流片專案",
        ticker: "200710.KQ (Kosdaq)"
      },
      {
        company: "SemiFive (세미파이브)",
        role: "RISC-V 模組化客製 SoC 平台先驅",
        status: "南韓版世芯-KY (Alchip 新型態)",
        country: "南韓 🇰🇷",
        foundryPartner: "三星代工 (Samsung Foundry 4nm/5nm/14nm)",
        techFocus: "由 SiFive 核心團隊創辦，專注將 RISC-V 處理器核心與模組化 IP 平台快速轉譯為三星代工 ASIC 晶片，將晶片開發週期縮短 50%、研發費用降低 60%",
        advantage: "獲軟銀願景基金 (SoftBank Vision Fund) 與三星風險投資重金入股，成為三星搶攻中小型 AI 晶片新創的秘密武器",
        ticker: "軟銀與三星風險投資重金控股"
      },
      {
        company: "OpenEdges Technology (오픈엣지테크놀로지 / 394280.KQ)",
        role: "AI 記憶體控制系統與 NPU IP 供應商",
        status: "南韓版 M31 + Rambus / 矽智財龍頭",
        country: "南韓 🇰🇷",
        foundryPartner: "多晶圓廠相容 (TSMC / Samsung / UMC)",
        techFocus: "全球唯一能同時提供「高頻寬記憶體子系統 (HBM3/3e, LPDDR5x PHY + Controller) 與混精度神經網絡 NPU」的純矽智財供應商",
        advantage: "直接攻克 AI 晶片最致命的「記憶體牆 (Memory Wall)」傳輸瓶頸，已授權全球超過 30 家 ASIC 晶片客戶",
        ticker: "394280.KQ (Kosdaq)"
      },
      {
        company: "CoAsia (코아시아 / 045970.KQ)",
        role: "三星 SAFE DSP 國際化先鋒，車用智慧座艙與物聯網 ASIC",
        status: "三星一線系統設計夥伴",
        country: "南韓 🇰🇷",
        foundryPartner: "三星代工 (Samsung Foundry)",
        techFocus: "在北美、歐洲、大中華區均設有晶片設計據點，聚焦智慧座艙自研 SoC、自駕視覺晶片及客製化車規晶片",
        advantage: "橫跨車用電子供應鏈，具備全球大型 Tier-1 客戶開拓能力",
        ticker: "045970.KQ (Kosdaq)"
      }
    ],

    // 全球四大 ASIC 核心陣營 (台美日韓) 橫向對比大表
    quadComparison: [
      {
        region: "🇹🇼 台灣陣營 (Taiwan)",
        businessModel: "純設計服務 Turnkey + 世界最強晶圓代工製造 + 白牌伺服器整櫃全代工",
        foundrySupport: "台積電 (TSMC 3nm/2nm/CoWoS) 絕對壟斷，良率全球最高",
        keyPlayers: "世芯-KY (3661)、創意電子 (3443)、聯發科 (2454)、智原 (3035)、力旺 (3529)、緯穎 (6669)、廣達 (2382)",
        targetMarket: "北美四大雲端巨頭 (Google TPU, AWS Trainium, Meta MTIA, 微軟 Maia) 大模型訓練與推論機櫃",
        coreStrength: "全球半導體聚落密度第一、Turnkey 與 CoWoS 先進封裝交付速度極快，全球 85%+ 白牌 AI 伺服器整櫃由台廠組裝",
        challenges: "依賴美系 CSP 單一客戶、地緣政治風險與先進製程產能排擠",
        strategicScore: "👑 全球 ASIC 實體製造與整合不可撼動的心臟"
      },
      {
        region: "🇺🇸 美國陣營 (USA)",
        businessModel: "演算法定義晶片 + 巨型網通 IC 巨頭主導 (Broadcom/Marvell) + CSP 自研架構",
        foundrySupport: "高度依託台積電代工，部分專案評估 Intel Foundry (18A/14A)",
        keyPlayers: "Broadcom (AVGO)、Marvell (MRVL)、Google、AWS、Meta、Microsoft、Synopsys、Cadence",
        targetMarket: "全球超大規模資料中心、大模型預訓練集群 (Trillion-Parameter LLM)、自研高速 SerDes 互聯網狀架構",
        coreStrength: "掌握全球前沿大模型演算法定義權、CUDA 替代軟體生態 (PyTorch/Triton) 主導權與超高速晶片間互連 (SerDes/Optical)",
        challenges: "晶片光罩開發成本極為昂貴 (3nm 單次 NRE 達數千萬美元)、缺乏本土成熟硬體代工聚落",
        strategicScore: "🧠 全球自研 ASIC 的大腦與演算法源頭"
      },
      {
        region: "🇯🇵 日本陣營 (Japan)",
        businessModel: "傳統大型系統 LSI 精緻客製 + 國家級先進晶圓代工復興 (Rapidus) + 車用 ADAS 垂直整合",
        foundrySupport: "現階段依託台積電代工，未來依託國家隊 Rapidus 北海道 2nm 晶圓廠",
        keyPlayers: "Socionext (6526.T)、Preferred Networks (PFN)、Rapidus (2nm)、MegaChips (6875.T)、Renesas (6723.T)",
        targetMarket: "日本及全球智慧汽車車載晶片 (豐田/Denso)、邊緣工業機器人 AI、綠能超算節能矩陣、任天堂娛樂系統",
        coreStrength: "大型複雜 SoC 設計經驗逾四十年、車規安全認證標準極為嚴苛、超算節能效率世界第一 (Green500 冠軍)",
        challenges: "本土先進製程曾斷代逾十五年、軟體應用層開發相對封閉、晶片設計工程師平均年齡偏高",
        strategicScore: "🚗 車載 ADAS 與利基型超低功耗高可靠度 ASIC 強國"
      },
      {
        region: "🇰🇷 南韓陣營 (South Korea)",
        businessModel: "三星晶圓代工 SAFE DSP 設計聯盟抱團 + 電信財閥注資 AI 新創國家隊 + HBM 記憶體捆綁",
        foundrySupport: "三星晶圓代工 (Samsung Foundry 3nm GAA/4nm) 主導，部分 AI 新創亦投片台積電",
        keyPlayers: "Rebellions × Sapeon、FuriosaAI、Gaonchips (399720.KQ)、ADTechnology (200710.KQ)、SemiFive、OpenEdges (394280.KQ)",
        targetMarket: "南韓 K-Cloud 國家雲端計畫、本土電信商與入口網站 (SKT, KT, Naver)、邊緣家電 AI 與自駕車",
        coreStrength: "自帶全球記憶體霸權 (三星與 SK 海力士 HBM3e/DRAM 直供優勢)、政府政策與大財閥內購鼎力支持",
        challenges: "三星代工先進製程良率仍在爬坡、海外非韓系大型 CSP 客戶開拓難度高、自研軟體工具鏈仍在完善中",
        strategicScore: "⚡ HBM 記憶體優勢與國家隊抱團追趕的進擊者"
      }
    ]
  },

  // Google TPU (Tensor Processing Unit) 全球上下游產業鏈旗艦數據庫
  googleTpuSupplyChain: {
    title: "Google TPU (Tensor Processing Unit) 全球上下游產業鏈旗艦全景地圖",
    subtitle: "全球自研 ASIC 最成熟、部署規模逾百萬顆、Gemini 2.0 與 Apple Intelligence 背後的算力心臟",
    overview: "Google TPU 是全球雲端巨頭自研 AI 晶片歷史最悠久、規模最大、軟硬體整合最極致的旗艦典範。從 2015 年 TPU v1 誕生，經歷 v2/v3 的液冷引進，到 v4 突破性採用 3D Torus 自研光電路開關 (OCS)，再到當前旗艦 TPU v5p 與次世代 TPU v6 Trillium，背後聯手博通 (Broadcom)、台積電 (TSMC)、SK 海力士 (HBM) 與台灣廣達 (Quanta) 打造出全球最具競爭力的自研閉環生態圈！",
    
    // 歷代進化史 (v1 到 v6 Trillium)
    generations: [
      { gen: "TPU v1", year: "2015", node: "28nm TSMC", memory: "8GB DDR3", cooling: "傳統氣冷", scale: "單卡加速器", workload: "Google 搜尋推論、AlphaGo 世紀圍棋人機大戰", role: "開拓時代" },
      { gen: "TPU v2", year: "2017", node: "16nm TSMC", memory: "16GB HBM", cooling: "氣冷模組", scale: "256 顆 Pod", workload: "首度支援浮點 bfloat16 與大模型分散式訓練", role: "訓練元年" },
      { gen: "TPU v3", year: "2018", node: "16nm TSMC", memory: "32GB HBM2", cooling: "首度導入直流水冷", scale: "1,024 顆 Pod", workload: "BERT 自然語言預訓練、YouTube 推薦系統神經網絡", role: "液冷先驅" },
      { gen: "TPU v4", year: "2021", node: "7nm TSMC", memory: "32GB HBM2", cooling: "機櫃級全液冷", scale: "4,096 顆 Pod", workload: "全面導入自研 OCS 光開關互聯，訓練 PaLM 540B 旗艦模型", role: "光互聯突破" },
      { gen: "TPU v5e", year: "2023", node: "5nm TSMC", memory: "16GB HBM2", cooling: "高密度氣冷/水冷", scale: "256 顆 Pod", workload: "性價比之王，大模型中型訓練與大規模高效推論 (Midjourney 採用)", role: "極致性價比" },
      { gen: "TPU v5p", year: "2023", node: "4nm TSMC", memory: "95GB HBM2e", cooling: "高階銅製冷板液冷", scale: "8,960 顆 Pod", workload: "訓練 Gemini 1.0/1.5 Ultra、支持 Apple Intelligence 基礎模型", role: "頂級旗艦" },
      { gen: "TPU v6 (Trillium)", year: "2024-2025", node: "4nm TSMC", memory: "32GB HBM3 (2.5TB/s)", cooling: "高效直流液冷", scale: "擴展至數萬顆超集群", workload: "Gemini 2.0 多模態推理、前沿合成數據訓練、4.7x 運算密度跳升", role: "次世代霸主" }
    ],

    // 三大核心層級詳細生態
    tiers: [
      {
        tierId: "tpu_upstream",
        titleZh: "🧬 上游：矽智財 (IP)、先進晶圓製造、高頻寬記憶體與光開關",
        titleEn: "Upstream: Silicon IP, TSMC Advanced Foundry, HBM & MEMS Optical Switches",
        color: "#8b5cf6",
        description: "Google TPU 實體矽晶片的製造源頭。包括晶片邏輯設計 IP、台積電先進 FinFET 製程、SK 海力士 HBM 堆疊與自研 MEMS 光開關。",
        categories: [
          {
            name: "晶圓代工與先進封裝 (Foundry & CoWoS)",
            keyPlayer: "台積電 (TSMC / 2330.TW)",
            role: "Google TPU 歷代晶片唯一且獨家的晶圓代工製造商。TPU v4 (7nm)、v5e (5nm)、v5p (4nm) 及 TPU v6 Trillium (4nm) 均由台積電操刀，並採用 CoWoS 2.5D 晶圓級封裝將 TPU 晶粒與 HBM 記憶體高度集成。",
            share: "100% 獨家先進代工",
            ticker: "TSM / 2330.TW"
          },
          {
            name: "高頻寬記憶體 (HBM)",
            keyPlayer: "SK 海力士 (SK Hynix) & 三星電子 (Samsung)",
            role: "SK 海力士為 TPU v5p / v6 旗艦的主要 HBM3/HBM2e 供應商，高達 2.5 TB/s 的頻寬確保龐大模型參數得以高速餵入 TPU 矩陣核心；美光 (Micron) 與三星為二供與擴展認證夥伴。",
            share: "SK 海力士主供 (>70%)",
            ticker: "000660.KS"
          },
          {
            name: "自研光電路開關 (OCS) 與 MEMS 光學元件",
            keyPlayer: "Google 自研 MEMS 光學 + 聯鈞 (3450) / 聯亞 (3081) / Coherent",
            role: "Google 獨門殺手鐧！自研 Optical Circuit Switch (OCS) 利用微機電 (MEMS) 2D 旋轉反射鏡，直接以光纖繞徑切換，完全繞過耗電的高速光電光 (O-E-O) 轉換，形成全球最先進的動態光網狀拓撲。",
            share: "Google 專利封閉技術",
            ticker: "3450.TW / COHR"
          },
          {
            name: "EDA 設計工具與處理器 IP",
            keyPlayer: "新思科技 (Synopsys) / 益華電腦 (Cadence) / Arm",
            role: "提供晶片邏輯驗證、訊號完整性模擬及 Host 處理器輔助架構 IP，確保百億電晶體超大晶片一次流片成功。",
            share: "美系 EDA 雙雄",
            ticker: "SNPS / CDNS"
          }
        ]
      },
      {
        tierId: "tpu_midstream",
        titleZh: "⚡ 中游：設計服務 (Broadcom+聯發科)、高階載板、水冷散熱與伺服器 ODM 整櫃",
        titleEn: "Midstream: Broadcom & MediaTek Turnkey, Liquid Cooling & Quanta ODM",
        color: "#06b6d4",
        description: "將 Google 的 TPU 演算法藍圖轉化為資料中心機櫃的關鍵中樞，台灣供應鏈在此扮演絕對主導角色！",
        categories: [
          {
            name: "ASIC 設計服務霸主 (現行旗艦首供)",
            keyPlayer: "博通 (Broadcom / AVGO)",
            role: "Google TPU 最核心的十年共同研發夥伴！博通負責將 Google 的脈動陣列架構進行實體設計佈局 (Physical Design)，整合特製高速 SerDes 通訊單元，並協同台積電進行流片與封裝封測。",
            share: "現行 TPU 首供 (>60%)",
            ticker: "AVGO"
          },
          {
            name: "Google 次世代 TPU 雙供應商核心挑戰者",
            keyPlayer: "聯發科 (MediaTek / 2454.TW)",
            role: "Google 為了擺脫博通高達 70% 的高毛利定價與產能綁定，積極啟動雙供應商 (Dual Sourcing) 策略，全力扶植聯發科！聯發科手握自研 224G SerDes 關鍵 IP、台積電 3nm/2nm 先進製程流片特權，搶攻次世代 TPU (v7) 與企業級 AI 加速晶片專案。",
            share: "次世代雙供候選 · 224G SerDes 霸主",
            ticker: "2454.TW"
          },
          {
            name: "白牌 AI 伺服器整機與機櫃 ODM 龍頭",
            keyPlayer: "廣達電腦 / 雲達科技 (Quanta / QCT / 2382.TW)",
            role: "Google TPU 最主要的伺服器整機與整櫃 (Rack-level) 代工龍頭！廣達與 Google 合作自研白牌伺服器已超過 15 年，從主機板打件、高速匯流排配線、液冷管路到整個 TPU Pod 系統集成由廣達全面操刀。",
            share: "TPU 整機主供 (>65%)",
            ticker: "2382.TW"
          },
          {
            name: "伺服器主板組裝分流 (ODM Peers)",
            keyPlayer: "英業達 (2356.TW) & 緯穎 (6669.TW)",
            role: "英業達長期負責 Google 資料中心主機板組裝 (SMT)；緯穎則在邊緣推論與機箱模組中具備深度合作關係。",
            share: "主板與周邊代工",
            ticker: "2356.TW / 6669.TW"
          },
          {
            name: "高階 ABF 載板 (IC Substrate)",
            keyPlayer: "欣興電子 (3037.TW) & 日本揖斐電 (Ibiden / 4062.T)",
            role: "TPU 晶片面積巨大且需與多顆 HBM 進行 2.5D CoWoS 封裝，需採用 16~20 層以上的大尺寸高密度 ABF 載板，欣興為 Google TPU 載板核心第一主供。",
            share: "全球 ABF 雙雄",
            ticker: "3037.TW / 4062.T"
          },
          {
            name: "水冷散熱與 CDU 冷卻液分配單元",
            keyPlayer: "雙鴻科技 (3324.TW) & 奇鋐科技 (3017.TW)",
            role: "TPU v3 起便全面強制採用液冷技術。雙鴻與奇鋐為 TPU 客製專用銅製水冷板 (Cold Plate)、分流管 (Manifold) 及機櫃級冷卻液分配系統 (CDU)，單晶片解熱能力突破 700W~1000W。",
            share: "台灣散熱雙雄",
            ticker: "3324.TW / 3017.TW"
          },
          {
            name: "高層數高速 PCB 與超低損耗 CCL 銅箔基板",
            keyPlayer: "金像電 (2368.TW) & 台光電 (2383.TW)",
            role: "金像電為 TPU 主板 (UBB/OAM) 與自研交換機背板的主力 PCB 廠；台光電獨家供應極低介電損耗 (Ultra Low Loss) CCL 材料，確保高速 PCIe 6.0 與 SerDes 訊號不衰減。",
            share: "AI PCB 霸主",
            ticker: "2368.TW / 2383.TW"
          },
          {
            name: "高壓電源供應器與匯流排 (Busbar)",
            keyPlayer: "台達電 (2308.TW) & 貿聯-KY (3665.TW)",
            role: "台達電提供符合 Open Rack 規範之 48V/12V 鈦金級高轉換效率電源供應模組；貿聯-KY 供應機櫃內部大電流 Busbar 銅排與高速連接線束。",
            share: "電源與線束主力",
            ticker: "2308.TW / 3665.TW"
          }
        ]
      },
      {
        tierId: "tpu_downstream",
        titleZh: "☁️ 下游：GCP 雲端超算叢集、Gemini 基礎大模型與外部重量級客戶",
        titleEn: "Downstream: GCP TPU Pods, Gemini 2.0, DeepMind & Enterprise Clients",
        color: "#10b981",
        description: "Google 自研 TPU 的終端算力價值變現！包括支援自家所有億級用戶核心產品，並在 GCP 上直接對外輸出算力服務。",
        categories: [
          {
            name: "Google 內部旗艦大模型訓練 (Internal AI)",
            keyPlayer: "Google DeepMind & Google Research",
            role: "Gemini 1.0, 1.5 Pro, 2.0 Flash/Pro 系列多模態前沿基礎模型全部 100% 在數萬顆 TPU v4 與 TPU v5p Pod 上預訓練與微調完成，無依賴任何外部 GPU！",
            workload: "Gemini 2.0 前沿模型、AlphaFold 3 蛋白質預測"
          },
          {
            name: "Google 億級用戶消費級核心產品",
            keyPlayer: "Google Search, YouTube, Workspace, Photos",
            role: "每天數十億次 Google 搜尋 AI Overviews、YouTube 視頻推薦排序、Gmail 智慧撰寫全部運行於 TPU 叢集上，使 Google 每年節省超過數十億美元 GPU 租賃與電費成本。",
            workload: "全球每日數十億次即時推論"
          },
          {
            name: "Google Cloud Platform (GCP 雲端算力租賃)",
            keyPlayer: "Google Cloud TPU Pods (超大單一網格集群)",
            role: "透過 GKE (Google Kubernetes Engine) 將 TPU v5e/v5p 切分為可動態彈性擴充的雲端算力切片，性價比比 AWS/Azure 同級 GPU 便宜 40%~50%。",
            workload: "全球數萬家 AI 新創與企業客戶"
          },
          {
            name: "外部重量級標竿客戶 (External Flagship Clients)",
            keyPlayer: "Apple (蘋果) · Anthropic · Midjourney · Character.ai",
            role: "① 蘋果 (Apple)：官方論文證實 Apple Intelligence 基礎大模型 (AFM) 是以 Google Cloud 上的數千顆 TPU v4/v5p 訓練；② Anthropic：將 Claude 模型部分訓練與推論部署於 Google TPU；③ Midjourney：全球最大 AI 生圖平台全面採用 TPU v5e；④ Character.ai：採用 TPU 支撐數百億次極低延遲對話推論。",
            workload: "世界級前沿 AI 巨頭指名採用"
          }
        ]
      }
    ],

    // Google TPU 三大核心技術殺手鐧 (Architectural Innovations)
    innovations: [
      {
        title: "① 脈動陣列 (Systolic Array) 矩陣乘法單元 (MXU)",
        desc: "不同於 GPU 依賴複雜的指令解碼與快取記憶體頻繁讀寫，TPU 採用脈動陣列架構：數據像血液般在陣列乘法器中連續流動計算，無需將中間值反覆存入暫存器，在進行大模型 Attention 矩陣乘法時，具備極致的能耗比 (Compute/Watt) 與矽晶片利用率！"
      },
      {
        title: "② 自研光電路開關 (Optical Circuit Switch - OCS) 3D Torus 動態拓撲",
        desc: "Google 自行研發的 OCS 是全世界唯一在超算集群中落地的全光交換技術！利用 2D MEMS 旋轉微反射鏡直接在光纖層面切換光路，沒有傳統電氣交換機昂貴耗電的光電轉換 (O-E-O)。當單卡故障時，OCS 能在毫秒級自動繞徑重組網路拓撲，集群可靠度大幅超越標準 InfiniBand！"
      },
      {
        title: "③ 軟硬一體編譯器生態：XLA (Accelerated Linear Algebra) 與 JAX",
        desc: "硬體只是半成品，軟體編譯器才是護城河！Google 打造的 XLA 專門將 TensorFlow 與 JAX 代碼圖編譯並融合 (Kernel Fusion) 為 TPU 最優化硬體指令，避免了算子重複訪存，徹底擊碎了輝達 CUDA 的軟體壟斷壁壘！"
      }
    ]
  }
};
