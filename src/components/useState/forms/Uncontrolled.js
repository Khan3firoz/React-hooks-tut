import React,{useRef,useState} from 'react'

const Uncontrolled = () => {
    //its like a useState hooks only it preserve the value. it does not reder the components
    const luckyName = useRef(null)
    const [show, setShow] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        console.log(luckyName.current.value)
        const Name = luckyName.current.value
        Name===""?alert('Plase Enter your Lucky name'):setShow(true)
    }
    return (
        <div>

            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">Enter your Lucky Name</label>
                    <input type="text"  id="luckyName" ref={luckyName} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h2>{show ? `your lucky name is ${luckyName.current.value}`:""}</h2>

        </div>
    )
}

export default Uncontrolled
