import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  error?: string;
  disabled?: boolean;
  $color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  $size: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputContainerProps {
  $size: 'small' | 'medium' | 'large';
  $hasStartIcon: boolean;
  $hasEndIcon: boolean;
  $hasError: boolean;
}
