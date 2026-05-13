import { typography } from '@styles/tokens/typography';
import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const mainContainer = style({
  display: 'flex',
  width: '100%',
  height: '5.8rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${vars.color.gray200}`,
  borderBottom: `1px solid ${vars.color.gray200}`,
  background: vars.color.white,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.6rem',
    flex: '1 0 0',
  },
  variants: {
    active: {
      true: {
        color: vars.color.gray800,
        ...typography.caption_m_12,
      },
      false: {
        color: vars.color.gray600,
        ...typography.caption_r_12,
      },
    },
  },
});
