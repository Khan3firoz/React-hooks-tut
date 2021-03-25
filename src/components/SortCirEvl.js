import React,{useState} from 'react'

export const SortCirEvl = () => {
    const [demo, setDemo] = useState('Hi')
    return (
        <div>
            <h1>{demo || "Firoz"}</h1>
            <h1>{demo && "Akhlaque"}</h1>
        </div>
    )
}
export default SortCirEvl