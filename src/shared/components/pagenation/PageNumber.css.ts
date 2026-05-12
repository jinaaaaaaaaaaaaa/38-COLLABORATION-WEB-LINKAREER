import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

export const pageNumberRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    border: 'none',
    borderRadius: 8,
    background: 'transparent',
    fontFamily: 'inherit',
    fontSize: 14,
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color 0.15s',
    selectors: {
      '&:focus-visible': {
        outline: '2px solid #378ADD',
        outlineOffset: 2,
      },
    },
  },

  variants: {
    active: {
      true: {
        color: '#378ADD',
        fontWeight: 500,
        cursor: 'default',
      },
      false: {
        color: '#AAAAAA',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

export type PageNumberVariants = RecipeVariants<typeof pageNumberRecipe>;
