// a pattern where a function takes a component as an argument and returns a new component
// const NewComponent = higherOrderComponent(OriginalComponent)
// HOC adds additional data or functionality to the original component. so the new component can refered to as enhanced components
// const EnhancedComponent = higherOrderComponent(OriginalComponent)

import React from 'react'

const HigherOrderComponent = OriginalComponent => {  
    class newComponent extends React.Component {
        render() {
            return <OriginalComponent greet='Hey!!'/>
        }
    }
    
    return newComponent
}

export default HigherOrderComponent;
