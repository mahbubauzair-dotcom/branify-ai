import { CategoryConfig, CategoryId } from './types';
import { CATEGORIES_1_TO_5 } from './categories-1-5';
import { CATEGORIES_6_TO_10 } from './categories-6-10';
import { PREMIUM_TEMPLATES } from './premium-templates';

// All 10 official BRANIFY categories (general catalog)
export const ALL_CATEGORIES: CategoryConfig[] = [
  ...CATEGORIES_1_TO_5,
  ...CATEGORIES_6_TO_10
];

// 3 premium UAE beauty templates (first commercial launch focus)
export { PREMIUM_TEMPLATES, GENTS_SALON_PREMIUM, LADIES_SALON_PREMIUM, SPA_WELLNESS_PREMIUM } from './premium-templates';

export function getCategoryById(id: string): CategoryConfig | undefined {
  return ALL_CATEGORIES.find((c) => c.id === id);
}

export function getCategoryByShortName(shortName: string): CategoryConfig | undefined {
  return ALL_CATEGORIES.find((c) => c.shortName.toLowerCase() === shortName.toLowerCase());
}

export function getAnyTemplateById(id: string): CategoryConfig | undefined {
  // Check premium first, then general catalog
  const premium = PREMIUM_TEMPLATES.find((t) => t.id === id || t.shortName === id);
  if (premium) return premium;
  return ALL_CATEGORIES.find((c) => c.id === id);
}

export const CATEGORY_IDS: CategoryId[] = ALL_CATEGORIES.map((c) => c.id);

// Re-export types for convenience
export * from './types';
