import React from 'react';
import { Experience } from './experience';
import { Interests } from './interests';
import { Languages } from './languages';
import { References } from './references';

import { IStylableComponentProps } from '../../utils/i-stylable-component-props';

export function RightSide({ className }: IStylableComponentProps): JSX.Element {
  return (
    <div className={className}>
      <Experience />
      <References />
      <Languages />
      <Interests />
    </div>
  );
}
