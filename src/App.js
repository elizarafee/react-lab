import React from "react";
import "./App.css";

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
// import EventHandler2 from './components/eventHandlerClass.component'
// import BindHandler from './components/bindHandler.component'
// import Parent from './components/parent.component'
// import Condition from './components/conditionalRendering.component'
// import ListRender from './components/listRender.component'
// import StyleSheet from './components/styleSheet.component'
// import InlineStyle from './components/inlineStyle.component'
// import './components/css/style.component.css'
// import styy from './components/css/style.module.css'
// import './css/outsideStyle.css'
// import styl from './css/outsideStyle.module.css'
// import Form from './components/form.component'
// import MountingA from './components/lifecycleMountingA.component'
// import UpdatingA from './components/lifecycleUpdatingA.component'
// import Fragments from './components/fargments.component'
// import ComponentVsPurecom from './components/componentVsPurecom.component'
// import ParentMemo from './components/parentMemo.component'
// import RefsDemo1 from './components/refsDemo1.component'
// import Refs from './components/refs.component'
// import Test from './components/test'
// import ErrorHandling from "./components/lifecycleErrorHandling.component";
// import ErrorBoundary from "./components/errorBoundary.component";
// import ClickCounter from './components/clickCounter.component'
// import HoverCounter from './components/hoverCounter.component'
import FunctionAsProps from  './components/functionAsProps'

function App() {
  return (
    <div className="App">
      <FunctionAsProps name={ (isTrue) => isTrue ? 'Tareque' : 'Null' }/>
      {/* <ClickCounter name='Tareque'/>
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <ErrorHandling heroName="AAAAAAA" />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorHandling heroName="BBBBBBB" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ErrorHandling heroName="Hrithik" />
      </ErrorBoundary> */}
      {/* <Test /> */}
      {/* <Refs /> */}
      {/* <RefsDemo1 /> */}
      {/* <ParentMemo /> */}
      {/* <ComponentVsPurecom /> */}
      {/* <Fragments /> */}
      {/* <MountingA /> */}
      {/* <Form /> */}
      {/* <h1 className='color'>CSS stylesheet</h1>
      <h1 className={styy.color}>CSS module</h1>
      <h1 className='colors'>CSS stylesheet from outside</h1>
      <h1 className={styl.colors}>CSS module from outside</h1>
      <InlineStyle /> */}
      {/* <StyleSheet head_col={true} head_size={true} /> */}
      {/* <ListRender /> */}
      {/* <Condition /> */}
      {/* <Parent /> */}
      {/* <BindHandler /> */}
      {/* <EventHandler1 /> */}
      {/* <EventHandler2 /> */}
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
