import { style } from '@vanilla-extract/css';
import { color } from '@styles/tokens/color';
import { typography } from '@styles/tokens/typography';

export const chartArea = style({
  display: 'flex',
  flexDirection: 'column',
});

export const percentRow = style({
  display: 'flex',
  gap: '1.6rem',
});

export const activePercent = style({
  ...typography.caption_r_12,
  color: color.blue500,
});

export const inactivePercent = style({
  ...typography.caption_r_12,
  color: color.gray500,
});

export const barList = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  height: '15rem',
});

export const barItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.4rem',
  height: '100%',
});

export const barTrack = style({
  position: 'relative',
  borderRadius: '9999px',
  backgroundColor: color.gray100,
  width: '1.5rem',
  height: '11.9rem',
  overflow: 'hidden',
});

export const barFill = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: '9999px',
  backgroundColor: color.blue500,
});

export const barFillInactive = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: '9999px',
  backgroundColor: color.gray200,
});

export const ageLabel = style({
  ...typography.caption_r_12,
  color: color.gray500,
  textAlign: 'center',
  whiteSpace: 'nowrap',
});
