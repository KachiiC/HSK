import React from 'react'

const RevisionButtons = (props) => {

    const button_list = props.data.map((button, index) => (
        <button className="revision-button" 
            onClick={button.click}
            style={{"backgroundColor": `${button.background_color}`}}
        >
            {button.title}
        </button>
    ))
    
    return button_list

}

export default RevisionButtons