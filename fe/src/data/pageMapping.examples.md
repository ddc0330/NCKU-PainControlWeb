# 簡化頁面映射系統使用指南

這個簡化的頁面映射系統為AI提供了快速獲取頁面名稱和路由的能力。

## 系統概覽

### 三種頁面類型

1. **一般頁面**: 基礎功能頁面（首頁、疼痛簡介、疼痛自覺系統、自我治療、AI搜尋）
2. **肌肉特定頁面**: 特定肌肉群的疼痛查詢頁面
3. **主題特定頁面**: 特定主題討論頁面

## 使用範例

### 基本導入

```typescript
import { 
  pageMappingData, 
  allPages, 
  searchPagesByName,
  findPageById,
  getAllMusclePages,
  getAllTopicPages,
  getAllGeneralPages
} from '../data';
```

### 1. 獲取所有頁面

```typescript
// 獲取所有頁面
const allAvailablePages = allPages;
console.log(allAvailablePages);
// 輸出所有頁面的 { id, title, route } 信息
```

### 2. 按類型獲取頁面

```typescript
// 獲取所有一般頁面
const generalPages = getAllGeneralPages();
console.log(generalPages);
// 輸出: [
//   { id: 'home', title: '首頁', route: '/' },
//   { id: 'pain-introduction', title: '疼痛簡介', route: '/introduction' },
//   ...
// ]

// 獲取所有肌肉群頁面
const musclePages = getAllMusclePages();
console.log(musclePages);
// 輸出: [
//   { id: 'muscle-muscle_lower_cross_05', title: '疼痛查詢 - 臀大肌', route: '/search?muscle=muscle_lower_cross_05' },
//   ...
// ]

// 獲取所有主題頁面
const topicPages = getAllTopicPages();
console.log(topicPages);
// 輸出: [
//   { id: 'topic-1', title: '其他主題 - 低頭族與電腦族的煩惱', route: '/other-topics?topic=1' },
//   ...
// ]
```

### 3. 搜索頁面

```typescript
// 根據名稱搜索頁面
const painPages = searchPagesByName('疼痛');
console.log(painPages);
// 輸出包含"疼痛"的所有頁面

// 搜索臀大肌相關頁面
const gluteusPages = searchPagesByName('臀大肌');
console.log(gluteusPages);
// 輸出: [{ id: 'muscle-muscle_lower_cross_05', title: '疼痛查詢 - 臀大肌', route: '/search?muscle=muscle_lower_cross_05' }]

// 搜索低頭族相關頁面
const lowHeadPages = searchPagesByName('低頭族');
console.log(lowHeadPages);
// 輸出低頭族相關的主題頁面
```

### 4. 查找特定頁面

```typescript
// 根據ID查找頁面
const homePage = findPageById('home');
console.log(homePage);
// 輸出: { id: 'home', title: '首頁', route: '/' }

// 根據路由查找頁面
const introPage = findPageByRoute('/introduction');
console.log(introPage);
// 輸出: { id: 'pain-introduction', title: '疼痛簡介', route: '/introduction' }
```

## 實際應用場景

### AI如何使用這個系統

```javascript
// AI接收用戶問題："我想了解臀大肌"
const userQuestion = "我想了解臀大肌";

// 搜索相關頁面
const relatedPages = searchPagesByName('臀大肌');

// AI可以回應：
// "我為您找到了相關頁面：疼痛查詢 - 臀大肌，您可以點擊這裡查看詳細信息。"
// 並提供跳轉連結：relatedPages[0].route
```

## 數據結構示例

### 一般頁面
```json
{
  "id": "pain-introduction",
  "title": "疼痛簡介",
  "route": "/introduction",
  "category": "introduction"
}
```

### 肌肉特定頁面
```json
{
  "id": "muscle-muscle_lower_cross_05",
  "title": "疼痛查詢 - 臀大肌",
  "route": "/search?muscle=muscle_lower_cross_05",
  "muscleGroupId": "muscle_lower_cross_05",
  "muscleGroupName": "臀大肌"
}
```

### 主題特定頁面
```json
{
  "id": "topic-1",
  "title": "其他主題 - 低頭族與電腦族的煩惱",
  "route": "/other-topics?topic=1",
  "topicId": "1",
  "topicTitle": "低頭族與電腦族的煩惱"
}
```

## 完整頁面列表

### 一般頁面 (5個)
- 首頁 (`/`)
- 疼痛簡介 (`/introduction`)
- 疼痛自覺系統 (`/perception`)
- 自我治療 (`/self-treatment`)
- AI智能搜尋 (`/ai-search`)

### 肌肉特定頁面 (動態生成)
- 疼痛查詢 - 上交叉症候群 (`/search?muscle=muscle_upper_cross_01`)
- 疼痛查詢 - 枕下肌 (`/search?muscle=muscle_upper_cross_02`)
- 疼痛查詢 - 上斜方肌 (`/search?muscle=muscle_upper_cross_03`)
- ... (所有肌肉群)

### 主題特定頁面 (動態生成)
- 其他主題 - 低頭族與電腦族的煩惱 (`/other-topics?topic=1`)
- ... (所有其他主題)

這個簡化系統讓AI能夠快速獲取頁面標題和路由，便於推薦和導航。 