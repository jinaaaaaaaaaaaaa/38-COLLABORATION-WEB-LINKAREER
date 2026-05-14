import SvgIcRefresh from '@assets/svg/IcRefresh';
import SvgIcXGray900 from '@assets/svg/IcXGray900';
import BottomActionBar from '@components/bottomActionBar/BottomActionBar';

import FilterSelector from './FilterSelector';

import * as styles from './FilterBottomSheet.css';

const CONTENT_NUMBER = '120,316';

const FilterBottomSheet = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <h2 className={styles.title}>검색 필터</h2>
        <button type="button" className={styles.closeBtn}>
          <SvgIcXGray900 width={'2.4rem'} height={'2.4rem'} />
        </button>
      </header>

      <FilterSelector />

      <BottomActionBar
        icon={<SvgIcRefresh width={'2rem'} height={'2rem'} />}
        iconAriaLabel="새로고침 버튼"
        label={`${CONTENT_NUMBER}개 공고보기`}
      />
    </div>
  );
};

export default FilterBottomSheet;
