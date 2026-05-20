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
import { convertFeaturedCarouselItems } from './utils/convertFeaturedCarouselItems';

import * as styles from './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    data: featuredRecruitments = [],
    isLoading,
    isError,
  } = useGetHomeFeaturedRecruitmentsQuery();

  const featuredCarouselItems =
    convertFeaturedCarouselItems(featuredRecruitments);

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
