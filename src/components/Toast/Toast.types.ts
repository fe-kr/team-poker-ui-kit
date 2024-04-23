import { MouseEvent } from 'react';
import { Toast } from '@hooks/useToastsStore';

export interface ToastProps extends Toast {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}
