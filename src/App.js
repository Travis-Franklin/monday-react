import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';


function App() {
  return (
    <div>
      <Counter initialValue={10}/>
      <Counter initialValue={-1}/>

      <Greet
      whom="Travis"
      how="Salutations"
      />
      <Greet
      whom="Travis"
      how="Salutations"
      />
    </div>
  );
}

export default App;
