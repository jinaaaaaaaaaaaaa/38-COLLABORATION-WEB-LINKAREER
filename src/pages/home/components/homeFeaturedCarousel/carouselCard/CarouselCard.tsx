import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';

import * as styles from './CarouselCard.css';

interface CarouselCardProps {
  totalCardCount: number;
  currentCardNumber: number;
  companyName: string;
  companySize: string;
  daysLeft: number;
  thumbnailUrl: string;
  thumbnailAlt: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
}

const CarouselCard = ({
  totalCardCount,
  currentCardNumber,
  companyName,
  companySize,
  daysLeft,
  thumbnailUrl,
  thumbnailAlt,
  companyLogoUrl,
  companyLogoAlt,
}: CarouselCardProps) => {
  return (
    <article className={styles.container}>
      <img className={styles.thumbnail} src={thumbnailUrl} alt={thumbnailAlt} />
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
    </article>
  );
};

export default CarouselCard;
