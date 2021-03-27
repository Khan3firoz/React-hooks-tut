import React,{useEffect, useState} from 'react'

const UseEffect1 = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        // console.log("Hello Use effect")
        if (count >= 1) {
            document.title = `Chat (${count})`
        } else {
            document.title = `Chat`
        }

    }, [count]);
    // console.log('out side useffect')
    const increament = () => {
        setcount(count+1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increament}>Click Me</button>
        </div>
    )
}

export default UseEffect1
