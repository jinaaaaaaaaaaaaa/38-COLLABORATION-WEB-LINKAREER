import { useState } from 'react';
import { MENTO_CATEGORY_TABLIST, MENTO_MAIN_TABLIST } from '@constants/tabList';

import mentoTopBannerImg from '@assets/images/mento-top-banner.webp';
import Pagenation from '@components/pagenation/Pagenation';
import TabBar from '@components/tabBar/TabBar';

import MentoTopBanner from './components/mentoBanner/mentoTopBanner/MentoTopBanner';
import MentoSearchBar from './components/mentoSearchBar/MentoSearchBar';
import MentoTabBar from './components/mentoTabBar/MentoTabBar';

const MentoPage = () => {
  const [selectedMainTab, setSelectedMainTab] = useState<string>(
    MENTO_MAIN_TABLIST[0].value,
  );
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>(
    MENTO_CATEGORY_TABLIST[0].value,
  );

  return (
    <>
      <TabBar
        tabList={MENTO_MAIN_TABLIST}
        ariaLabel="멘토페이지 메인 탭바"
        selectedValue={selectedMainTab}
        onChange={setSelectedMainTab}
      />
      <TabBar
        tabList={MENTO_CATEGORY_TABLIST}
        ariaLabel="멘토페이지 카테고리 탭바"
        selectedValue={selectedCategoryTab}
        onChange={setSelectedCategoryTab}
      />
      <MentoTopBanner imgSrc={mentoTopBannerImg} />
      <MentoSearchBar />
      <div>
        <p>맞춤 멘토에게 질문해보세요</p>
      </div>
      <MentoTabBar />
      <Pagenation currentPage={1} totalPages={5} onPageChange={() => {}} />
    </>
  );
};

export default MentoPage;
