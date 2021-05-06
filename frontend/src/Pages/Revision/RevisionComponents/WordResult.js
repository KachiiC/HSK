import React from 'react'

const WordResult = (props) => (
    <div className="my-4">
        <p><b>Definition:</b> {props.definition}</p>
        <p><b>Pinyin:</b> {props.pinyin}</p>
        <p><b>Type:</b> {props.type}</p>
    </div>
) 

export default WordResult