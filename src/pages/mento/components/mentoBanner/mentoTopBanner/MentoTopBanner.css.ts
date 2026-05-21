import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '4.8rem',
});

export const content = style({
  display: 'block',
  flexShrink: 0,
  backgroundColor: vars.color.gray100,
  objectFit: 'cover',
  width: '28.7rem',
  height: '100%',
});
