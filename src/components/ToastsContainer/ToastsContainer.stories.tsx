import type { Meta, StoryObj } from '@storybook/react';

import ToastsContainer from './ToastsContainer';
import Button from '../Button';
import useToastsStore from '@hooks/useToastsStore';

export const Default: StoryObj<typeof ToastsContainer> = {
  render: args => {
    const { addToast } = useToastsStore();

    return (
      <>
        <Button
          $size="small"
          $variant="outlined"
          $color="primary"
          onClick={() =>
            addToast({
              message: 'Hi',
              color: 'error',
            })
          }
        >
          Add Toast
        </Button>
        <ToastsContainer {...args} />
      </>
    );
  },
  args: {
    ...ToastsContainer.defaultProps,
  },
};

export default { component: ToastsContainer } as Meta<typeof ToastsContainer>;
