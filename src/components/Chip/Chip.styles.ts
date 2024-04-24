import styled from 'styled-components';

export const Chip = styled.span<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.border.rounded};
  background-color: ${({ $color }) => $color};
`;
