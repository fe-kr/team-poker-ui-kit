import type { Meta, StoryObj } from '@storybook/react';

import Dialog from './Dialog';

export const Default: StoryObj<typeof Dialog> = {
  args: {
    ...Dialog.defaultProps,
    header: () => <div>Header</div>,
    body: () => <div>Body</div>,
    portalTargetNode: 'body',
  },
};

export default { component: Dialog } as Meta<typeof Dialog>;
