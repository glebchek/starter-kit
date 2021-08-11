import React from 'react';
import { About } from './about';
import { Contacts } from './contacts';
import { Eductaion } from './education';
import { Introduction } from './introduction';
import { Skills } from './skills';
import { Category } from '../category';

import { IStylableComponentProps } from '../../utils/i-stylable-component-props';

export function LeftSide({ className }: IStylableComponentProps): JSX.Element {
  return (
    <div className={className}>
      <Introduction />
      <Category id="ddd" name="fsdf"><Contacts /></Category>
      <About />
      <Eductaion />
      <Skills />
    </div>
  );
}
