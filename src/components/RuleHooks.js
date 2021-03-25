// Hooks rules

//1.Always write it inside the component of function
//2.component name must be pascalcase (first latter shuold be capital)
//3.Don't call hooks inside the loop/ condition,or nesteds


import React, { useState } from 'react'

const RuleHooks = () => {
    const [myName,setMyname]=useState('Firoz khan')
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RuleHooks
