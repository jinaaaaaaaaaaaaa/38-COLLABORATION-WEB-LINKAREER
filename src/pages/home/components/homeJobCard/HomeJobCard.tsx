import IcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import IcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';

import * as styles from './HomeJobCard.css';

interface HomeJobCardProps {
  logoUrl: string;
  title: string;
  companyName: string;
  dDay: string;
  category: string;
  bookmarkCount: number;
  isBookmarked: boolean;
}

const HomeJobCard = ({
  logoUrl,
  title,
  companyName,
  dDay,
  category,
  bookmarkCount,
  isBookmarked,
}: HomeJobCardProps) => {
  const BookmarkIcon = isBookmarked ? IcBookmarkFilled : IcBookmarkGray400;

  return (
    <article className={styles.card}>
      <img src={logoUrl} alt={`${companyName} 로고`} />

      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.companyName}>{companyName}</p>

        <div className={styles.bookmarkBox}>
          <span className={styles.dDay}>{dDay}</span>
          <span>·</span>
          <span>{category}</span>
        </div>
      </div>

      <button type="button" className={styles.bookmarkBox}>
        <BookmarkIcon className={styles.bookmarkIcon} />
        <span className={styles.bookmarkText}>{bookmarkCount}</span>
      </button>
    </article>
  );
};

export default HomeJobCard;
