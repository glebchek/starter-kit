import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

type GreetingProps = {
  name?: string;
};

export default function Greeting({ name = 'World' }: GreetingProps): JSX.Element {
  const routerParams = useParams<{ name: string }>();
  const history = useHistory();

  const finalName = routerParams.name || name;
  const greetings = `Hello, ${finalName}!`;
  return (
    <>
      <div>{greetings}</div>
      {finalName !== 'John'
      && <button type="button" onClick={(): void => history.push('/user/John')}>No, my name is John</button>}
    </>
  );
}
