import React from 'react';
import { css } from 'astroturf';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

import { disableLinkDecoration } from '../../styles';
import { ICategory } from '..';

export interface IHeaderProps {
  categories: ICategory[];
}

const headerStyle = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0,0,0,.1);
  transition: .3s;

`;

const navStyle = css`
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navListStyle = css`
  display: grid;
  list-style-type: none;
`;

export function Header({ categories }: IHeaderProps): JSX.Element {
  return (
    <header className={headerStyle}>
      <nav className={cn(navStyle, disableLinkDecoration)}>
      <span>Test</span>
        <ul className={navListStyle}>
          {categories.map(category => (
            <li key={category.id}>
              <a href={`#${category.id}`}>
                <FontAwesomeIcon icon={category.icon} />
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        <FontAwesomeIcon icon={faBorderAll}/>
      </nav>
    </header>
  );
}
