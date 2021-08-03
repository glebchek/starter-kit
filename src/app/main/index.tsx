import React from 'react';

import { LeftSide } from './left';
import { RightSide } from './right';

export function Main(): JSX.Element {
  return (
    <main className="l-main bd-container">
      <LeftSide/>
      <RightSide/>
    </main>
  );
}
