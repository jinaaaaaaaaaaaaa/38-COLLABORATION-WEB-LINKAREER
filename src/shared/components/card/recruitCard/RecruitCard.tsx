import { useState } from 'react';

import SvgIcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import SvgIcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';
import Tag from '@components/tag/Tag';
import type { RecruitListItem } from '@shared/types/recruitCard';

import * as styles from './RecruitCard.css';

export interface RecruitCardProps {
  recrutCardItem: RecruitListItem;
  onCardClick?: (id: number) => void;
}

const RecruitCard = ({ recrutCardItem, onCardClick }: RecruitCardProps) => {
  const [isBookmarked, setIsBookMarked] = useState(false);

  const handleCardClick = () => {
    onCardClick?.(recrutCardItem.id);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookMarked((prev) => !prev);
  };

  return (
    <div
      className={styles.container}
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className={styles.imgContainer}>
        {recrutCardItem.imageUrl && (
          <img
            src={recrutCardItem.imageUrl}
            alt={
              recrutCardItem.company
                ? `${recrutCardItem.company} 로고`
                : '회사 로고'
            }
          />
        )}
      </div>

      <div className={styles.contentContainer}>
        <header className={styles.topContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{recrutCardItem.title}</h3>
            <p className={styles.company}>{recrutCardItem.company}</p>
          </div>
          <button
            type="button"
            aria-pressed={isBookmarked}
            aria-label={isBookmarked ? '북마크 해제' : '북마크 저장'}
            className={styles.icContainer}
            onClick={handleBookmarkClick}
          >
            {isBookmarked ? (
              <SvgIcBookmarkFilled width={'1.6rem'} height={'1.6rem'} />
            ) : (
              <SvgIcBookmarkGray400 width={'1.6rem'} height={'1.6rem'} />
            )}
          </button>
        </header>

        <div className={styles.bottomContainer}>
          <div className={styles.tagContainer}>
            {recrutCardItem.employmentType && (
              <Tag
                text={recrutCardItem.employmentType}
                color="gray"
                size="small"
              />
            )}
            {recrutCardItem.location && (
              <Tag text={recrutCardItem.location} color="blue" size="small" />
            )}
          </div>
          <p className={styles.deadline}>{recrutCardItem.deadlineLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default RecruitCard;
