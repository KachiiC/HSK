import React from 'react'

const ReviseButton = (props) => (
    <button onClick={props.click}>
        {props.title}
    </button>
)

export default ReviseButton