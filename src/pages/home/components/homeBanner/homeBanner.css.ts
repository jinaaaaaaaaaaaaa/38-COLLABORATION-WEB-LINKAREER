import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';

export const bannerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderBottom: color.gray300,
  background: color.gray100,
  padding: '1.6rem',
  width: '100%',
  height: '11.2rem',
});

export const bannerImage = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'flex-end',
  alignSelf: 'stretch',
  justifyContent: 'flex-end',
  borderRadius: '0.8rem',
  backgroundColor: 'lightgray',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  width: '100%',
  height: '100%',
});
