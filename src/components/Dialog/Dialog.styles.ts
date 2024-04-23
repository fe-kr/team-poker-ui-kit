import styled from 'styled-components';

export const Backdrop = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
`;

export const Dialog = styled.div<{ $minWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.border.md};
  min-width: ${({ theme, $minWidth }) => theme.breakpoints[$minWidth]}px;
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const DialogBody = styled.div`
  flex: 1 1 0;
  padding: 1rem;
  overflow-y: auto;
`;
