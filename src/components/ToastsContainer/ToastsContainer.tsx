import useToastsStore from '@hooks/useToastsStore';
import { Container } from './ToastsContainer.styles';
import Toast from '../Toast';
import { FC, MouseEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { ToastsContainerProps } from './ToastsContainer.types';
import { StyledPosition } from '@constants/ui';

const ToastsContainer: FC<ToastsContainerProps> = ({ position, duration }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const { toasts, setDuration, deleteToast } = useToastsStore();

  const sortedToasts = useMemo(() => {
    const isTopPosition = [StyledPosition.TopLeft, StyledPosition.TopRight].includes(position);

    return isTopPosition ? toasts : toasts.toReversed();
  }, [position, toasts]);

  const onClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.dataset.id as string;

      deleteToast(id);
    },
    [deleteToast],
  );

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current?.scrollHeight);
  }, [position, sortedToasts.length]);

  useEffect(() => {
    setDuration(duration);
  }, [duration, setDuration]);

  if (!toasts.length) {
    return;
  }

  return (
    <Container ref={listRef} $position={position} aria-live="assertive">
      {toasts.map(toast => (
        <Toast {...toast} key={toast.id} onClose={onClose} />
      ))}
    </Container>
  );
};

ToastsContainer.defaultProps = {
  position: StyledPosition.BottomLeft,
  duration: 5000,
};

export default ToastsContainer;
