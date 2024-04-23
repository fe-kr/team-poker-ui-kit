import { ComponentType } from 'react';

export interface DialogProps {
  header?: ComponentType | string;
  body?: ComponentType | string;
  $minWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  portalTargetNode: string;
}
