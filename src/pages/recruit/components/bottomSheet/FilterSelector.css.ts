import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const tabContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const tab = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    backgroundColor: vars.color.gray100,
    padding: '1.6rem 0 1.6rem 2rem',
    width: '12.3rem',
    ...typography.body_m_14,
    height: '5.3rem',
    textAlign: 'left',
    color: vars.color.gray700,
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.color.white,
        ...typography.body_b_14,
        color: vars.color.blue500,
      },
    },
  },
});

export const count = style({
  flexShrink: '0',
  borderRadius: '50%',
  backgroundColor: vars.color.blue500,
  width: '1.6rem',
  height: '1.6rem',
  textAlign: 'center',
  color: vars.color.white,
  ...typography.caption_m_10,
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '21.2rem',
  overflowY: 'auto',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const option = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',

    backgroundColor: vars.color.white,
    ...typography.body_m_14,
    width: '25.2rem',
    height: '5.3rem',
    textAlign: 'left',
    color: vars.color.gray700,
  },
  variants: {
    isSelected: {
      true: {
        ...typography.body_b_14,
        padding: '1.6rem 0 1.6rem 2rem',
        color: vars.color.blue500,
      },
      false: { padding: '1.6rem 0 1.6rem 5.2rem' },
    },
  },
});
