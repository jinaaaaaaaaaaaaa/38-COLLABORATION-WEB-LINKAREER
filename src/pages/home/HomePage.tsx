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
import { HOME_BOTTOM_BANNER, HOME_TOP_BANNER } from './mocks/homeBanner';
import { HOME_FEATURED_CAROUSEL_ITEMS } from './mocks/homeFeaturedCarousel';
import type { CompanySize } from './types/homeFeaturedCarousel';

import * as styles from './HomePage.css';

const getDaysLeft = (dDay?: string) => {
  if (!dDay) return 0;
  if (dDay === '채용 시 마감') return 0;

  return Number(dDay.replace('D-', ''));
};

const getCompanySize = (companyType?: string): CompanySize => {
  if (
    companyType === '대기업' ||
    companyType === '중견기업' ||
    companyType === '중소기업'
  ) {
    return companyType;
  }

  return '중소기업';
};

const HomePage = () => {
  const navigate = useNavigate();
  const { data: featuredRecruitments = [] } =
    useGetHomeFeaturedRecruitmentsQuery();

  const featuredCarouselItems = featuredRecruitments
    .filter((job) => job.id != null)
    .map((job, index) => {
      const fallbackCarouselItem =
        HOME_FEATURED_CAROUSEL_ITEMS[
          index % HOME_FEATURED_CAROUSEL_ITEMS.length
        ];

      return {
        to: '/recruit/detail',
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
