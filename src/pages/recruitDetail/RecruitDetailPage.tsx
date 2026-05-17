import detailImg1 from '@assets/images/detail_thumbnail_img1.webp';
import detailImg2 from '@assets/images/detail_thumbnail_img2.webp';
import detailImg3 from '@assets/images/detail_thumbnail_img3.webp';

import ChatBanner from './components/chatBanner/ChatBanner';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import RecruitDetailInfoSection from './components/recruitDetailInfoSection/RecruitDetailInfoSection';

const RecruitDetailPage = () => {
  return (
    <>
      <ImageCarousel
        images={[
          { id: 1, url: detailImg1, alt: '대표 이미지 1' },
          { id: 2, url: detailImg2, alt: '대표 이미지 2' },
          { id: 3, url: detailImg3, alt: '대표 이미지 3' },
        ]}
      />
      <RecruitDetailInfoSection
        companyName="(주)메디쿼터스"
        title="[메디쿼터스] [와이엠헬스케어] 마케터 (인턴)"
        jobCategory="마케팅·광고·홍보 전체"
        location="서울 강남구"
        companyType="중소기업"
        deadline="~05.11(월)"
        daysLeft={0}
        employmentType="체험형 인턴"
      />
      <ChatBanner />
    </>
  );
};

export default RecruitDetailPage;
