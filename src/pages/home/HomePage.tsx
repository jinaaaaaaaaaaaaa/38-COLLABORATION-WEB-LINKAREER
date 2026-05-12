import AngleBracket from '@components/pagenation/AngleBracket';
import Pagination from '@components/pagenation/Pagenation';
import PageNumber from '@components/pagenation/PageNumber';
import { useState } from 'react';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h1>홈페이지</h1>
      // 단독 사용
      <AngleBracket
        direction="left"
        disabled={false}
        onClick={() => console.log('prev')}
      />
      <AngleBracket direction="right" disabled={true} />
      <PageNumber page={1} active={true} />
      <PageNumber
        page={2}
        active={false}
        onClick={() => console.log('page 2')}
      />
      // Pagination 조립 사용
      <Pagination
        currentPage={currentPage}
        totalPages={30}
        onPageChange={setCurrentPage}
      />
      // maxVisible 커스텀 (기본값 5)
      <Pagination
        currentPage={currentPage}
        totalPages={30}
        onPageChange={setCurrentPage}
        maxVisible={3}
      />
    </>
  );
};
export default HomePage;
