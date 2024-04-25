import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

export const Default: StoryObj<typeof Checkbox> = {
  args: { ...Checkbox.defaultProps },
};

export default { component: Checkbox } as Meta<typeof Checkbox>;
