import { pageNumberRecipe, type PageNumberVariants } from './PageNumber.css';

interface PageNumberProps extends NonNullable<PageNumberVariants> {
  page: number;
  onClick?: () => void;
}

export default function PageNumber({ page, active, onClick }: PageNumberProps) {
  return (
    <button
      onClick={() => !active && onClick?.()}
      aria-label={`${page}페이지`}
      aria-current={active ? 'page' : undefined}
      className={pageNumberRecipe({ active })}
    >
      {page}
    </button>
  );
}
