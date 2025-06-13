import React from 'react'
import F from './F';
import{GreetContext} from './GreetContext';

function E() {
  const greet = "hello from E!";
  return (
    <GreetContext.Provider value={greet}>
      <F/>
    </GreetContext.Provider>
  );
}

export default E;