import type { ReactNode } from 'react';

import * as styles from './Button.css';

interface Props {
  color?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'reg' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  color = 'filled',
  size = 'lg',
  children,
  onClick,
  className,
}: Props) => {
  return (
    <button
      type="button"
      className={`${styles.button({ color, size })}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
