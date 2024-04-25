import { create } from 'zustand';
import { generateId } from '@utils/string';
import { ReactNode } from 'react';
import { StyledColor } from 'types/ui';

export interface Toast {
  message: ReactNode;
  color: StyledColor;
  id?: string;
}

interface ToastsState {
  toasts: Toast[];
  duration: number | null;
  setDuration: (duration: number) => void;
  addToast: (toast: Toast) => void;
  deleteToast: (id: string) => void;
}

export default create<ToastsState>()((set, get) => ({
  toasts: [],
  duration: null,
  setDuration: duration => {
    set(state => ({ ...state, duration }));
  },
  addToast: toast => {
    const id = generateId();
    const { duration, deleteToast } = get();

    if (duration) {
      setTimeout(() => deleteToast(id), duration);
    }

    set(state => ({ ...state, toasts: [...state.toasts, { ...toast, id }] }));
  },
  deleteToast: id => {
    set(state => ({ ...state, toasts: state.toasts.filter(item => item.id !== id) }));
  },
}));
