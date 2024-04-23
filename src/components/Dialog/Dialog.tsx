import useDialogStore from '@hooks/useDialogStore';
import { Backdrop, Dialog as StyledDialog, DialogHeader, DialogBody } from './Dialog.styles';
import Portal from '../Portal';
import { FC } from 'react';
import { DialogProps } from './Dialog.types';

const Dialog: FC<DialogProps> = ({ header, body, $minWidth, portalTargetNode }) => {
  const closeDialog = useDialogStore(({ closeDialog }) => closeDialog);

  if (!header && !body) {
    return null;
  }

  return (
    <Portal domNode={portalTargetNode}>
      <Backdrop onClick={closeDialog} />
      <StyledDialog $minWidth={$minWidth!}>
        {header && <DialogHeader as={header} />}
        {body && <DialogBody as={body} />}
      </StyledDialog>
    </Portal>
  );
};

Dialog.defaultProps = {
  $minWidth: 'sm',
  portalTargetNode: 'body',
};

export default Dialog;
