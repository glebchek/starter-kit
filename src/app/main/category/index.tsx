import React from 'react';

import { IStylableComponentProps } from '../../utils/i-stylable-component-props';

interface ICategoryProps
  extends React.PropsWithChildren<IStylableComponentProps> {
  id: string;
  name:string;
}

export function Category({ children, id, name, className }: ICategoryProps): JSX.Element {
  return (
    <section className={className}>
      <h2 id={id}>{name}</h2>
      {children}
    </section>
  );
}
