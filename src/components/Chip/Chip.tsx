import { FC } from 'react';
import { formatChipName, generateHSLColor } from './Chip.utils';
import { Chip as StyledChip } from './Chip.styles';

const Chip: FC<{ name: string }> = ({ name }) => (
  <StyledChip title={name} $color={generateHSLColor(name)}>
    {formatChipName(name)}
  </StyledChip>
);

Chip.defaultProps = {
  name: '',
};

export default Chip;
