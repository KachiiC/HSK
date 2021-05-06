import React, {useState} from 'react'
// DATA
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
// CSS
import './revision.css'
// Components
import RevisionButton from './RevisionComponents/RevisionButton'
import WordResult from './RevisionComponents/WordResult'
import TestWord from './RevisionComponents/TestWord'

const Revise = () => {

    // Current Word
    const [wordIndex, setWordIndex] = useState(0)
    const [showResults, setShowResults] = useState(false)

    // BUTTONS
    const showMe = () => setShowResults(show => !show)

    const nextWord = () => {
        (wordIndex === HSKWordsData.length - 1) ? 
            setWordIndex(0)
            : 
            setWordIndex(prevWord => prevWord + 1);
        setShowResults(false)
    }

    const previousWord = () => {
        (wordIndex === 0) ? 
            setWordIndex(HSKWordsData.length - 1)
            :
            setWordIndex(prevWord => prevWord - 1);
        setShowResults(false)
    }

    const ButtonsList = [
        {
            title: "Previous Word",        
            click: previousWord,
            background_color: "#0099ff"
        },
        {
            title:`${showResults ? "Hide" : "Show"} Answer`,
            click: showMe,
            background_color: "#33cc33"
        },
        {
            title: "Next Word",
            click: nextWord,
            background_color:"#0099ff"
        }
    ]

    const displayButtonsList = ButtonsList.map((button, index) => (
            <RevisionButton 
                title={button.title}          
                click={button.click} 
                background_color={button.background_color}
                key={index}
            />
        )
    )

    const Results = (
        <div className="answer-container">
            <WordResult 
                definition={HSKWordsData[wordIndex].definition}
                pinyin={HSKWordsData[wordIndex].pinyin}
                type={HSKWordsData[wordIndex].type}
            />
        </div>
    )

    const resultsLogic = showResults ? Results : null
    
    return (
        <div className="card-container">
            <TestWord
                word_index={wordIndex + 1}
                total_words={HSKWordsData.length}
                displayed_word={HSKWordsData[wordIndex].chinese_characters}
            />
            {displayButtonsList}
            {resultsLogic}
        </div>
    )
}

export default Revise