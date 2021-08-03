import React from 'react';

import { Main } from './main';
import { Header } from './header';

export function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
