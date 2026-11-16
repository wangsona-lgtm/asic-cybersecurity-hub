/**
 * 全球與台灣資安概念股、晶片級硬體安全數據庫
 * (Global & Taiwan Cybersecurity Stocks & Hardware Root of Trust Hub)
 */

window.CYBERSECURITY_DATA = {
  lastUpdated: "2026-11-16",

  // ASIC 與資安三大戰略連結
  synergyPillars: [
    {
      title: "🔐 晶片級硬體信任根 (Hardware Root of Trust & PUF)",
      description: "在 ASIC 晶片製造過程中利用微觀物理不可克隆技術 (PUF) 燒錄「晶片DNA指紋」，建立不可被篡改的硬體金鑰，確保雲端 AI 巨頭千億參數模型權重 (Model Weights) 與商業機密防竊取、防逆向工程。",
      representative: "力旺 (3529 / 熵碼科技 PUFsecurity)、神盾 (6462)"
    },
    {
      title: "🛡️ 次世代專用資安硬體加速晶片 (Security ASIC)",
      description: "傳統通用 CPU 無法在 800Gbps 超高頻寬下進行深度封包檢測 (DPI)。資安巨頭自研專屬 Security ASIC（如 Fortinet SP5/NP7 晶片），將防火牆加密解密與威脅過濾效能提升 10 倍以上，且功耗降低 60%。",
      representative: "Fortinet (FTNT)、立端 (6245)、其陽 (3564)、瑞祺電通 (6416)"
    },
    {
      title: "🌐 雲端 AI 零信任架構與模型安全 (AI-SPM & Zero Trust)",
      description: "CSP 大規模部署自研 ASIC 算力集群時，面臨 Prompt 注入攻擊 (Prompt Injection)、訓練數據污染與 API 遭攔截劫持。帶動雲端原生資安防護、身分安全 (PAM) 與端點主動防禦爆發性成長。",
      representative: "Palo Alto Networks (PANW)、CrowdStrike (CRWD)、零壹 (3029)、安碁資訊 (6690)"
    }
  ],

  // 台灣與美股核心資安標的大聯盟
  stocks: [
    // ---------------- 台股資安龍頭 ----------------
    {
      id: "6690",
      ticker: "6690.TW",
      nameZh: "安碁資訊",
      nameEn: "Acer Cyber Security Inc.",
      country: "台灣",
      currency: "NTD",
      category: "soc_service",
      categoryZh: "SOC 資安監控與鑑識",
      price: 215.0,
      changePct: 2.38,
      peRatio: 21.5,
      dividendYield: "3.25%",
      marketCap: "約 48 億台幣",
      roleDescription: "宏碁集團旗下，台灣最大民間與政府 SOC (資安營運中心) 服務商，市佔率超過 50%，涵蓋國防、金融與政府關鍵基礎設施。",
      moat: "國家級資安法規要求金融機構與公務機關必須導入 24 小時 SOC 監控，具備極高續約率與政府特許壁壘。",
      chipAnalysis: {
        signal: "主力籌碼穩定長抱",
        trustBias: "投信長線核心持股",
        rating: "買進 (Buy)"
      },
      catalysts: "政府資安法規嚴格升級，金融機構被強制要求設置資安長與第三方監控，營收連續多年創歷史新高。",
      risks: "國內市場規模較精煉，海外擴張步伐需觀察東南亞成效。"
    },
    {
      id: "3029",
      ticker: "3029.TW",
      nameZh: "零壹科技",
      nameEn: "Zero One Tech",
      country: "台灣",
      currency: "NTD",
      category: "distribution",
      categoryZh: "企業資安與雲端通路代理",
      price: 108.5,
      changePct: 3.83,
      peRatio: 15.2,
      dividendYield: "4.85%",
      marketCap: "約 170 億台幣",
      roleDescription: "台灣最大企業級資安與雲端通路代理龍頭，獨家或主力代理 Palo Alto, Fortinet, Check Point, Cisco 等國際頂級資安軟硬體。",
      moat: "全台超過 2,500 家經銷合作夥伴，與全球一線資安原廠深度綁定數十年，黏著度極高。",
      chipAnalysis: {
        signal: "外資與投信連續同步買超",
        trustBias: "高股息 ETF 積極鎖碼納入",
        rating: "強力買進 (Strong Buy)"
      },
      catalysts: "企業對生成式 AI 帶來的資安漏洞恐懼推升採購預算，高配息與高 ROE (達 24% 以上) 吸引防禦性資金湧入。",
      risks: "原廠若調整代理權限可能帶來的短線波動。"
    },
    {
      id: "3529",
      ticker: "3529.TW",
      nameZh: "力旺",
      nameEn: "eMemory Technology",
      country: "台灣",
      currency: "NTD",
      category: "chip_puf",
      categoryZh: "晶片硬體信任根 (PUF) IP",
      price: 2980.0,
      changePct: 4.20,
      peRatio: 78.5,
      dividendYield: "0.85%",
      marketCap: "約 2,230 億台幣",
      roleDescription: "全球嵌入式非揮發性記憶體 (eNVM) IP 龍頭，旗下子公司「熵碼科技 (PUFsecurity)」專注於量子抗性 (PQC) 與晶片硬體安全信任根 IP。",
      moat: "利用晶圓微結構天然物理隨機性生成「不可複製的晶片DNA」，毛利率高達 100%，無晶圓廠授權模式獲利爆發力冠絕全台。",
      chipAnalysis: {
        signal: "千張大戶持股超過 65%，籌碼極度鎖碼",
        trustBias: "外資高盛、大摩目標價維持頂級評等",
        rating: "強力買進 (Strong Buy)"
      },
      catalysts: "各大 CSP 自研晶片強制導入硬體級安全開機 (Secure Boot) 與密鑰防護，先進製程權利金隨晶片出貨幾何級增長。",
      risks: "高本益比股票，大盤流動性緊縮時波動劇烈。"
    },
    {
      id: "6245",
      ticker: "6245.TW",
      nameZh: "立端科技",
      nameEn: "Lanner Electronics",
      country: "台灣",
      currency: "NTD",
      category: "hardware_appliance",
      categoryZh: "網通資安硬體專用平台",
      price: 98.0,
      changePct: 1.87,
      peRatio: 16.8,
      dividendYield: "3.80%",
      marketCap: "約 135 億台幣",
      roleDescription: "台達電 (2308) 策略入股夥伴，全球網路通訊安全硬體平台領導者，Check Point、Palo Alto 等國際巨頭之專屬資安伺服器核心代工廠。",
      moat: "電信級邊緣安全伺服器技術，符合各國最高規格電磁相容與防篡改硬體機構設計。",
      chipAnalysis: {
        signal: "台達電持股穩固，底部打底完成",
        trustBias: "長線價值型買盤進駐",
        rating: "買進 (Buy)"
      },
      catalysts: "SASE (安全存取服務邊緣) 專用硬體更換潮，5G 專網與邊緣運算資安需求急速增長。",
      risks: "歐美企業資本支出節奏放緩影響設備拉貨週期。"
    },
    {
      id: "6214",
      ticker: "6214.TW",
      nameZh: "精誠資訊",
      nameEn: "Systex Corp.",
      country: "台灣",
      currency: "NTD",
      category: "soc_service",
      categoryZh: "系統整合與零信任資安",
      price: 132.0,
      changePct: 1.15,
      peRatio: 18.0,
      dividendYield: "4.15%",
      marketCap: "約 360 億台幣",
      roleDescription: "台灣資訊服務業龍頭，全面涵蓋企業混合雲安全、身分治理認證與零信任架構導入。",
      moat: "台灣前千大企業超過 80% 均為長期客戶，訂閱制與維護合約營收比重持續攀升。",
      chipAnalysis: {
        signal: "外資波段穩定加碼",
        trustBias: "防禦型穩健高股息資產",
        rating: "買進 (Buy)"
      },
      catalysts: "金管會強化金融資安行動方案 2.0，金融機構全面升級零信任架構大單湧現。",
      risks: "大型專案驗收進度若延後影響單季獲利認列。"
    },

    // ---------------- 美股全球資安巨頭 ----------------
    {
      id: "PANW",
      ticker: "PANW",
      nameZh: "派拓網絡",
      nameEn: "Palo Alto Networks",
      country: "美國",
      currency: "USD",
      category: "global_leader",
      categoryZh: "全球純資安市佔龍頭",
      price: 395.0,
      changePct: 3.15,
      peRatio: 48.0,
      dividendYield: "0.00%",
      marketCap: "約 1,280 億美元",
      roleDescription: "全球市值第一大純資安巨擘，次世代防火牆 (NGFW)、Prisma Cloud 雲安全與 Cortex XSIAM 自動化 AI 營運平台。",
      moat: "推進「平台化戰略 (Platformization)」，整合原本零散的 20+ 種單點資安工具，客戶轉換成本極高。",
      chipAnalysis: {
        signal: "華爾街頂級避險基金最青睞的資安核心持股",
        trustBias: "機構持股高達 85%+",
        rating: "強力買進 (Strong Buy)"
      },
      catalysts: "AI 原生資安防禦 Cortex 營收暴增，年化經常性收入 (ARR) 超越 40 億美元。",
      risks: "全面平台化過渡期給予客戶免費用戶端讓利，短線恐壓抑營收成長率。"
    },
    {
      id: "CRWD",
      ticker: "CRWD",
      nameZh: "群擊安全",
      nameEn: "CrowdStrike Holdings",
      country: "美國",
      currency: "USD",
      category: "global_leader",
      categoryZh: "終端防禦與 XDR 霸主",
      price: 345.0,
      changePct: 4.52,
      peRatio: 65.0,
      dividendYield: "0.00%",
      marketCap: "約 840 億美元",
      roleDescription: "雲端原生端點安全 (EDR/XDR) 全球王者，Falcon 單一代理 (Single Agent) 架構與 Charlotte AI 智慧安全助理。",
      moat: "每日分析超過數兆次安全事件的巨型威脅情報資料庫，網路效應極其強大。",
      chipAnalysis: {
        signal: "2024 年 7 月全球當機事件後客戶流失率極低，股價強力 V 型反轉",
        trustBias: "機構籌碼逢低強勢加碼回補",
        rating: "強力買進 (Strong Buy)"
      },
      catalysts: "次世代安全資訊與事件管理 (Next-Gen SIEM) 迅速取代舊時代 Splunk，自由現金流利潤率高達 30%+。",
      risks: "品牌形象在系統故障修復後仍需維持極限穩定度。"
    },
    {
      id: "FTNT",
      ticker: "FTNT",
      nameZh: "飛塔資訊",
      nameEn: "Fortinet",
      country: "美國",
      currency: "USD",
      category: "hardware_appliance",
      categoryZh: "自研資安 ASIC 晶片霸主",
      price: 92.5,
      changePct: 2.78,
      peRatio: 42.0,
      dividendYield: "0.00%",
      marketCap: "約 710 億美元",
      roleDescription: "全球唯一堅持自研專屬 Security ASIC (SP5/NP7/CP9) 之資安巨頭，以極低功耗提供業界最高傳輸效能的 FortiGate 防火牆與 SASE 架構。",
      moat: "自研 ASIC 使其硬體性價比與能效比是純軟體對手的 5~10 倍，中小企業與大型資料中心滲透率第一。",
      chipAnalysis: {
        signal: "基本面營運利潤率維持在 35% 歷史高檔",
        trustBias: "全球大型科技基金核心配置",
        rating: "買進 (Buy)"
      },
      catalysts: "安全營運 (SecOps) 與整合 SASE 訂閱合約佔比超越傳統純防火牆，經常性軟體服務收入加速。",
      risks: "防火牆設備硬體更換週期受宏觀景氣預算審查影響。"
    },
    {
      id: "NET",
      ticker: "NET",
      nameZh: "雲流科技",
      nameEn: "Cloudflare",
      country: "美國",
      currency: "USD",
      category: "global_leader",
      categoryZh: "邊緣網絡安全與 AI 網關",
      price: 96.0,
      changePct: 3.40,
      peRatio: 88.0,
      dividendYield: "0.00%",
      marketCap: "約 330 億美元",
      roleDescription: "全球最大網路邊緣防護、DDoS 抵禦與 Workers AI 推論平台，阻斷全球近 20% 的惡意網路流量。",
      moat: "覆蓋全球 330+ 城市的邊緣伺服器節點，使任何攻擊在到達客戶伺服器前就被就地化解。",
      chipAnalysis: {
        signal: "成長股先鋒，營收年增率維持 >28%",
        trustBias: "年輕一代雲原生架構師首選",
        rating: "買進 (Buy)"
      },
      catalysts: "Workers AI 允許開發者在邊緣網絡直接調用 Llama 等模型，同時兼具零信任資安過濾防護。",
      risks: "GAAP 淨利潤仍處於打平爬坡階段，估值乘數較高。"
    }
  ]
};
