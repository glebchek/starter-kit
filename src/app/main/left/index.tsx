import React from 'react';
import { Category } from '../category';

import { IStylableComponentProps } from '../../utils/i-stylable-component-props';
import { ICategory } from '../../interfaces';

interface ILeftSideProps extends IStylableComponentProps {
  categories: ICategory[];
}

export function LeftSide({
  className,
  categories,
}: ILeftSideProps): JSX.Element {
  return (
    <div className={className}>
      {categories.map(category => {
        const Component = category.component;
        return (
          <Category id={category.id} name={category.name}>
            <Component {...category.props}/>
          </Category>
        );
      })}
    </div>
  );
}
