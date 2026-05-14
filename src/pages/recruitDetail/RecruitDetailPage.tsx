import ImageCarousel from './components/imageCarousel/ImageCarousel';
import detailImg1 from '@pages/recruitDetail/assets/detail_thumbnail_img1.png';
import detailImg2 from '@pages/recruitDetail/assets/detail_thumbnail_img2.png';
import detailImg3 from '@pages/recruitDetail/assets/detail_thumbnail_img3.png';

const RecruitDetailPage = () => {
  return (
    <>
      <h1>채용공고 상세 페이지</h1>
      <ImageCarousel
        images={[
          { id: 1, url: detailImg1, alt: '대표 이미지 1' },
          { id: 2, url: detailImg2, alt: '대표 이미지 2' },
          { id: 3, url: detailImg3, alt: '대표 이미지 3' },
        ]}
      />
    </>
  );
};

export default RecruitDetailPage;
