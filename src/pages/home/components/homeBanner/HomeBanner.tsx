import * as style from './homeBanner.css';

interface HomeBannerProps {
  imgUrl: string;
  imgAlt: string;
}

const HomeBanner = ({ imgUrl, imgAlt }: HomeBannerProps) => {
  return (
    <div className={style.bannerContainer}>
      <img className={style.bannerImage} src={imgUrl} alt={imgAlt} />
    </div>
  );
};

export default HomeBanner;
