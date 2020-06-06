import React, { useState } from 'react'

const Message2 = () => {
    const [groom, setGroom] = useState('Tareque');
    const [age, setAge] = useState(null);

    return(
        <div>
            {/* <input onChange = {e => setGroom(e.target.value)} /> */}
            <h3>Groom : {groom}</h3>
            <h3>setGroom : {setGroom}</h3>
            <input onChange= {e => setAge(e.target.value)} />
            <h3>Age : {age}</h3>
        </div>
    )
}

export default Message2