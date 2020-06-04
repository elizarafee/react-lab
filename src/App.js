import React from 'react';
import './App.css';

import Hasan from './components/hasan.component';
import Eliza from './components/eliza.component';


function App() {
  return (
    <div className="App">
      <Hasan />
      <Eliza age={23} />
    </div>
  );
}

export default App;
