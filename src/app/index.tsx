import React from 'react';
import { css } from 'astroturf';

import { Main } from './main';
import { Header } from './header';

const appStyle = css`
  @import '~@ibm/plex/css/ibm-plex.css';

  --header-height: 3rem;

  /*========== Colors ==========*/
  --title-color: #0b0a0a;
  --text-color: #403a3a;
  --text-color-light: #707070;
  --container-color: #fafafa;
  --container-color-alt: #f0efef;
  --body-color: #fcfcfc;

  /*========== Font and typography ==========*/
  --body-font: 'IBM Plex Serif', sans-serif;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes ==========*/
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;

  font-family: var(--body-font);
  font-size: var(--normal-font-size);

  *,::before,::after {
    box-sizing: border-box;
  }

  scroll-behavior: smooth;
  background-color: var(--body-color);

  h1,h2,h3 {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    letter-spacing: .35rem;
    text-align: center;
    margin-bottom: var(--mb-3);
  }

  h1 {
    font-size: var(--h1-font-size);
  }

  h2 {
    font-size: var(--h2-font-size);
  }

  h3 {
    font-size: var(--h3-font-size);
  }

  section {
    padding: 1.5rem 0;
  }
`;

export function App(): JSX.Element {
  return (
    <div className={appStyle}>
      <Header />
      <Main />
    </div>
  );
}
