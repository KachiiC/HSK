import React, {useState} from 'react'
import HSKWordsData from 'Data/HSKWordsData'
import './revision.css'

const Revise = () => {

    const [wordIndex, setWordIndex] = useState(0)
    const [showResults, setShowResults] = React.useState(false)

    const showMe = () => {
        setShowResults(show => !show)
    }

    const nextWord = () => {
        (wordIndex === HSKWordsData.length - 1) ? 
            setWordIndex(0):setWordIndex(prevWord => prevWord + 1);
        setShowResults(false)
    }

    const previousWord = () => {
        (wordIndex === 0) ? 
        setWordIndex(HSKWordsData.length - 1):setWordIndex(prevWord => prevWord - 1);
        setShowResults(false)
    }

    const Results = () => (
        <div>
            <p><b>definition:</b> {HSKWordsData[wordIndex].definition}</p>
            <p><b>pinyin:</b> {HSKWordsData[wordIndex].pinyin}</p>
            <p><b>type:</b> {HSKWordsData[wordIndex].type}</p>
        </div>
    ) 
    
    return (
        <div className="card-container">
            <h6>{wordIndex + 1} of {HSKWordsData.length}</h6>
            <div className="word-container">
                <h1>{HSKWordsData[wordIndex].chinese_characters}</h1>
            </div>
            <button className="toggle-button" onClick={previousWord}>
                Previous Word
            </button>
            <button className="result-button" onClick={showMe}>
                {showResults ? "Hide" : "Show"} Answer
            </button>
            <button className="toggle-button" onClick={nextWord}>
                Next Word
            </button>
            <div className="answer-container">
                { showResults ? <Results /> : null }
            </div>
        </div>
    )
}

export default Revise