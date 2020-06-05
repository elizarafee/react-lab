import React from 'react';
import './App.css';

// import Hasan from './components/hasan.component';
// import Eliza from './components/eliza.component';
// import Age from './components/age.component';
// import Pro from './components/props.functionalCom';
// import Prop from './components/props.classCom';
// import Hello from './components/a'
import Message from './components/stateClass.component'

function App() {
  return (
    <div className="App">
      <Message />
      {/*  
      <Hasan />
      <Eliza age={23} />
      <Age />
     
      <Pro fname = 'Hasan' sname = 'Tareque'>
        <p>1st child</p>
      </Pro>
      <Pro fname = 'Eliza' sname = 'Rafee'>
        <button>Function</button>
      </Pro>
      
      <Prop fnamee = 'Eliza' snamee = 'Hasan'>
        <button>Class</button>
      </Prop> */}

      {/* <Hello /> */}

    </div>
  );
}

export default App;
