import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import type { FeaturedRecruitmentResponse } from '@apis/__generated__/data-contracts';
import HomeJobCard from '@pages/home/components/homeJobCard/HomeJobCard';
import HomeSectionHeader from '@pages/home/components/homeSectionHeader/HomeSectionHeader';
import type { HomeJobCardData } from '@pages/home/types/homeJobCard';

import * as styles from './HomeJobSection.css';

interface HomeJobSectionProps {
  featuredRecruitments: FeaturedRecruitmentResponse[];
}

const HomeJobSection = ({ featuredRecruitments }: HomeJobSectionProps) => {
  const navigate = useNavigate();
  const [bookmarkedJobIds, setBookmarkedJobIds] = useState<
    Record<number, boolean>
  >({});

  const jobCards = useMemo<HomeJobCardData[]>(() => {
    return featuredRecruitments
      .filter((job) => job.id != null)
      .map((job) => {
        const jobId = job.id ?? 0;
        const isBookmarked = bookmarkedJobIds[jobId] ?? false;

        return {
          id: jobId,
          logoUrl: job.imageUrl ?? '',
          title: job.title ?? '',
          companyName: job.company ?? '',
          dDay: job.dDay ?? '',
          category: job.jobCategory ?? '',
          bookmarkCount: isBookmarked ? 1 : 0,
          isBookmarked,
        };
      });
  }, [featuredRecruitments, bookmarkedJobIds]);

  const handleBookmarkClick = (selectedJobId: number) => {
    setBookmarkedJobIds((prevBookmarkedJobIds) => ({
      ...prevBookmarkedJobIds,
      [selectedJobId]: !prevBookmarkedJobIds[selectedJobId],
    }));
  };

  return (
    <section className={styles.mainContainer}>
      <HomeSectionHeader title="지금 지원 가능한 신입/인턴" to="/recruit" />

      <div className={styles.jobList}>
        {jobCards.map((job, index) => (
          <HomeJobCard
            key={job.id}
            {...job}
            onCardClick={() => {
              if (index !== 0) return;

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
