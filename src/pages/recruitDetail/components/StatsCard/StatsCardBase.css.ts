import { style } from '@vanilla-extract/css';
import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const container = style({
  borderRadius: '1.2rem',
  border: `1px solid ${color.gray100}`,
  backgroundColor: color.white,
  padding: '2rem',
  width: '34.3rem',
  minHeight: '24.9rem',
});
export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '1.6rem',
});

export const title = style({
  ...typography.body_b_16,
  color: color.gray900,
});
