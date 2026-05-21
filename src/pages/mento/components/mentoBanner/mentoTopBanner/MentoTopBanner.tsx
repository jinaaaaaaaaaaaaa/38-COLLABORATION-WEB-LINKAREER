import * as styles from './MentoTopBanner.css';

interface MentoTopBannerProps {
  imgSrc: string;
}

const MentoTopBanner = ({ imgSrc }: MentoTopBannerProps) => {
  return (
    <aside className={styles.container} aria-label="광고">
      <img
        src={imgSrc}
        alt="광고 이미지"
        className={styles.content}
        width={287}
        height={48}
      />
    </aside>
  );
};

export default MentoTopBanner;
