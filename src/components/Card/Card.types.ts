import { ReactNode } from 'react';
import { StyledSize } from 'types/ui';

export interface CardProps {
  $size: StyledSize;
  $isFlipSide: boolean;
  children: ReactNode;
}
