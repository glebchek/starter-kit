// @flow
import React from 'react';

type AppProps = {
  name?: string,
};

export default function App({ name = 'World' }: AppProps) {
  const greetings = `Hello, ${name}!`;
  return <div>{greetings}</div>;
}
