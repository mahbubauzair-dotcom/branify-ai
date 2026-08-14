import { CategoryConfig, CategoryId } from './types';
import { CATEGORIES_1_TO_5 } from './categories-1-5';
import { CATEGORIES_6_TO_10 } from './categories-6-10';

export const ALL_CATEGORIES: CategoryConfig[] = [
  ...CATEGORIES_1_TO_5,
  ...CATEGORIES_6_TO_10
];

export function getCategoryById(id: string): CategoryConfig | undefined {
  return ALL_CATEGORIES.find((c) => c.id === id);
}

export function getCategoryByShortName(shortName: string): CategoryConfig | undefined {
  return ALL_CATEGORIES.find((c) => c.shortName.toLowerCase() === shortName.toLowerCase());
}

export const CATEGORY_IDS: CategoryId[] = ALL_CATEGORIES.map((c) => c.id);

// Re-export types for convenience
export * from './types';
