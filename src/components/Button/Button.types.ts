import { MouseEvent, ReactNode } from 'react';
import { StyledVariant, StyledSize, StyledColor } from 'types/ui';

export interface ButtonProps {
  $variant: StyledVariant;
  $color: StyledColor;
  $size: StyledSize;
  $isRounded?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
