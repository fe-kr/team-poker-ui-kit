import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export const Default: StoryObj<typeof Button> = {
  args: { ...Button.defaultProps, children: 'Button' },
};

export default { component: Button } as Meta<typeof Button>;
