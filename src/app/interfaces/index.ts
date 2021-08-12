import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ICategory<Component extends React.FunctionComponent =  React.FunctionComponent> {
  id: string;
  name: string;
  icon: IconDefinition;
  component: Component;
  props: Parameters<Component>
}
