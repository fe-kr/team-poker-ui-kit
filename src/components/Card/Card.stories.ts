import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

export const Default: StoryObj<typeof Card> = {
  args: { ...Card.defaultProps, children: '13' },
};

export default { component: Card } as Meta<typeof Card>;
