import type { Meta, StoryObj } from '@storybook/react';

import Portal from './Portal';

export const Default: StoryObj<typeof Portal> = {
  args: {
    ...Portal.defaultProps,
    domNode: 'body',
    children: 'Portal Children',
  },
};

export default { component: Portal } as Meta<typeof Portal>;
