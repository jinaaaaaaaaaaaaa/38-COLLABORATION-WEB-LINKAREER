import type { ReactNode } from 'react';

import * as styles from './Pagenation.css';

interface Props {
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Pagenation = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Pagenation;
