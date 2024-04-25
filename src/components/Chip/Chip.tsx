import { FC } from 'react';
import { formatChipName, generateHSLColor } from './Chip.utils';
import { Chip as StyledChip } from './Chip.styles';
import { StyledSize } from '@constants/ui';

const Chip: FC<{ name: string; $size: string }> = ({ name, $size }) => (
  <StyledChip title={name} $size={$size} $color={generateHSLColor(name)}>
    {formatChipName(name)}
  </StyledChip>
);

Chip.defaultProps = {
  name: '',
  $size: StyledSize.Medium,
};

export default Chip;
