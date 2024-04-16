import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  $variant?: 'standard' | 'outlined';
  $color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  $size?: 'small' | 'medium' | 'large';
  $isRounded?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
