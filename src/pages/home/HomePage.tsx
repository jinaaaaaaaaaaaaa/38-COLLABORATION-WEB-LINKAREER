import { HOME_TABLIST } from '@constants/tabList';
import { useNavigate } from 'react-router';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import { useGetHomeFeaturedRecruitmentsQuery } from './apis/useHomeFeaturedRecruitmentsQuery';
import HomeActivitySection from './components/homeActivitySection/HomeActivitySection';
import HomeBanner from './components/homeBanner/HomeBanner';
import HomeChatSection from './components/homeChatSection/HomeChatSection';
import HomeCuratedSection from './components/homeCuratedSection/HomeCuratedSection';
import HomeFeaturedCarousel from './components/homeFeaturedCarousel/HomeFeaturedCarousel';
import HomeJobSection from './components/HomeJobSection/HomeJobSection';
import HomeNewNoticeSection from './components/homeNewNoticeSection/HomeNewNoticeSection';
import {
  COMPANY_SIZE_VALUES,
  DEFAULT_COMPANY_SIZE,
} from './constants/companySize';
import { HOME_BOTTOM_BANNER, HOME_TOP_BANNER } from './mocks/homeBanner';
import { HOME_FEATURED_CAROUSEL_ITEMS } from './mocks/homeFeaturedCarousel';
import type { CompanySize } from './types/homeFeaturedCarousel';

import * as styles from './HomePage.css';

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

const HomePage = () => {
  const navigate = useNavigate();
  const {
    data: featuredRecruitments = [],
    isLoading,
    isError,
  } = useGetHomeFeaturedRecruitmentsQuery();

  const featuredCarouselItems = featuredRecruitments
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

  if (isLoading) return <main>로딩중...</main>;
  if (isError) return <main>에러가 발생했습니다.</main>;

  return (
    <main>
      <SearchBar />
      <TabBar
        tabList={HOME_TABLIST}
        ariaLabel="홈 탭"
        selectedValue=""
        onChange={(value) => {
          void navigate(`/${value}`);
        }}
      />

      <div className={styles.sectionContainer}>
        <HomeFeaturedCarousel items={featuredCarouselItems} />
        <HomeNewNoticeSection />
        <HomeCuratedSection />
        <HomeBanner {...HOME_TOP_BANNER} />
        <HomeActivitySection />
        <HomeJobSection featuredRecruitments={featuredRecruitments} />
        <HomeChatSection />
        <HomeBanner {...HOME_BOTTOM_BANNER} />
      </div>
    </main>
  );
};

export default HomePage;
