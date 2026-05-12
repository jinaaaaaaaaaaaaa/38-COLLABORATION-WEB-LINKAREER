import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

export const angleBracketRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    border: 'none',
    borderRadius: 8,
    background: 'transparent',
    cursor: 'pointer',
    selectors: {
      '&:focus-visible': {
        outline: '2px solid #378ADD',
        outlineOffset: 2,
      },
    },
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      false: {},
    },
  },

  defaultVariants: {
    disabled: false,
  },
});

export type AngleBracketVariants = RecipeVariants<typeof angleBracketRecipe>;
