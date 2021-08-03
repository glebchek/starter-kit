import React from 'react';
import { Experience } from './experience';
import { Interests } from './interests';
import { Languages } from './languages';
import { References } from './references';

export function RightSide(): JSX.Element {
  return (
    <div>
      <Experience />
      <References />
      <Languages />
      <Interests />
    </div>
  );
}
