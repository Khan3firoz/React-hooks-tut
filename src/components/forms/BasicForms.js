import React, { useState } from 'react'

const BasicForms = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([{ id: "1616640980287", email: "khan3firoz@gmail.com", password:"1234" }])

    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email, password };

            setAllEntry([...allEntry, newEntry]);
            setEmail("");
            setPassword("")
            console.log(allEntry);
        } else {
            alert('plase fill all required data')
        }
    }
    // console.log(allEntry);
    const removeEntry = () => {
        allEntry.pop();
        console.log(allEntry)
        setAllEntry([...allEntry])
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    {
                        allEntry.map((curElm) => {
                            const { id, email, password } = curElm;
                            return (
                                <tbody key={id}>
                                    <tr>
                                        <td>{id}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }
                </table>
                <button onClick={removeEntry}>Remove</button>
            </div>

        </>
    )
}

export default BasicForms
