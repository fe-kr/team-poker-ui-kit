import { create } from 'zustand';
import { ComponentType } from 'react';

export interface Dialog {
  header?: ComponentType | string;
  body?: ComponentType | string;
  $minWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  portalTargetNode: string;
}

interface DialogState {
  dialogParams: Dialog | null;
  openDialog: (dialogParams: Dialog) => void;
  closeDialog: () => void;
}

export default create<DialogState>()(set => ({
  dialogParams: null,
  openDialog: dialogParams => set(state => ({ ...state, dialogParams })),
  closeDialog: () => set(state => ({ ...state, dialogParams: null })),
}));
