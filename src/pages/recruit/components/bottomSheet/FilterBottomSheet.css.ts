import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1.2rem 1.2rem 0 0',
  backgroundColor: vars.color.white,
  width: '100%',
  minHeight: '35rem',
  maxHeight: '43.8rem',
});

export const closeBtn = style({
  padding: '0',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px soild ${vars.color.gray100}`,
  padding: '2rem',
});

export const title = style({
  ...typography.body_b_16,
  color: vars.color.gray900,
});
