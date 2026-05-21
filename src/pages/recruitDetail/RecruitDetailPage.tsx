import { useCallback, useRef, useState } from 'react';

import imgDetail1 from '@assets/images/detail_thumbnail_img1.webp';
import imgDetail2 from '@assets/images/detail_thumbnail_img2.webp';
import imgDetail3 from '@assets/images/detail_thumbnail_img3.webp';
import detailImg4 from '@assets/images/detail_thumbnail_img4.webp';
import TabBar from '@components/tabBar/TabBar';
import { layout } from '@pages/recruitDetail/constants/layout';
import { useTabScrollSync } from '@pages/recruitDetail/hooks/useTabScrollSync';

import {
  usePassCoverLettersQuery,
  usePassReviewsQuery,
} from './apis/recruitDetailApi';
import { useGetRecruitDetailQuery } from './apis/useRecruitDetailQuery';
import AiRecommendSection from './components/aiRecommendSection/AiRecommendSection';
import ChatBanner from './components/chatBanner/ChatBanner';
import DetailImageSection from './components/detailImageSection/DetailImageSection';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import RecruitDetailContent from './components/recruitDetailContent/RecruitDetailContent';
import RecruitDetailInfoSection from './components/recruitDetailInfoSection/RecruitDetailInfoSection';
import ReviewSection from './components/reviewSection/ReviewSection';
import StatsCarousel from './components/statsCarousel/StatsCarousel';
import TopBtn from './components/topBtn/TopBtn';
import { MOCK_AI_RECOMMEND } from './mocks/mockAiRecommend';
import { MOCK_PASS_COVER_LETTER } from './mocks/mockPassCoverLetter';

import * as styles from './RecruitDetailPage.css';

const RECRUIT_DETAIL_TABS = [
  { label: '상세 내용', value: 'detail' },
  { label: '합격 자료', value: 'pass-data' },
];

const PASS_REVIEW_TAGS = [
  ['2025 하반기', 'HR', '인턴'],
  ['2024 하반기', 'HR', '인턴'],
  ['2025 하반기', '마케팅', '인턴'],
];

const RecruitDetailPage = () => {
  const {
    data: recruitDetail,
    isPending: isRecruitDetailPending,
    isError: isRecruitDetailError,
  } = useGetRecruitDetailQuery();
  const {
    data: passCoverLetters = [],
    isPending: isPassCoverLettersPending,
    isError: isPassCoverLettersError,
  } = usePassCoverLettersQuery();

  const {
    data: passReviews = [],
    isPending: isPassReviewsPending,
    isError: isPassReviewsError,
  } = usePassReviewsQuery();

  const [selectedTab, setSelectedTab] = useState('detail');
  const pageTopRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  // 탭 클릭 시 scrollIntoView로 해당 섹션으로 이동하기 위한 ref
  const passDataRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver로 스크롤 위치를 감지해 활성 탭을 동기화하는 callback ref setter
  const setPassDataEl = useTabScrollSync({
    onTabChange: setSelectedTab,
    offset: layout.headerHeight + layout.tabBarHeight,
  });

  // passDataRef(scrollIntoView용)와 setPassDataEl(observe용)을 동시에 연결하는 callback ref
  const passDataCallbackRef = useCallback(
    (el: HTMLDivElement | null) => {
      passDataRef.current = el;
      setPassDataEl(el);
    },
    [setPassDataEl],
  );

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    if (value === 'detail')
      detailRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (value === 'pass-data')
      passDataRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isPending =
    isRecruitDetailPending || isPassCoverLettersPending || isPassReviewsPending;

  const isError =
    isRecruitDetailError || isPassCoverLettersError || isPassReviewsError;

  if (isPending) return <div>로딩중...</div>;
  if (isError || !recruitDetail) return <div>에러가 발생했습니다.</div>;

  const {
    company,
    title,
    jobCategory,
    location,
    companyType,
    deadlineLabel,
    recruitmentDeadlineType,
    employmentType,
    recruitmentPeriod,
    responsibilities,
    qualifications,
    preferences,
  } = recruitDetail;

  const passCoverLetterItems = passCoverLetters
    .slice(0, 3)
    .map((item, index) => ({
      id: item.id ?? 0,
      title: item.companyName ?? '',
      body: item.content ?? '',
      tags: MOCK_PASS_COVER_LETTER[index].tags,
    }));

  const passReviewItems = passReviews.slice(0, 3).map((item, index) => ({
    id: item.id ?? 0,
    title: item.title ?? '',
    body: item.content ?? '',
    tags: PASS_REVIEW_TAGS[index],
  }));

  return (
    <>
      <div ref={pageTopRef} className={styles.sectionAnchor} />
      <ImageCarousel
        images={[
          { id: 1, url: imgDetail1, alt: '대표 이미지 1' },
          { id: 2, url: imgDetail2, alt: '대표 이미지 2' },
          { id: 3, url: imgDetail3, alt: '대표 이미지 3' },
        ]}
      />
      <RecruitDetailInfoSection
        companyName={company ?? ''}
        title={title ?? ''}
        jobCategory={jobCategory ?? ''}
        location={location ?? ''}
        companyType={companyType ?? ''}
        deadline={deadlineLabel ?? ''}
        daysLeft={recruitmentDeadlineType === 'UNTIL_FILLED' ? null : 0}
        employmentType={employmentType ?? ''}
      />
      <ChatBanner />

      <div className={styles.stickyTabBar}>
        <TabBar
          tabList={RECRUIT_DETAIL_TABS}
          selectedValue={selectedTab}
          onChange={handleTabChange}
          ariaLabel="채용 상세 탭"
        />
      </div>

      {/* 상세 내용 섹션 */}
      <div ref={detailRef} className={styles.sectionAnchor}>
        <RecruitDetailContent
          recruitmentPeriod={recruitmentPeriod ?? ''}
          responsibilities={[...(responsibilities ?? [])]}
          qualifications={[...(qualifications ?? [])]}
          preferences={[...(preferences ?? [])]}
        />
        <DetailImageSection imageUrl={detailImg4} />
        <StatsCarousel />
      </div>

      {/* 합격 자료 섹션 */}
      <div
        ref={passDataCallbackRef}
        className={`${styles.passDataWrapper} ${styles.sectionAnchor}`}
      >
        <ReviewSection
          sectionTitle="합격 자소서"
          items={passCoverLetterItems}
        />
        <ReviewSection sectionTitle="합격 후기" items={passReviewItems} />
        <AiRecommendSection items={MOCK_AI_RECOMMEND} />
      </div>

      {/* 플로팅 버튼 */}
      <div className={styles.topBtnWrapper}>
        <TopBtn
          onClick={() =>
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </>
  );
};

export default RecruitDetailPage;
