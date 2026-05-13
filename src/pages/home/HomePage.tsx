import Chip from '@components/chip/Chip';

const HomePage = () => {
  return (
    <>
      <h1>홈페이지</h1>
      {/* 1. 기본 상태별 비교 (Icon X) */}
      <section style={{ margin: '2rem 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Chip variant="default">텍스트</Chip>
          <Chip variant="filled">텍스트</Chip>
          <Chip variant="outline">텍스트</Chip>
          <Chip variant="outlineFilled">텍스트</Chip>
        </div>
      </section>

      {/* 2. 아이콘 포함 상태별 비교 (Icon O) */}
      <section style={{ margin: '0rem 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Chip variant="default" rightIcon>
            텍스트
          </Chip>
          <Chip variant="filled" rightIcon>
            텍스트
          </Chip>
          <Chip variant="outline" rightIcon>
            텍스트
          </Chip>
          <Chip variant="outlineFilled" rightIcon>
            마케팅
          </Chip>
        </div>
      </section>
    </>
  );
};
export default HomePage;
