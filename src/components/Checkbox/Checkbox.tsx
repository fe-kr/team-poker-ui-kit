import { FC } from 'react';
import { Input, Label } from './Checkbox.styles';
import { StyledColor, StyledSize } from '@constants/ui';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <Label>
      <Input {...props} type="checkbox" />
      <span className="checkbox-custom" />
      <span className="checkbox-label">{label}</span>
    </Label>
  );
};

Checkbox.defaultProps = {
  $size: StyledSize.Medium,
  $color: StyledColor.Primary,
};

export default Checkbox;
