import React from 'react';
import './App.css';

// import Hasan from './components/hasan.component';
// import Eliza from './components/eliza.component';
// import Age from './components/age.component';
// import Pro from './components/propsFunction.component';
// import Prop from './components/propsClass.component';
// import Hello from './components/a'
// import Message1 from './components/stateClass.component'
// import Message2 from './components/useStateFunction.component'
// import Counter from './components/counter.component'
// import EventHandler1 from './components/eventHandlerFunction.component'
import EventHandler2 from './components/eventHandlerClass.component'

function App() {
  return (
    <div className="App">
      {/* <EventHandler1 /> */}
      <EventHandler2 />
      {/* <Counter /> */}
      {/* <Message1 />
      <Message2 /> */}
      {/*  
      <Hasan />
      <Eliza age={23} />
      <Age />
      */}
      {/* <Pro fname = 'Hasan' sname = 'Tareque'>
        <p>1st child</p>
      </Pro>
      <Pro fname = 'Eliza' sname = 'Rafee'>
        <button>Function</button>
      </Pro> */}
      
      {/* <Prop fnamee = 'Eliza' snamee = 'Hasan'>
        <button>Class</button>
      </Prop> */}

      {/* <Hello /> */}

    </div>
  );
}

export default App;
