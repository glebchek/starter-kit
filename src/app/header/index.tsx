import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICategory } from '..';

export interface IHeaderProps {
  categories: ICategory[];
}

export function Header({ categories }: IHeaderProps): JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <a href={`#${category.id}`}>
                <FontAwesomeIcon icon={category.icon} />
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
