import React from 'react'

const TestWord = (props) => (
    <>
        <h6>{props.word_index} of {props.total_words}</h6>
        <div className="word-container">
            <h1>{props.displayed_word}</h1>
        </div>
    </>

)

export default TestWord