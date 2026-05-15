import { style } from '@vanilla-extract/css';
import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const leftContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const rank = style({
  ...typography.body_m_14,
  color: color.blue300,
  width: '1.2rem',
  textAlign: 'center',
});

export const label = style({
  ...typography.body_m_14,
  color: color.gray700,
});

export const percent = style({
  ...typography.body_m_14,
  color: color.blue500,
});
