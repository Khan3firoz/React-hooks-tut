import React, { useState } from 'react'

const RegistrationFrom = () => {
    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [record, setRecord] = useState([])
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value })
        console.log(name, value)
    }
    const submitForm = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime.toString() }
        console.log(record);
        setRecord([...record, newRecord])

        setuserRegistration({
            username: "",
            email: "",
            phone: "",
            password: ""
        })
    }
    console.log(record);

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off" value={userRegistration.username}
                        onChange={handleInput} name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" value={userRegistration.email}
                        onChange={handleInput} name="email" id="username" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" autoComplete="off" value={userRegistration.phone}
                        onChange={handleInput} name="phone" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" autoComplete="off" value={userRegistration.password}
                        onChange={handleInput} name="password" id="username" />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default RegistrationFrom
