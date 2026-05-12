import {
  angleBracketRecipe,
  type AngleBracketVariants,
} from './AngleBracket.css';
import IcChevronLeftGray700 from '@shared/assets/svg/IcChevronLeftGray700';
import IcChevronLeftGray200 from '@shared/assets/svg/IcChevronLeftGray200';
import IcChevronRightGray700 from '@shared/assets/svg/IcChevronRightGray700';
import IcChevronRightGray200 from '@shared/assets/svg/IcChevronRightGray200';

interface AngleBracketProps extends NonNullable<AngleBracketVariants> {
  direction: 'left' | 'right';
  onClick?: () => void;
}

export default function AngleBracket({
  direction,
  disabled,
  onClick,
}: AngleBracketProps) {
  const Icon =
    direction === 'left'
      ? disabled
        ? IcChevronLeftGray200
        : IcChevronLeftGray700
      : disabled
        ? IcChevronRightGray200
        : IcChevronRightGray700;

  return (
    <button
      onClick={() => !disabled && onClick?.()}
      aria-label={direction === 'left' ? '이전 페이지' : '다음 페이지'}
      aria-disabled={disabled}
      className={angleBracketRecipe({ disabled })}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
