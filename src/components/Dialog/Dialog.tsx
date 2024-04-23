import useDialogStore from '@hooks/useDialogStore';
import { Backdrop, Dialog as StyledDialog, DialogHeader, DialogBody } from './Dialog.styles';
import Portal from '../Portal';
import { FC } from 'react';
import { DialogProps } from './Dialog.types';

const Dialog: FC<DialogProps> = ({ $minWidth, portalTargetNode }) => {
  const { dialogParams, closeDialog } = useDialogStore();

  if (!dialogParams?.header && !dialogParams?.body) {
    return null;
  }

  return (
    <Portal domNode={portalTargetNode}>
      <Backdrop onClick={closeDialog} />
      <StyledDialog $minWidth={$minWidth!}>
        {dialogParams.header && <DialogHeader as={dialogParams.header} />}
        {dialogParams.body && <DialogBody as={dialogParams.body} />}
      </StyledDialog>
    </Portal>
  );
};

Dialog.defaultProps = {
  $minWidth: 'sm',
  portalTargetNode: 'body',
};

export default Dialog;
