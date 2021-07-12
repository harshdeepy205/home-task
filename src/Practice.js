import React, { useState } from 'react'

function Practice(props) {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <h1>hello{props.name}</h1>
            {/* <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h1>{name.firstName} is my firstName</h1>
            <h1>{name.lastName} is my lastName</h1> */}
            {props.children}
        </div>
    )
}

export default Practice
