import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

export const Default: StoryObj<typeof Chip> = {
  args: { ...Chip.defaultProps },
};

export default { component: Chip } as Meta<typeof Chip>;
