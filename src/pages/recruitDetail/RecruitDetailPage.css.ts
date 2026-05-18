import { style } from '@vanilla-extract/css';

export const topBtnWrapper = style({
  position: 'fixed',
  zIndex: 100,
  right: 'calc((100vw - 37.5rem) / 2 + 1.6rem)',
  bottom: '8.8rem',
});
