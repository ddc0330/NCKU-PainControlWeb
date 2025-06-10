# 影片數據管理

這個目錄包含了所有影片數據的中央管理文件。

## 文件結構

- `videoData.ts` - 主要的數據存儲文件
- `index.ts` - 數據訪問的索引文件和工具函數
- `README.md` - 這個說明文件

## 如何遷移數據

### 1. 複製現有數據

請將各個頁面文件中的數據複製到 `videoData.ts` 中對應的區域：

- **PainIntroduction.tsx** 的 `videos` → `painIntroductionVideos`
- **PainPerception.tsx** 的 `videos` → `painPerceptionVideos`
- **SelfTreatment.tsx** 的 `videos` → `selfTreatmentVideos`
- **OtherTopics.tsx** 的 `topics` → `otherTopicsData`
- **PainSearch.tsx** 的 `muscleGroups` → `muscleGroupsData`

### 2. 更新頁面引用

在各個頁面文件中，移除本地數據定義，改為從數據文件引入：

```typescript
// 舊的方式（移除）
const videos: VideoItem[] = [
  // 本地數據...
];

// 新的方式
import { painIntroduction } from '../data';
// 或
import { videoData } from '../data';
const videos = videoData.painIntroduction;
```

## 數據訪問方式

### 基本引入

```typescript
// 引入所有數據
import videoData from '../data';

// 引入特定數據集
import { painIntroduction, otherTopics, muscleGroups } from '../data';

// 引入類型
import { VideoItem, Topic, MuscleGroup } from '../data';
```

### 使用工具函數

```typescript
import { 
  findVideoById,
  findVideosByCategory,
  findTopicById,
  findMuscleGroupById,
  findMuscleGroupsByCategory 
} from '../data';

// 根據 ID 查找影片
const video = findVideoById('video_id');

// 根據類別查找影片
const anatomyVideos = findVideosByCategory('anatomy');

// 根據主題 ID 查找主題
const topic = findTopicById('topic_id');
```

## 優點

1. **集中管理** - 所有影片數據在一個地方管理
2. **類型安全** - 統一的 TypeScript 類型定義
3. **易於維護** - 修改數據只需要在一個地方
4. **可擴展** - 容易添加新的數據類型和工具函數
5. **重用性** - 數據可以在多個組件間共享

## 下一步

1. 複製現有數據到 `videoData.ts`
2. 更新各個頁面文件以使用新的數據引用
3. 測試所有頁面功能正常
4. 刪除頁面文件中的舊數據定義 