import styled, { css } from 'styled-components';
import { StyledPosition } from '@constants/ui';
import { StyledPosition as StyledPositionType } from 'types/ui';

export const Container = styled.div<{ $position: StyledPositionType }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
  max-height: 100vh;
  overflow: hidden auto;

  ${({ $position }) => {
    switch ($position) {
      case StyledPosition.BottomLeft:
        return css`
          bottom: 0;
          left: 0;
        `;

      case StyledPosition.BottomRight:
        return css`
          bottom: 0;
          right: 0;
        `;

      case StyledPosition.TopLeft:
        return css`
          top: 0;
          left: 0;
        `;

      case StyledPosition.TopRight:
        return css`
          top: 0;
          right: 0;
        `;
    }
  }};
`;
