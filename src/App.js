import React from 'react';
import './App.css';

import Hasan from './components/hasan.component';
import Eliza from './components/eliza.component';
import Age from './components/age.component';

function App() {
  return (
    <div className="App">
      <Hasan />
      <Eliza age={23} />
      <Age />
    </div>
  );
}

export default App;
