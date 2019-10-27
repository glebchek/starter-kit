// @flow
import React from 'react';

type AppProps = {
  name?: string,
};

export default function App(props: AppProps) {
  return <div>Hello, {props.name}!</div>;
}
