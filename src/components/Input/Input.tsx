import { FC } from 'react';
import { InputProps } from './Input.types';
import { StyledColor, StyledSize } from '@constants/ui';
import { ErrorMessage, InputContainer, Input as StyledInput } from './Input.styles';

const Input: FC<InputProps> = ({ error, startIcon, endIcon, ...props }) => (
  <InputContainer
    $hasError={!!error}
    $size={props.$size}
    $hasStartIcon={!!startIcon}
    $hasEndIcon={!!endIcon}
  >
    {startIcon && <div className="startIcon">{startIcon}</div>}

    <StyledInput {...props} />

    {endIcon && <div className="endIcon">{endIcon}</div>}

    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </InputContainer>
);

Input.defaultProps = {
  $color: StyledColor.Primary,
  $size: StyledSize.Medium,
};

export default Input;
