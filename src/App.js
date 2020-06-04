import React from 'react';
import './App.css';

import Hasan from './components/hasan.component';
import Eliza from './components/eliza.component';
import Age from './components/age.component';
import Pro from './components/props.functionalCom'

function App() {
  return (
    <div className="App">
      <Hasan />
      <Eliza age={23} />
      <Age />
      <Pro fname = 'Hasan' sname = 'Tareque'>
        <p>1st child</p>
      </Pro>
      <Pro fname = 'Eliza' sname = 'Rafee'>
        <button>Click</button>
      </Pro>
      

    </div>
  );
}

export default App;
