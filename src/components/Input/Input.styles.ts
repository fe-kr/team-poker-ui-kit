import styled, { css } from 'styled-components';
import { InputContainerProps, InputProps } from './Input.types';

export const Input = styled.input<InputProps>`
  background: ${({ theme }) => theme.palette.gray.light};
  padding: ${({ theme, $size }) => theme.shape.ratio[$size]}rem;
  outline: none;
  flex-grow: 1;
  color: ${({ theme }) => theme.palette.common.black};
  border-radius: ${({ theme }) => theme.shape.border.sm};
  border-color: ${({ theme, $color }) => theme.palette[$color]?.main};
  border-style: solid;
  border-width: 2px;

  &:focus {
    border-color: ${({ theme, $color }) => theme.palette[$color]?.dark};
  }
  &::placeholder {
    color: ${({ theme, $color }) => theme.palette[$color]?.main};
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  & > input {
    padding-left: ${({ theme, $hasStartIcon, $size }) =>
      ($hasStartIcon ? 3 : 1) * theme.shape.ratio[$size]}rem;
    padding-right: ${({ theme, $hasEndIcon, $size }) =>
      ($hasEndIcon ? 3 : 1) * theme.shape.ratio[$size]}rem;
    ${({ theme, $hasError }) =>
      $hasError &&
      css`
        border-color: ${theme.palette.error.main} !important; // TODO: remove important
      `};
  }

  & > .startIcon {
    position: absolute;
    transform: translate(50%, 50%);
    left: 0;
  }

  & > .endIcon {
    position: absolute;
    transform: translate(-50%, 50%);
    right: 0;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  position: absolute;
  bottom: 0;
  transform: translate(0, 100%);
  color: ${({ theme }) => theme.palette.error.main};
`;
