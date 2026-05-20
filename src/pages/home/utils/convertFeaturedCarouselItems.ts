import type { FeaturedRecruitmentResponse } from '@apis/__generated__/data-contracts';
import {
  COMPANY_SIZE_VALUES,
  DEFAULT_COMPANY_SIZE,
} from '@pages/home/constants/companySize';
import { HOME_FEATURED_CAROUSEL_ITEMS } from '@pages/home/mocks/homeFeaturedCarousel';
import type {
  CompanySize,
  HomeFeaturedCarouselItem,
} from '@pages/home/types/homeFeaturedCarousel';

const getDaysLeft = (dDay?: string) => {
  if (!dDay) return 0;

  const matchedNumber = dDay.match(/\d+/);

  return matchedNumber ? Number(matchedNumber[0]) : 0;
};

const getCompanySize = (companyType?: string): CompanySize => {
  if (COMPANY_SIZE_VALUES.includes(companyType as CompanySize)) {
    return companyType as CompanySize;
  }

  return DEFAULT_COMPANY_SIZE;
};

export const convertFeaturedCarouselItems = (
  featuredRecruitments: FeaturedRecruitmentResponse[],
): HomeFeaturedCarouselItem[] => {
  return featuredRecruitments
    .slice(0, 2)
    .filter((job) => job.id != null)
    .map((job, index) => {
      const fallbackCarouselItem =
        HOME_FEATURED_CAROUSEL_ITEMS[
          index % HOME_FEATURED_CAROUSEL_ITEMS.length
        ];

      return {
        to: index === 0 ? '/recruit/detail' : undefined,
        companyName: job.company ?? '',
        companySize: getCompanySize(job.companyType),
        daysLeft: getDaysLeft(job.dDay),
        thumbnailUrl: fallbackCarouselItem?.thumbnailUrl ?? '',
        thumbnailAlt:
          fallbackCarouselItem?.thumbnailAlt ?? `${job.company ?? ''} 이미지`,
        companyLogoUrl: job.imageUrl ?? '',
        companyLogoAlt: `${job.company ?? ''} 로고`,
        announcementTitle: job.title ?? '',
        announcementDeadline: job.dDay ?? '',
        announcementCategory: job.jobCategory ?? '',
      };
    });
};
