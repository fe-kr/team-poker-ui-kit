import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

export const Default: StoryObj<typeof Input> = {
  args: { ...Input.defaultProps },
};

export default { component: Input } as Meta<typeof Input>;
