import { createPortal } from 'react-dom';
import { FC, useMemo } from 'react';
import { PortalProps } from './Portal.types';

const Portal: FC<PortalProps> = ({ domNode, children }) => {
  const targetNode = useMemo(() => document.querySelector(domNode), [domNode]);

  return <>{targetNode ? createPortal(children, targetNode) : children}</>;
};

export default Portal;
