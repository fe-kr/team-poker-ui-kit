import type { Meta, StoryObj } from '@storybook/react';

import Toast from './Toast';

export const Default: StoryObj<typeof Toast> = {
  args: { ...Toast.defaultProps },
};

export default { component: Toast } as Meta<typeof Toast>;
