import { FC } from 'react';
import { StyledColor, StyledSize, StyledVariant } from '@constants/ui';
import { Button as StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = props => <StyledButton {...props} />;

Button.defaultProps = {
  $variant: StyledVariant.Standard,
  $color: StyledColor.Primary,
  $size: StyledSize.Medium,
  $isRounded: false,
};

export default Button;
