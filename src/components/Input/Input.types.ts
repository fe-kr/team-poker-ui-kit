import { ChangeEvent, ReactNode } from 'react';
import { StyledSize, StyledColor } from 'types/ui';

export interface InputProps {
  error?: string;
  disabled?: boolean;
  $color: StyledColor;
  $size: StyledSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputContainerProps {
  $size: StyledSize;
  $hasStartIcon: boolean;
  $hasEndIcon: boolean;
  $hasError: boolean;
}
