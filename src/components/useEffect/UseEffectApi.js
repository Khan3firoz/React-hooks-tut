import React, { useEffect, useState } from 'react'
import GihubUsers from './github/GithubUsers'
import Loading from './github/Loading'

const UseEffectApi = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        try {
            setLoading(false)
            const responce = await fetch('https://api.github.com/users');
            setUsers(await responce.json());
        } catch (err) {
            setLoading(false)
            console.log("Error" + err)
        }

    }
    useEffect(() => {
        getUser()
    }, []);

    if (loading) {
        return <Loading/>
    }
    // console.log(users)

    return (
        <>
            <GihubUsers users={users}/>
        </>
    )
}

export default UseEffectApi
