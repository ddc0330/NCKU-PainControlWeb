import { VideoDataCollection, VideoItem, Topic, MuscleGroup } from '../types';

/**
 * 中央影片數據管理
 * 這個文件包含了所有頁面使用的影片數據
 * 請將各個頁面的影片數據複製到對應的區域
 */

// 疼痛介紹影片數據
const painIntroductionVideos: VideoItem[] = [
  {
    id: '1',
    title: '認識疼痛',
    description: '認識疼痛的基本概念與定義',
    thumbnailUrl: 'https://img.youtube.com/vi/xM5a2kxyhQM/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=xM5a2kxyhQM'
  },
  {
    id: '2',
    title: '止痛機制',
    description: '了解止痛的生理與心理機制',
    thumbnailUrl: 'https://img.youtube.com/vi/JRnE6yy5cS4/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=JRnE6yy5cS4'
  },
  {
    id: '3',
    title: '疼痛發展史',
    description: '回顧疼痛相關的歷史發展',
    thumbnailUrl: 'https://img.youtube.com/vi/ZWctmHCegZ0/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ZWctmHCegZ0'
  },
  {
    id: '4',
    title: '疼痛肌痙孿惡性循環',
    description: '說明疼痛與肌肉痙攣的惡性循環',
    thumbnailUrl: 'https://img.youtube.com/vi/HTH0kxMv4MY/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=HTH0kxMv4MY'
  },
  {
    id: '5',
    title: '疼痛痙攣惡行循環與止痛機制',
    description: '探討痙攣惡行循環與止痛方法',
    thumbnailUrl: 'https://img.youtube.com/vi/UxDH45PtV-Q/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=UxDH45PtV-Q'
  },
  {
    id: '6',
    title: '姿勢與疼痛',
    description: '姿勢與疼痛的關聯性',
    thumbnailUrl: 'https://img.youtube.com/vi/G4WEQ-QsVVI/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=G4WEQ-QsVVI'
  },
  {
    id: '7',
    title: '不良姿勢與肌肉失衡',
    description: '不良姿勢如何導致肌肉失衡與疼痛',
    thumbnailUrl: 'https://img.youtube.com/vi/P9eWUseyzqE/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=P9eWUseyzqE'
  }
];

// 疼痛自覺系統影片數據
const painPerceptionVideos: VideoItem[] = [
  // TODO: 將 PainPerception.tsx 中的 videos 數據複製到這裡
  {
    id: 'perception_01',
    title: '建立疼痛自覺系統',
    description: '疼痛自覺系統的基本概念與運作機制',
    thumbnailUrl: 'https://img.youtube.com/vi/U-zKWN-2HuE/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=U-zKWN-2HuE'
  },
  {
    id: 'perception_02',
    title: '姿勢評估',
    description: '疼痛自覺系統的詳細解析',
    thumbnailUrl: 'https://img.youtube.com/vi/ciIUkKZJTFk/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ciIUkKZJTFk'
  },
  {
    id: 'perception_03',
    title: '症狀評估',
    description: '疼痛自覺系統的應用與實例',
    thumbnailUrl: 'https://img.youtube.com/vi/_WuVmH9NGKA/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=_WuVmH9NGKA'
  }
];

// 自我治療影片數據
const selfTreatmentVideos: VideoItem[] = [
  // TODO: 將 SelfTreatment.tsx 中的 videos 數據複製到這裡
  {
    id: '1',
    title: '日常疼痛治療原則',
    description: '自我治療的基本概念與方法',
    thumbnailUrl: 'https://img.youtube.com/vi/aJRmuxQlxPg/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=aJRmuxQlxPg'
  },
  {
    id: '2',
    title: '日常疼痛治療方法',
    description: '自我治療的進階技巧',
    thumbnailUrl: 'https://img.youtube.com/vi/EweeqolscQA/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=EweeqolscQA'
  },
  {
    id: '3',
    title: '肌痙攣治療方法',
    description: '自我治療的實用方法',
    thumbnailUrl: 'https://img.youtube.com/vi/xWSlH1n20ko/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=xWSlH1n20ko'
  },
  {
    id: '4',
    title: '肌短縮的治療方法',
    description: '自我治療的實用方法',
    thumbnailUrl: 'https://img.youtube.com/vi/oQEFnkx51uA/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=oQEFnkx51uA'
  },{
    id: '5',
    title: '肌力偏弱之治療',
    description: '自我治療的實用方法',
    thumbnailUrl: 'https://img.youtube.com/vi/IMZDSn_jRxg/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=IMZDSn_jRxg'
  },{
    id: '6',
    title: '日常姿勢的矯正與維持方法',
    description: '自我治療的實用方法',
    thumbnailUrl: 'https://img.youtube.com/vi/qlpEEpfjHMo/0.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=qlpEEpfjHMo'
  }
];

// 其他主題數據
const otherTopicsData: Topic[] = [
  // TODO: 將 OtherTopics.tsx 中的 topics 數據複製到這裡
  {
    id: '1',
    title: '低頭族與電腦族的煩惱',
    description: '現代人因長時間使用手機和電腦導致的頸部、肩部疼痛問題，了解成因、預防方法和治療技巧',
    videos: [
      {
        id: '1',
        title: '肩頸酸痛簡介',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/lk3gA3QCWNg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=lk3gA3QCWNg'
      },
      {
        id: '2',
        title: '常見痛源真人示範',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/6zt1v0Dxy-Q/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=6zt1v0Dxy-Q'
      },
      {
        id: '3',
        title: '後頸肌群定錨式拉筋與按摩技巧示範',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/NvfER_4pvmI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=NvfER_4pvmI'
      },
      {
        id: '4',
        title: '枕下肌基本拉筋運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/bUPGWhGEU-Q/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=bUPGWhGEU-Q'
      },
      {
        id: '5',
        title: '枕下肌自我按壓技巧：兩分鐘緩解頭痛',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/lW4SCNprCpw/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=lW4SCNprCpw'
      },
      {
        id: '6',
        title: '上斜方肌 毛巾式拉筋運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/PjwbX6H0J_A/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=PjwbX6H0J_A'
      },
      {
        id: '7',
        title: '上斜方肌按摩球應用',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/ptH8ll3CM1Y/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ptH8ll3CM1Y'
      },
      {
        id: '8',
        title: '肩胛提肌拉筋運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/QNyRHRLYgMM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=QNyRHRLYgMM'
      },
      {
        id: '9',
        title: '肩胛提肌站式按摩球應用',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/cHrPLBbqCos/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=cHrPLBbqCos'
      },
      {
        id: '10',
        title: '肩胛提肌平臥式按摩球應用',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/weOVHZm6mF8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=weOVHZm6mF8'
      },
      {
        id: '11',
        title: '面關節囊深部按摩技巧',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/G3-bQusEgZY/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=G3-bQusEgZY'
      },
      {
        id: '12',
        title: 'Mulligan旋帶式頸椎自我鬆動術',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/0a-Wy5B5BWc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0a-Wy5B5BWc'
      },
      {
        id: '13',
        title: '頸椎椎間盤復位運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/GH2-HsI970Q/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=GH2-HsI970Q'
      },
      {
        id: '14',
        title: '縮下巴誘發訓練技巧',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/wWXypM-185E/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=wWXypM-185E'
      },
      {
        id: '15',
        title: '深層頸屈肌活化訓練 壓力回饋儀的應用',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/FRpGr2tupxI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=FRpGr2tupxI'
      },
      {
        id: '16',
        title: '靠牆式深層頸屈肌肌力訓練運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/ZIHv-daHAHo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ZIHv-daHAHo'
      },
      {
        id: '17',
        title: '懸空式深層頸屈肌肌力訓練運動 日常辦公室運動',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/11_TgzDZ4kQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=11_TgzDZ4kQ'
      },
      {
        id: '18',
        title: '深層頸屈肌肌力訓練運動 彈力球應用基本篇',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/kPeOTQvO9KM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=kPeOTQvO9KM'
      },
      {
        id: '19',
        title: '下斜方肌站式肌力訓練運動一一',
        description: '低頭族與電腦族的煩惱系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/Ag3hxe4anmg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Ag3hxe4anmg'
      }
    ]
  },
  {
    id: '3',
    title: '游泳與投擲運動以及重覆抬舉之隱憂',
    description: '了解游泳、投擲運動和重複抬舉動作可能帶來的傷害，以及預防和治療方法',
    videos: [
      {
        id: '1',
        title: '常見肩痛自療觀念',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/y-8TXsgwy-I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=y-8TXsgwy-I'
      },
      {
        id: '2',
        title: '旋轉肌解剖(骨架介紹)',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/JZDnfjI_2n4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=JZDnfjI_2n4'
      },
      {
        id: '3',
        title: '旋轉肌表體解剖(觸診練習)',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/wMy3u8vbZAU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=wMy3u8vbZAU'
      },
      {
        id: '4',
        title: '圓肩錯姿矯正運動',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/5C518jcTREM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5C518jcTREM'
      },
      {
        id: '5',
        title: '常見肩痛部位簡介',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/9n2RZQ8fETg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9n2RZQ8fETg'
      },
      {
        id: '6',
        title: '前側肩痛按摩技巧',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/FDH4f6KSmyg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=FDH4f6KSmyg'
      },
      {
        id: '7',
        title: '靠壁式前外側肩部自我按摩技巧',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/917t9z6jFi8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=917t9z6jFi8'
      },
      {
        id: '8',
        title: '棘上肌拉筋運動 (含棘上肌傷害簡介)',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/v_SeOKj50lI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=v_SeOKj50lI'
      },
      {
        id: '9',
        title: '棘下肌拉筋運動',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/fznxMAFCcZU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=fznxMAFCcZU'
      },
      {
        id: '10',
        title: '肩胛下肌拉筋運動',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/7HK-njZZhs0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=7HK-njZZhs0'
      },
      {
        id: '11',
        title: '棘上肌自我按摩技巧(附著端)',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/qWn6vG6ltaQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qWn6vG6ltaQ'
      },
      {
        id: '12',
        title: '臥式棘下肌自我按摩技巧',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/e4oOnEDFdTw/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=e4oOnEDFdTw'
      },
      {
        id: '13',
        title: '靠壁式棘下肌自我按摩技巧',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/dtNCs0fRcYA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=dtNCs0fRcYA'
      },
      {
        id: '14',
        title: '肩胛下肌自我按摩技巧',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/USPdhnhyAVc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=USPdhnhyAVc'
      },
      {
        id: '15',
        title: '旋轉肌群肌力訓練 ',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/P0mY1xTyHMk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=P0mY1xTyHMk'
      },
      {
        id: '16',
        title: '肩胛肌群肌力訓練 ',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/qjI7o689-AI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qjI7o689-AI'
      },
      {
        id: '17',
        title: '肩胛─肱骨動態 控制運動',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/qx58dnorUJM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qx58dnorUJM'
      },
      {
        id: '18',
        title: '肩胛控制訓練原則',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/xUtLA5LzR9E/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=xUtLA5LzR9E'
      },
      {
        id: '19',
        title: '趴式肩胛控制訓練',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/poI2J2pBRiQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=poI2J2pBRiQ'
      },
      {
        id: '20',
        title: '側臥式肩胛控制訓練',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/A_hAiyHzNAI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=A_hAiyHzNAI'
      },
      {
        id: '21',
        title: '後拉式肩胛控制訓練 ',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/GOMZoU_9alU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=GOMZoU_9alU'
      },
      {
        id: '22',
        title: '前推式肩胛控制訓練 ',
        description: '游泳與投擲運動以及重覆抬舉之隱憂系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/3no4VIWjMI8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=3no4VIWjMI8'
      }
    ]
  },
  {
    id: '4',
    title: '【告別工傷假】：神奇的腰椎椎間盤凸出自我復位運動',
    description: '學習如何通過自我復位運動來改善腰椎椎間盤凸出的問題',
    videos: [
      {
        id: '1',
        title: '腰部椎間盤凸出自療簡介',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/_xf1RjiN46c/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=_xf1RjiN46c'
      },
      {
        id: '2',
        title: '眼鏡蛇式椎間盤自我復位運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/bpFm9Hf6rL0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=bpFm9Hf6rL0'
      },
      {
        id: '3',
        title: '站式椎間盤自我復位運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/LrZK2xKVyAI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=LrZK2xKVyAI'
      },
      {
        id: '4',
        title: '坐式椎間盤復位之擺位',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/BHtnHJ1SMb8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=BHtnHJ1SMb8'
      },
      {
        id: '5',
        title: '骨盆側移矯正運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/ne7naWf4bP4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ne7naWf4bP4'
      },
      {
        id: '6',
        title: '靠壁式椎間盤復位運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/pLdefOQ1JTo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pLdefOQ1JTo'
      },
      {
        id: '7',
        title: '握拳式椎間盤復位運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/V5D1Z27HqMU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=V5D1Z27HqMU'
      },
      {
        id: '8',
        title: '毛巾二式椎間盤復位運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/UfhbVkp3Zyk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=UfhbVkp3Zyk'
      },
      {
        id: '9',
        title: '影片欣賞：如何解決椎間盤突出',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/Z3-mYrVjBEo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Z3-mYrVjBEo'
      },
      {
        id: '10',
        title: '影片欣賞：椎間盤凸出之日常衛教與運動',
        description: '腰椎椎間盤凸出自我復位運動系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/SiPOBea-OL8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=SiPOBea-OL8'
      }
    ]
  },
  {
    id: '5',
    title: '【長輩的救星】足底筋膜炎之自我治療自療',
    description: '專為長輩設計的足底筋膜炎自我治療方法，幫助緩解疼痛和改善生活品質',
    videos: [
      {
        id: '1',
        title: '足底筋膜炎自療簡介',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/ucDYYG3I0Po/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ucDYYG3I0Po'
  },
  {
    id: '2',
        title: '足底筋膜拉張運動',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/OH7dV3kDA5E/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=OH7dV3kDA5E'
      },
      {
        id: '3',
        title: '屈趾短肌肌力訓練運動',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/MaSJ-rbSVA0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=MaSJ-rbSVA0'
      },
      {
        id: '4',
        title: '足底筋膜炎 小腿肚自我拉筋運動',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/htRup6WgS1Y/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=htRup6WgS1Y'
      },
      {
        id: '5',
        title: '足底筋膜深部按摩技巧',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/w-8gRWoKxgI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=w-8gRWoKxgI'
      },
      {
        id: '6',
        title: '足底筋膜炎定錨式拉筋運動與自我按摩技巧',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/qswMG8tJc1M/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qswMG8tJc1M'
      },
      {
        id: '7',
        title: '足底筋膜炎 按摩球應技巧',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/wdLMSyLJhlk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=wdLMSyLJhlk'
      },
      {
        id: '8',
        title: '足底筋膜炎 冰按摩技巧',
        description: '足底筋膜炎自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/MqEKQx8a6Zo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=MqEKQx8a6Zo'
      }
    ]
  },
  {
    id: '6',
    title: '網球肘之自我治療自療',
    description: '學習如何通過自我治療方法來改善網球肘的症狀',
    videos: [
      {
        id: '1',
        title: '網球肘自療簡介',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/Bp1IS9k4Rj4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Bp1IS9k4Rj4'
      },
      {
        id: '2',
        title: '網球肘拉筋運動',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/vveeSX1KnCk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=vveeSX1KnCk'
      },
      {
        id: '3',
        title: '網球肘定錨式拉筋運動',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/VWhd73un0kw/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=VWhd73un0kw'
      },
      {
        id: '4',
        title: '網球肘深部自我按摩',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/UtqbFdr4CSg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=UtqbFdr4CSg'
      },
      {
        id: '5',
        title: '網球肘 主動定錨式按摩',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/l35YdC1Bx_Q/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=l35YdC1Bx_Q'
      },
      {
        id: '6',
        title: '網球肘離心收縮訓練運動 I 直肘伸腕訓練',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/TDLfb8wu6T4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TDLfb8wu6T4'
      },
      {
        id: '7',
        title: '網球肘離心收縮訓練 II 前後旋訓練',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/QuRrIZYfcXc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=QuRrIZYfcXc'
      },
      {
        id: '8',
        title: '網球肘離心收縮訓練 III 屈肘伸腕訓練',
        description: '網球肘自我治療系列影片',
        thumbnailUrl: 'https://img.youtube.com/vi/lVKjuqSJcrA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=lVKjuqSJcrA'
      }
    ]
  }
];

// 肌肉群數據（疼痛搜索用）
const muscleGroupsData: MuscleGroup[] = [
  // TODO: 將 PainSearch.tsx 中的 muscleGroups 數據複製到這裡
  {
    id: 'muscle_upper_cross_01',
    name: '上交叉症候群',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_01_01',
        title: '上交叉症候群',
        description: '上交叉症候群相關肌肉解剖學介紹',
        thumbnailUrl: 'https://img.youtube.com/vi/0w7v1XXiPPk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=0w7v1XXiPPk',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_01_02',
        title: '上交叉症候群功能性解剖',
        description: '上交叉症候群相關肌肉解剖學介紹',
        thumbnailUrl: 'https://img.youtube.com/vi/OPhT6TnAKUI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=OPhT6TnAKUI',
        category: 'anatomy'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_02',
    name: '枕下肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_02_01',
        title: '枕下肌',
        description: '枕下肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/pjZexkZZmvg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=pjZexkZZmvg',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_02_02',
        title: '枕下肌拉筋運動',
        description: '枕下肌基本拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/LZt5BP4Bl_Y/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=LZt5BP4Bl_Y',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_02_03',
        title: '枕下肌按摩球應用',
        description: '枕下肌按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/BPZAZa5g7K0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=BPZAZa5g7K0',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_03',
    name: '上斜方肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_03_01',
        title: '上斜方肌',
        description: '上斜方肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/K1BXp1SLo5I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=K1BXp1SLo5I',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_03_02',
        title: '上斜方肌站式拉筋',
        description: '上斜方肌站式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/x_Xn_6uzFYE/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=x_Xn_6uzFYE',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_03_03',
        title: '坐式上斜方肌拉筋',
        description: '上斜方肌坐式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/vUhfh2K3rl0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=vUhfh2K3rl0',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_03_04',
        title: '毛巾式上斜方肌拉筋',
        description: '使用毛巾輔助的上斜方肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/HaRY8m0g1Ck/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=HaRY8m0g1Ck',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_03_05',
        title: '上斜方肌按摩球應用',
        description: '上斜方肌按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/XHwyLjVAPPA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=XHwyLjVAPPA',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_04',
    name: '肩胛提肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_04_01',
        title: '肩胛提肌',
        description: '肩胛提肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/ZeR-PZiL5sk/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ZeR-PZiL5sk',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_04_02',
        title: '肩胛提肌拉筋',
        description: '肩胛提肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/sPK1gaLdJaA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=sPK1gaLdJaA',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_04_03',
        title: '肩胛提肌站式',
        description: '肩胛提肌站式運動',
        thumbnailUrl: 'https://img.youtube.com/vi/cHrPLBbqCos/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=cHrPLBbqCos',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_upper_cross_04_04',
        title: '肩胛提肌臥式按摩球技巧',
        description: '肩胛提肌按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/q08c-ffTRr0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=q08c-ffTRr0',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_05',
    name: '胸鎖乳突肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_05_01',
        title: '胸鎖乳突肌',
        description: '胸鎖乳突肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/EkTEAZYTA_8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=EkTEAZYTA_8',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_05_02',
        title: '胸鎖乳突肌拉筋',
        description: '胸鎖乳突肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/peHpo-ECcS0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=peHpo-ECcS0',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_05_03',
        title: '胸鎖乳突肌按摩球應用',
        description: '胸鎖乳突肌按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/sdSw_noJNFQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=sdSw_noJNFQ',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_06',
    name: '胸小肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_06_01',
        title: '胸小肌',
        description: '胸小肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/oyYRXTEjRa8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=oyYRXTEjRa8',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_06_02',
        title: '胸小肌拉筋',
        description: '胸小肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/Xma5DxIYePQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Xma5DxIYePQ',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_06_03',
        title: '胸小肌壁靠式按摩球應用',
        description: '胸小肌壁靠式按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/apihraLzFzI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=apihraLzFzI',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_07',
    name: '胸大肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_07_01',
        title: '胸大肌',
        description: '胸大肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/YPRcbnK3t-I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=YPRcbnK3t-I',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_07_02',
        title: '胸大肌拉筋',
        description: '胸大肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/zLxiACQfb4k/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=zLxiACQfb4k',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_07_03',
        title: '胸大肌趴式按摩球應用',
        description: '胸大肌趴式按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/8_O_8sGTVr0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=8_O_8sGTVr0',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_upper_cross_07_04',
        title: '胸大小肌壁靠式按摩球應用',
        description: '胸大小肌壁靠式按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/cW8mKAPL0GA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=cW8mKAPL0GA',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_08',
    name: '前鋸肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_08_01',
        title: '前鋸肌',
        description: '前鋸肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/WG0jB4TIOL8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=WG0jB4TIOL8',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_08_02',
        title: '前鉅肌肌肌力訓練',
        description: '前鋸肌俯臥式肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/qg_e88JIbvA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qg_e88JIbvA',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_08_03',
        title: '前鋸肌仰臥式肌力訓練運動',
        description: '前鋸肌平臥式肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/L-Bi5rsoQvM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=L-Bi5rsoQvM',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_09',
    name: '下斜方肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_09_01',
        title: '下斜方肌',
        description: '下斜方肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/5Vm0tZ050yI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5Vm0tZ050yI',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_09_02',
        title: '下斜方肌肌力訓練運動',
        description: '下斜方肌趴式肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/sYYxMrxBuqQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=sYYxMrxBuqQ',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_upper_cross_09_03',
        title: '站式下斜方肌肌力訓練運動1',
        description: '站式下斜方肌肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/yIQl0wRWR0s/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yIQl0wRWR0s',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_upper_cross_10',
    name: '深層頸屈肌',
    category: 'upper_cross',
    videos: [
      {
        id: 'video_muscle_upper_cross_10_01',
        title: '深層頸屈肌',
        description: '深層頸屈肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/qyVDZo4nzug/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qyVDZo4nzug',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_upper_cross_10_02',
        title: '深層頸屈肌肌力訓練',
        description: '深層頸屈肌肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/qP9KmfdvDlE/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qP9KmfdvDlE',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_01',
    name: '下交叉肌肉群',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_01_01',
        title: '下交叉症候群表體解剖',
        description: '下交叉症候群相關肌肉解剖學介紹',
        thumbnailUrl: 'https://img.youtube.com/vi/yEnKm1vQrHM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yEnKm1vQrHM',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_lower_cross_01_02',
        title: '下交叉症候群',
        description: '下交叉症候群',
        thumbnailUrl: 'https://img.youtube.com/vi/2zYhCSUOv9E/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=2zYhCSUOv9E',
        category: 'anatomy'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_02',
    name: '髂腰肌',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_02_01',
        title: '髂腰肌',
        description: '髂腰肌的結構與功能解析',
        thumbnailUrl: 'https://img.youtube.com/vi/2-F1VkQDNvQ/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=2-F1VkQDNvQ',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_lower_cross_02_02',
        title: '髂腰肌站式拉筋',
        description: '髂腰肌站式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/NrHUHZ5OI34/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=NrHUHZ5OI34',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_lower_cross_02_03',
        title: '髂腰肌跪式拉筋',
        description: '髂腰肌跪式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/WbHidyaPa4o/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=WbHidyaPa4o',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_01',
    name: '其他肌群',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_lower_cross_02_01',
        title: '其他肌肉功能性解剖',
        description: '其他肌群解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/TGRwsyfmAvg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TGRwsyfmAvg',
        category: 'anatomy'
      }
    ]
  },
  {
    id: 'muscle_other_02',
    name: '多裂肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_02_01',
        title: '多裂肌',
        description: '多裂肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/Kh5MFH616U8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Kh5MFH616U8',
        category: 'anatomy'
      }
    ]
  },
  {
    id: 'muscle_other_03',
    name: '腰方肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_03_01',
        title: '腰方肌',
        description: '腰方肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/EhLw-4g-k4I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=EhLw-4g-k4I',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_03_02',
        title: '腰方肌側臥式拉筋',
        description: '腰方肌側臥式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/puzwnHReqSA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=puzwnHReqSA',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_03_03',
        title: '腰方肌門框式拉筋',
        description: '門框式腰方肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/515iwXJYS7I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=515iwXJYS7I',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_04',
    name: '梨狀肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_04_01',
        title: '梨狀肌',
        description: '梨狀肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/sVGA32bN3sM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=sVGA32bN3sM',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_04_02',
        title: '梨狀肌坐式拉筋運動',
        description: '梨狀肌坐式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/qi33fayWiE0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qi33fayWiE0',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_04_03',
        title: '梨狀肌站式拉筋運動',
        description: '梨狀肌站式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/oGdc1Rv5054/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=oGdc1Rv5054',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_05',
    name: '髂脛束',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_05_01',
        title: '髂腰束',
        description: '髂腰束解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/7JS4R5VX1J8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=7JS4R5VX1J8',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_05_02',
        title: '髂脛束拉筋',
        description: '髂脛束拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/peq3SPutuis/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=peq3SPutuis',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_05_03',
        title: '腰方肌門框式拉筋',
        description: '門框式腰方肌/髂脛束拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/515iwXJYS7I/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=515iwXJYS7I',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_05_04',
        title: '髂脛束按摩滾筒應用',
        description: '髂脛束按摩滾筒應用',
        thumbnailUrl: 'https://img.youtube.com/vi/GO1kY2U02Ok/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=GO1kY2U02Ok',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_other_05_05',
        title: '髂脛束雙球按摩技巧',
        description: '髂脛束雙球按摩技巧',
        thumbnailUrl: 'https://img.youtube.com/vi/KjGR4SBvaIo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=KjGR4SBvaIo',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_06',
    name: '股直肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_06_01',
        title: '股直肌',
        description: '股直肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/09Hcb_iecWI/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=09Hcb_iecWI',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_06_02',
        title: '股直肌站式拉筋',
        description: '股直肌站式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/qTfgrmQSPg8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=qTfgrmQSPg8',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_06_03',
        title: '股直肌跪式拉筋',
        description: '股直肌跪式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/gixFFTt9_bU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=gixFFTt9_bU',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_07',
    name: '膕旁肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_07_01',
        title: '膕旁肌',
        description: '臀旁肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/IcGFDq3aM2A/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=IcGFDq3aM2A',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_07_02',
        title: '膕旁肌拉筋',
        description: '膕旁肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/l-Hm8DDGdC4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=l-Hm8DDGdC4',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_07_03',
        title: '膕旁肌定錨式拉筋',
        description: '站式膕旁肌定錨式拉筋',
        thumbnailUrl: 'https://img.youtube.com/vi/tigOhykyZJU/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=tigOhykyZJU',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_other_07_04',
        title: '膕旁肌按摩滾筒應用 I',
        description: '膕旁肌按摩滾筒應用 I',
        thumbnailUrl: 'https://img.youtube.com/vi/yU6qqPIxL8E/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=yU6qqPIxL8E',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_other_07_05',
        title: '膕旁肌按摩滾筒應用II',
        description: '膕旁肌按摩滾筒應用II',
        thumbnailUrl: 'https://img.youtube.com/vi/c0k7YmqcpAc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=c0k7YmqcpAc',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_08',
    name: '腓腸肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_08_01',
        title: '腓腸肌',
        description: '脛腸肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/OA8WSP1XJFo/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=OA8WSP1XJFo',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_other_08_02',
        title: '腓腸肌拉筋',
        description: '腓腸肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/kUkOxFOpdXg/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=kUkOxFOpdXg',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_08_03',
        title: '腓腸肌定錨式拉筋與自我按摩',
        description: '腓腸肌定錨式拉筋與自我',
        thumbnailUrl: 'https://img.youtube.com/vi/xePImQK-DlM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=xePImQK-DlM',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_09',
    name: '比目魚肌',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_09_02',
        title: '比目魚肌拉筋',
        description: '比目魚肌拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/-Wq-HDpqvHM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=-Wq-HDpqvHM',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_other_09_03',
        title: '比目魚肌按摩球應用',
        description: '比目魚肌按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/dGg0X5_6FnY/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=dGg0X5_6FnY',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_11',
    name: '小腿肚',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_11_01',
        title: '小腿肚按摩滾筒與按摩球應用',
        description: '小腿肚按摩滾筒與按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/8aHGdA1TSH8/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=8aHGdA1TSH8',
        category: 'advanced_treatment'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_03',
    name: '豎脊肌',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_03_01',
        title: '豎脊肌',
        description: '豎脊肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/9yCR1S2GgTc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=9yCR1S2GgTc',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_lower_cross_03_02',
        title: '豎脊肌平臥式拉筋',
        description: '豎脊肌平臥式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/csKvZ3XJdA4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=csKvZ3XJdA4',
        category: 'basic_treatment'
      },
      {
        id: 'video_muscle_lower_cross_03_03',
        title: '豎脊肌坐式拉筋',
        description: '豎脊肌坐式拉筋運動',
        thumbnailUrl: 'https://img.youtube.com/vi/ektit1lQVnc/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=ektit1lQVnc',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_04',
    name: '腹橫肌',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_04_01',
        title: '腹橫肌',
        description: '腹橫肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/6lrRnjpNDQ0/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=6lrRnjpNDQ0',
        category: 'anatomy'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_05',
    name: '臀大肌',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_05_01',
        title: '=臀大肌',
        description: '臀大肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/wtltS432VTM/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=wtltS432VTM',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_lower_cross_05_02',
        title: '5.6.1 臀大肌肌力訓練',
        description: '臀大肌肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/XSveNdCFozw/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=XSveNdCFozw',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_lower_cross_06',
    name: '臀中肌',
    category: 'lower_cross',
    videos: [
      {
        id: 'video_muscle_lower_cross_06_01',
        title: '臀中肌',
        description: '臀中肌解剖學',
        thumbnailUrl: 'https://img.youtube.com/vi/_rnlDq3CB8A/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=_rnlDq3CB8A',
        category: 'anatomy'
      },
      {
        id: 'video_muscle_lower_cross_06_02',
        title: '臀中肌肌力訓練',
        description: '臀中肌肌力訓練',
        thumbnailUrl: 'https://img.youtube.com/vi/mpP5sBkacxA/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=mpP5sBkacxA',
        category: 'basic_treatment'
      }
    ]
  },
  {
    id: 'muscle_other_10',
    name: '後頸肌群',
    category: 'other',
    videos: [
      {
        id: 'video_muscle_other_10_01',
        title: '後頸肌群定錨式拉筋',
        description: '後頸肌群定錨式拉筋',
        thumbnailUrl: 'https://img.youtube.com/vi/h0Onr4Dt1o4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=h0Onr4Dt1o4',
        category: 'advanced_treatment'
      },
      {
        id: 'video_muscle_other_10_02',
        title: '後頸肌群按摩球應用',
        description: '後頸肌群按摩球應用',
        thumbnailUrl: 'https://img.youtube.com/vi/a2CEgUiW6M4/0.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=a2CEgUiW6M4',
        category: 'advanced_treatment'
      }
    ]
  }
];

// 統一的數據集合
export const videoData: VideoDataCollection = {
  painIntroduction: painIntroductionVideos,
  painPerception: painPerceptionVideos,
  selfTreatment: selfTreatmentVideos,
  otherTopics: otherTopicsData,
  muscleGroups: muscleGroupsData,
};

// 導出各個數據集的引用（方便單獨使用）
export const {
  painIntroduction,
  painPerception,
  selfTreatment,
  otherTopics,
  muscleGroups,
} = videoData;

// 導出默認數據集合
export default videoData; 