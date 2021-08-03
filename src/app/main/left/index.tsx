import React from 'react';
import { About } from './about';
import { Contacts } from './contacts';
import { Eductaion } from './education';

import { Introduction } from './introduction';
import { Skills } from './skills';

export function LeftSide(): JSX.Element {
  return (
    <div>
      <Introduction />
      <Contacts />
      <About />
      <Eductaion />
      <Skills />
    </div>
  );
}
