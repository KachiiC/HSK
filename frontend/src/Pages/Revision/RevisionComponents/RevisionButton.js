import React from 'react'

const RevisionButton = (props) => (
    <button className="revision-button" 
        onClick={props.click}
        style={{"backgroundColor": `${props.background_color}`}}
    >
        {props.title}
    </button>
)

export default RevisionButton