// @flow
import React from 'react';

type AppProps = {
  name?: string,
};

export default function App(props: AppProps) {
  const { name } = props;
  const greetings = `Hello, ${name}!`;
  return <div>greetings</div>;
}
