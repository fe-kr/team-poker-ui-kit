import React, { FC, MouseEvent, ReactNode } from 'react';
import { StyledColor, StyledSize, StyledVariant } from '@constants/ui';
import { Button as StyledButton } from './Button.styles';

export interface ButtonProps {
  $variant: 'standard' | 'outlined';
  $color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  $size: 'small' | 'medium' | 'large';
  $isRounded: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = props => <StyledButton {...props} />;

Button.defaultProps = {
  $variant: StyledVariant.Standard,
  $color: StyledColor.Primary,
  $size: StyledSize.Medium,
  $isRounded: false,
};

export default Button;
