import SvgIcWrite from '@assets/svg/IcWrite';

import * as styles from './WriteButton.css';

const WriteButton = () => {
  return (
    <button type="button" className={styles.writeButton} aria-label="글쓰기">
      <SvgIcWrite width="2.8rem" height="2.8rem" />
    </button>
  );
};

export default WriteButton;
