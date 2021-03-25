import React,{useState} from 'react'

const UseStateObject = () => {
    // const bioData = [
    //     {id:0,myName:'Firoz',age:22,degree:'b.tech'},
    //     {id:1,myName:'khan',age:25,degree:'b.tech'},
    //     {id:2,myName:'sultan',age:29,degree:'b.tech'},
    // ]
    const [myObject, setmyObject] = useState({id:0,myName:'Firoz',age:22,degree:'b.tech'})

    const ChangeObject=()=>{
        setmyObject({...myObject,myName:'aklaque'})
    }
    return (
        <>
            {
                <h1 key={myObject.id}>Name: {myObject.myName} & Age: {myObject.age} and degree: {myObject.degree}</h1>}
                <button onClick={ChangeObject}>Update</button>

        </>
    )
}

export default UseStateObject
