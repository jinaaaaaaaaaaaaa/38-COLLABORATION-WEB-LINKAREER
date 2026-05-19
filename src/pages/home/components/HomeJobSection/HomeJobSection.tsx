import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useGetHomeFeaturedRecruitmentsQuery } from '@pages/home/apis/useHomeFeaturedRecruitmentsQuery';
import HomeJobCard from '@pages/home/components/homeJobCard/HomeJobCard';
import HomeSectionHeader from '@pages/home/components/homeSectionHeader/HomeSectionHeader';
import type { HomeJobCardData } from '@pages/home/types/homeJobCard';

import * as styles from './HomeJobSection.css';

const HomeJobSection = () => {
  const navigate = useNavigate();
  const { data: featuredRecruitments } = useGetHomeFeaturedRecruitmentsQuery();
  const [jobCards, setJobCards] = useState<HomeJobCardData[]>([]);

  useEffect(() => {
    if (!featuredRecruitments) return;

    const mappedJobCards = featuredRecruitments
      .filter((job) => job.id != null)
      .map((job) => ({
        id: job.id,
        logoUrl: job.imageUrl ?? '',
        title: job.title ?? '',
        companyName: job.company ?? '',
        dDay: job.dDay ?? '',
        category: job.jobCategory ?? '',
        bookmarkCount: 0,
        isBookmarked: false,
      }));

    setJobCards(mappedJobCards);
  }, [featuredRecruitments]);

  const handleBookmarkClick = (selectedJobId: number) => {
    setJobCards((prevJobCards) =>
      prevJobCards.map((job) => {
        if (job.id !== selectedJobId) return job;

        return {
          ...job,
          isBookmarked: !job.isBookmarked,
          bookmarkCount: job.isBookmarked
            ? job.bookmarkCount - 1
            : job.bookmarkCount + 1,
        };
      }),
    );
  };

  return (
    <section className={styles.mainContainer}>
      <HomeSectionHeader title="지금 지원 가능한 신입/인턴" to="/recruit" />

      <div className={styles.jobList}>
        {jobCards.map((job) => (
          <HomeJobCard
            key={job.id}
            {...job}
            onCardClick={() => {
              void navigate('/recruit/detail');
            }}
            onBookmarkClick={() => {
              handleBookmarkClick(job.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeJobSection;
