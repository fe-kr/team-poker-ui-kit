import styled from 'styled-components';
import { StyledColor } from 'types/ui';

export const Toast = styled.div<{ $color: StyledColor }>`
  position: relative;
  background-color: ${({ theme, $color }) => theme.palette[$color].main};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.shape.border.sm};
  color: ${({ theme }) => theme.palette.common.white};
  opacity: 0.95;

  &:hover {
    opacity: 1;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0;
  line-height: 1;
  height: 1rem;
  width: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;

  & > svg {
    height: 1rem;
    width: 1rem;
    fill: currentColor;
  }
`;
