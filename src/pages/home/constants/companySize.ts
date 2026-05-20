import type { CompanySize } from '@pages/home/types/homeFeaturedCarousel';

export const COMPANY_SIZE = {
  LARGE: '대기업',
  MEDIUM: '중견기업',
  SMALL: '중소기업',
} as const satisfies Record<string, CompanySize>;

export const COMPANY_SIZE_VALUES = Object.values(COMPANY_SIZE);

export const DEFAULT_COMPANY_SIZE = COMPANY_SIZE.SMALL;
