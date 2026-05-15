import { Link } from 'react-router';

import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';

import * as styles from './CarouselCard.css';

interface CarouselCardProps {
  to: string;
  totalCardCount: number;
  currentCardNumber: number;
  companyName: string;
  companySize: string;
  daysLeft: number;
  thumbnailUrl: string;
  thumbnailAlt: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
  announcementTitle: string;
  announcementDeadline: string;
  announcementCategory: string;
}

const CarouselCard = ({
  to,
  totalCardCount,
  currentCardNumber,
  companyName,
  companySize,
  daysLeft,
  thumbnailUrl,
  thumbnailAlt,
  companyLogoUrl,
  companyLogoAlt,
  announcementTitle,
  announcementDeadline,
  announcementCategory,
}: CarouselCardProps) => {
  return (
    <article className={styles.container}>
      <Link className={styles.card} to={to} aria-label={announcementTitle}>
        <img
          className={styles.thumbnail}
          src={thumbnailUrl}
          alt={thumbnailAlt}
        />
        <div className={styles.fractionalIndicator}>
          <Tag
            size="medium"
            color="black"
            text={`${currentCardNumber}/${totalCardCount}`}
          />
        </div>
        <div className={styles.ddayIndicator}>
          <DdayTag size="medium" daysLeft={daysLeft} />
        </div>
        <div className={styles.overlay}>
          <div className={styles.companyInfoContainer}>
            <img
              className={styles.companyLogo}
              src={companyLogoUrl}
              alt={companyLogoAlt}
            />
            <div className={styles.companyInfoText}>
              <h2 className={styles.companyName}>{companyName}</h2>
              <p className={styles.companySize}>{companySize}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link className={styles.announcementInfo} to={to}>
        <h2 className={styles.announcementTitle}>{announcementTitle}</h2>
        <p className={styles.announcementMeta}>
          {announcementDeadline} · {announcementCategory}
        </p>
      </Link>
    </article>
  );
};

export default CarouselCard;
