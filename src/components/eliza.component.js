import React from 'react';

const Eliza = ( {age} ) => {
    const eliza_age = age + 4;
    return(
        <div>
            <p>Eliza Ahmed ({eliza_age})</p>
        </div>
    )
}
export default Eliza;