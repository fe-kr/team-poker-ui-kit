import CloseIcon from '@assets/close.svg?react';
import { CloseButton, Toast as StyledToast } from './Toast.styles';
import { StyledColor } from '@constants/ui';
import { FC } from 'react';
import { ToastProps } from './Toast.types';

const Toast: FC<ToastProps> = ({ message, id, color, onClose }) => {
  return (
    <StyledToast $color={color} role="alert">
      {message}

      <CloseButton data-id={id} onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </StyledToast>
  );
};

Toast.defaultProps = {
  color: StyledColor.Primary,
};

export default Toast;
