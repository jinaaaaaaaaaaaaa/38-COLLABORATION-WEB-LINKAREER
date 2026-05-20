import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';
import { zIndex } from '@styles/tokens/zIndex';

export const container = style({
  position: 'relative',
});

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  cursor: 'pointer',
  padding: '0.4rem',
  color: vars.color.gray900,
  ...typography.caption_m_12,
});

export const options = style({
  position: 'absolute',
  zIndex: zIndex.dropdown,
  top: 'calc(100% + 0.4rem)',
  right: 0,
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: '1.2rem',
  boxShadow: '0 2px 4px 0 rgba(26, 29, 32, 0.06)',
  backgroundColor: vars.color.white,
  padding: '0.4rem 0',
  width: '13.5rem',
  whiteSpace: 'nowrap',
});

export const optionItem = style({
  display: 'block',
  cursor: 'pointer',
  padding: '0.8rem 1.6rem',
  width: '100%',
  textAlign: 'left',
  ...typography.body_r_14,
  color: vars.color.gray900,

  selectors: {
    '&[data-selected="true"]': {
      color: vars.color.blue500,
      ...typography.body_m_14,
    },
  },
});
