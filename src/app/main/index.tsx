import React from 'react';
import { css } from 'astroturf';

import { LeftSide } from './left';
import { RightSide } from './right';

const SidebarContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
`

const LeftSideStyle = css`
  flex-grow: 1;
  flex-basis: 600px; 
`

const RightSideStyle = css`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
`

export function Main(): JSX.Element {
  return (
    <main className={SidebarContainerStyle}>
      <LeftSide className={LeftSideStyle} />
      <RightSide className={RightSideStyle} />
    </main>
  );
}
