import { 
  PageMappingCollection, 
  GeneralPage, 
  MuscleSpecificPage, 
  TopicSpecificPage 
} from '../types';
import { videoData } from './videoData';

/**
 * 一般頁面映射
 */
const generalPages: GeneralPage[] = [
  {
    id: 'pain-introduction',
    title: '疼痛簡介',
    route: '/introduction',
    category: 'introduction'
  },
  {
    id: 'pain-perception',
    title: '疼痛自覺系統',
    route: '/perception',
    category: 'perception'
  },
  {
    id: 'self-treatment',
    title: '自我治療',
    route: '/self-treatment',
    category: 'self_treatment'
  }
];

/**
 * 肌肉特定頁面映射
 */
const muscleSpecificPages: MuscleSpecificPage[] = videoData.muscleGroups.map(muscleGroup => ({
  id: `muscle-${muscleGroup.id}`,
  title: `疼痛查詢 - ${muscleGroup.name}`,
  route: `/search?muscle=${muscleGroup.id}`,
  muscleGroupId: muscleGroup.id,
  muscleGroupName: muscleGroup.name
}));

/**
 * 主題特定頁面映射
 */
const topicSpecificPages: TopicSpecificPage[] = videoData.otherTopics.map(topic => ({
  id: `topic-${topic.id}`,
  title: `其他主題 - ${topic.title}`,
  route: `/other-topics?topic=${topic.id}`,
  topicId: topic.id,
  topicTitle: topic.title
}));

/**
 * 完整的頁面映射集合
 */
export const pageMappingData: PageMappingCollection = {
  generalPages,
  muscleSpecificPages,
  topicSpecificPages
};

/**
 * 所有頁面的統一列表
 */
export const allPages = [
  ...generalPages,
  ...muscleSpecificPages,
  ...topicSpecificPages
];

/**
 * 根據ID查找頁面
 */
export const findPageById = (id: string) => {
  return allPages.find(page => page.id === id);
};

/**
 * 根據路由查找頁面
 */
export const findPageByRoute = (route: string) => {
  return allPages.find(page => page.route === route);
};

/**
 * 根據名稱搜索頁面（模糊匹配）
 */
export const searchPagesByName = (searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return allPages.filter(page => 
    page.title.toLowerCase().includes(term)
  );
};

/**
 * 獲取所有肌肉群頁面
 */
export const getAllMusclePages = () => muscleSpecificPages;

/**
 * 獲取所有主題頁面
 */
export const getAllTopicPages = () => topicSpecificPages;

/**
 * 獲取所有一般頁面
 */
export const getAllGeneralPages = () => generalPages;

export default pageMappingData; 