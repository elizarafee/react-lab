// component lifecycle method : Error Handling : has 2 method like : static getDerivedStateFromError & componentDidCatch
// static getDerivedStateFromError is used to render afallback UI after an error is thrown
// componentDidCatch is used to log the error information

import React from 'react'

const ErrorHandling = ({heroName}) => {
    if(heroName === 'Hrithik'){
        throw new Error('Error deteceted')
    }

    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorHandling;
