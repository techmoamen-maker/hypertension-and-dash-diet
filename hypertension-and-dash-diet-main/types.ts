
export enum ContentType {
  PARAGRAPH = 'paragraph',
  SUBTITLE = 'subtitle',
  LIST = 'list',
  KEY_VALUE_LIST = 'key_value_list',
  TABLE = 'table',
  FOOD_CHART = 'food_chart',
  MEAL_PLAN = 'meal_plan',
  SHOPPING_LIST = 'shopping_list',
  IMAGE_CAPTION = 'image_caption',
  MINERAL_INFO = 'mineral_info',
  NUTRIENT_GOALS = 'nutrient_goals',
}

export interface SlideData {
  id: number;
  title: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: ContentType;
  data: any;
}
