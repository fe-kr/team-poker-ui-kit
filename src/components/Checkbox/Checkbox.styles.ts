import styled from 'styled-components';
import { CheckboxProps } from './Checkbox.types';

export const Label = styled.label`
  position: relative;
  cursor: pointer;
`;

export const Input = styled.input<Omit<CheckboxProps, 'label'>>`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  & ~ .checkbox-custom {
    position: absolute;
    top: 0;
    left: 0;
    height: ${({ theme, $size }) => theme.shape.ratio[$size]}rem;
    width: ${({ theme, $size }) => theme.shape.ratio[$size]}rem;
    background-color: transparent;
    border: ${({ theme, $color }) => theme.palette[$color]?.main} solid;
    border-radius: ${({ theme }) => theme.shape.border.sm};
    transition: all ${({ theme }) => theme.transitions.duration.standard}ms ease-out;

    &::after {
      position: absolute;
      content: '';
      height: 0;
      width: 0;
      border: ${({ theme, $color }) => theme.palette[$color]?.main} solid;
      -ms-transform: rotate(0deg) scale(0);
      transform: rotate(0deg) scale(0);
      opacity: 1;
    }
  }

  &:checked ~ .checkbox-custom {
    background-color: ${({ theme, $color }) => theme.palette[$color]?.main};
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }

  &:checked ~ .checkbox-custom::after {
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    width: ${({ theme, $size }) => theme.shape.ratio[$size] / 4}rem;
    height: ${({ theme, $size }) => theme.shape.ratio[$size] / 2}rem;
    top: ${({ theme, $size }) => theme.shape.ratio[$size] / 8}rem;
    left: ${({ theme, $size }) => theme.shape.ratio[$size] / 3}rem;
    background-color: transparent;
    border: ${({ theme }) => theme.palette.common.white} solid;
    border-width: ${({ theme, $size }) =>
      `0 ${theme.shape.ratio[$size] / 8}rem ${theme.shape.ratio[$size] / 8}rem 0`};
    border-radius: 0;
  }

  & ~ .checkbox-label {
    margin-left: ${({ theme, $size }) => theme.shape.ratio[$size] + 1}rem;
  }
`;
