import {
  StyledVariantList,
  StyledColorList,
  StyledPositionList,
  StyledSizeList,
} from '@constants/ui';

export type StyledVariant = (typeof StyledVariantList)[number];

export type StyledColor = (typeof StyledColorList)[number];

export type StyledPosition = (typeof StyledPositionList)[number];

export type StyledSize = (typeof StyledSizeList)[number];
