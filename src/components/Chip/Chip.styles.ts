import styled from 'styled-components';
import { StyledSize } from 'types/ui';

export const Chip = styled.span<{ $color: string; $size: StyledSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme, $size }) => theme.shape.ratio[$size] * 2}rem;
  width: ${({ theme, $size }) => theme.shape.ratio[$size] * 2}rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.border.rounded};
  background-color: ${({ $color }) => $color};
`;
