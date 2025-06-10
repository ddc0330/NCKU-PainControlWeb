// 基礎影片項目接口
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category?: 'anatomy' | 'basic_treatment' | 'advanced_treatment';
}

// 主題接口（用於其他主題頁面）
export interface Topic {
  id: string;
  title: string;
  description: string;
  videos: VideoItem[];
}

// 肌肉群接口（用於疼痛搜索頁面）
export interface MuscleGroup {
  id: string;
  name: string;
  category: 'upper_cross' | 'lower_cross' | 'other';
  videos: VideoItem[];
}

// 影片數據集合接口
export interface VideoDataCollection {
  // 疼痛介紹影片
  painIntroduction: VideoItem[];
  
  // 疼痛自覺系統影片
  painPerception: VideoItem[];
  
  // 自我治療影片
  selfTreatment: VideoItem[];
  
  // 其他主題（包含多個主題系列）
  otherTopics: Topic[];
  
  // 肌肉群數據（用於疼痛搜索）
  muscleGroups: MuscleGroup[];
}

// ============ 簡化的頁面映射系統 ============

// 基本頁面信息
export interface PageInfo {
  id: string;
  title: string;
  route: string;
}

// 一般頁面
export interface GeneralPage extends PageInfo {
  category: 'home' | 'introduction' | 'perception' | 'self_treatment' | 'ai_search';
}

// 肌肉特定頁面
export interface MuscleSpecificPage extends PageInfo {
  muscleGroupId: string;
  muscleGroupName: string;
}

// 主題特定頁面
export interface TopicSpecificPage extends PageInfo {
  topicId: string;
  topicTitle: string;
}

// 頁面映射集合
export interface PageMappingCollection {
  generalPages: GeneralPage[];
  muscleSpecificPages: MuscleSpecificPage[];
  topicSpecificPages: TopicSpecificPage[];
} 