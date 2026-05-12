import { style } from '@vanilla-extract/css';
import { color } from '@styles/tokens/color';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',
  padding: '1.2rem 1.6rem',
  borderTop: `1px solid ${color.gray200}`,
});

export const iconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  cursor: 'pointer',
  width: '4.8rem',
  height: '4.8rem',
  border: `1px solid ${color.gray200}`,
  borderRadius: '0.8rem',
});
