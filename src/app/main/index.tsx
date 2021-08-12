import React from 'react';
import { css } from 'astroturf';

import { LeftSide } from './left';
import { RightSide } from './right';
import { IStaticStore } from '../store';

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

interface IMainProps {
  categories: IStaticStore['categories']
}

export function Main({categories}: IMainProps): JSX.Element {
  return (
    <main className={SidebarContainerStyle}>
      <LeftSide categories={categories.left} className={LeftSideStyle} />
      <RightSide categories={categories.right} className={RightSideStyle} />
    </main>
  );
}
