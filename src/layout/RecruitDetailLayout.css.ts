import { style } from '@vanilla-extract/css';

export const topBtnWrapper = style({
  position: 'fixed',
  zIndex: 100,
  right: '1.6rem',
  bottom: '8rem',
});

export const bottomBarWrapper = style({
  position: 'fixed',
  zIndex: 100,
  right: 0,
  bottom: 0,
  left: 0,
});
