import React,{useState} from 'react'

const NameChange = () => {

    const [myName, setMyName] = useState('Firoz khan');
    const changeName = () => {
        let val = myName;
        (val === 'Firoz khan') ? setMyName('akhlaque') : setMyName('Firoz khan');
      }

    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={changeName}>Click me pls</button>
        </div>
    )
}

export default NameChange
