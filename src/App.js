import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';


function App() {
  return (
    <div>
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
