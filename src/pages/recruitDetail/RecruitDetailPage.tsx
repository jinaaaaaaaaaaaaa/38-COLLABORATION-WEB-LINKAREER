import {
  STATS_SCHOOL_DATA,
  STATS_MAJOR_DATA,
  STATS_JOB_DATA,
} from './constants/statsData';

import StatsRankCard from './components/StatsCard/StatsRankCard';
import StatsAgeCard from './components/StatsCard/StatsAgeCard';

const RecruitDetailPage = () => {
  return (
    <>
      <h1>채용공고 상세 페이지</h1>
      <StatsRankCard type="school" items={STATS_SCHOOL_DATA} />
      <StatsRankCard type="major" items={STATS_MAJOR_DATA} />
      <StatsRankCard type="job" items={STATS_JOB_DATA} />
      <StatsAgeCard />
    </>
  );
};

export default RecruitDetailPage;
