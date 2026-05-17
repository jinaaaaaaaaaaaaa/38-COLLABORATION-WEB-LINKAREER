import { style } from '@vanilla-extract/css';

import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '0 1.6rem 2.4rem',
});

export const sectionTitle = style({
  ...typography.title_b_18,
  color: color.gray900,
});

export const imageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const imageCollapsed = style({
  maxHeight: '12rem',
  overflow: 'hidden',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
});

export const expandButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${color.gray200}`,
  borderRadius: '0.8rem',
  backgroundColor: color.white,
  cursor: 'pointer',
  padding: '1.2rem',
  width: '100%',
  ...typography.body_m_14,
  color: color.gray700,
});
