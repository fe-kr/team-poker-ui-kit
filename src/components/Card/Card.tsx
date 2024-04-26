import { FC } from 'react';
import { Card as StyledCard } from './Card.styles';
import { CardProps } from './Card.types';
import { StyledSize } from '@constants/ui';

const Card: FC<CardProps> = ({ $isFlipSide, children, ...props }) => (
  <StyledCard $isFlipSide={$isFlipSide} {...props}>
    {$isFlipSide ? null : children}
  </StyledCard>
);

Card.defaultProps = {
  $isFlipSide: false,
  $size: StyledSize.Medium,
};

export default Card;
