// 重新導出主要數據集合
import videoData from './videoData';

// 導出所有數據和類型
export * from './videoData';
export * from '../types';
export * from './pageMapping';
export * from './aiPrompt';

export { videoData as default };

/**
 * 數據訪問工具函數
 */

// 根據 ID 查找影片
export const findVideoById = (id: string) => {
  const allVideos = [
    ...videoData.painIntroduction,
    ...videoData.painPerception,
    ...videoData.selfTreatment,
    ...videoData.otherTopics.flatMap(topic => topic.videos),
    ...videoData.muscleGroups.flatMap(group => group.videos),
  ];
  
  return allVideos.find(video => video.id === id);
};

// 根據類別查找影片
export const findVideosByCategory = (category: 'anatomy' | 'basic_treatment' | 'advanced_treatment') => {
  const allVideos = [
    ...videoData.painIntroduction,
    ...videoData.painPerception,
    ...videoData.selfTreatment,
    ...videoData.otherTopics.flatMap(topic => topic.videos),
    ...videoData.muscleGroups.flatMap(group => group.videos),
  ];
  
  return allVideos.filter(video => video.category === category);
};

// 根據主題 ID 查找影片
export const findVideosByTopicId = (topicId: string) => {
  const topic = videoData.otherTopics.find(t => t.id === topicId);
  return topic?.videos || [];
};

// 根據肌肉群 ID 查找影片
export const findVideosByMuscleGroupId = (muscleGroupId: string) => {
  const muscleGroup = videoData.muscleGroups.find(mg => mg.id === muscleGroupId);
  return muscleGroup?.videos || [];
};

// 根據主題 ID 查找主題
export const findTopicById = (id: string) => {
  return videoData.otherTopics.find(topic => topic.id === id);
};

// 根據肌肉群 ID 查找肌肉群
export const findMuscleGroupById = (id: string) => {
  return videoData.muscleGroups.find(group => group.id === id);
};

// 根據肌肉群類別查找肌肉群
export const findMuscleGroupsByCategory = (category: 'upper_cross' | 'lower_cross' | 'other') => {
  return videoData.muscleGroups.filter(group => group.category === category);
}; 