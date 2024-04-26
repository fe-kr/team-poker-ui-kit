import styled from 'styled-components';
import { CardProps } from './Card.types';

export const Card = styled.span<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme, $size }) => theme.shape.ratio[$size] * 2}rem;
  height: ${({ theme, $size }) => theme.shape.ratio[$size] * 4}rem;
  border: 1px solid grey;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.shape.border.sm};
  background: ${({ theme, $isFlipSide }) =>
    $isFlipSide
      ? `-webkit-gradient(radial, center center, 20, center center, 80, from(${theme.palette.primary.light}), color-stop(0.4, ${theme.palette.primary.main}), to(${theme.palette.primary.dark}))`
      : theme.palette.gray.light};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
