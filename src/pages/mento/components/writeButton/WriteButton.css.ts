import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const writeButton = style({
  position: 'fixed',
  bottom: '7.4rem',
  left: 'calc(50% + 18.75rem - 1.6rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateX(-100%)',
  borderRadius: '50%',
  backgroundColor: vars.color.blue500,
  width: '4.8rem',
  height: '4.8rem',

  selectors: {
    '&:active': {
      backgroundColor: vars.color.blue600,
    },
  },
});
