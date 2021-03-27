import React,{useState} from 'react'

const UseStateArray = () => {
    const bioData = [
        {id:0,myName:'Firoz',age:22},
        {id:1,myName:'khan',age:25},
        {id:2,myName:'sultan',age:29},
    ]
    const [myArray, setMyArray] = useState(bioData)
    const clearArray=()=>{
        setMyArray([])
    }
    console.log(myArray)
    const removeElm = (id) => {
        // alert(id)
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;
        })
        setMyArray(myNewArray)
    }
    return (
        <>
            {
                myArray.map((curElm) => {
                    return (
                        <h1 key={curElm.id}>Name:{curElm.myName} & Age:{curElm.age}
                        <button onClick={()=>removeElm(curElm.id)}>Remove</button>
                        </h1>
                    )
                })
            }
            <button onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray
