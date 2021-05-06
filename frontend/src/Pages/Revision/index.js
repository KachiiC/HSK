import React, {useState} from 'react'
// DATA
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import ButtonsList from 'Data/Revision/ButtonsList'
// CSS
import './revision.css'
// Components
import RevisionButtons from './RevisionComponents/RevisionButtons'
import WordResult from './RevisionComponents/WordResult'
import TestWord from './RevisionComponents/TestWord'

const Revision = () => {

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

    const button_functions = [previousWord, showMe, nextWord]

    const newButtonsList = ButtonsList.map((button) => {

        if (button.background_color === "#33cc33") {
            button.title = `${showResults ? "Hide" : "Show"} Answer`
        }

        button.click = button_functions[ButtonsList.indexOf(button)]

        return button
    })

    const resultsLogic = showResults ? 
        <WordResult 
            definition={HSKWordsData[wordIndex].definition}
            pinyin={HSKWordsData[wordIndex].pinyin}
            type={HSKWordsData[wordIndex].type}
        />
    : 
        null
    
    return (
        <div className="card-container">
            <TestWord
                word_index={wordIndex + 1}
                total_words={HSKWordsData.length}
                displayed_word={HSKWordsData[wordIndex].chinese_characters}
            />
            <RevisionButtons data={newButtonsList} />
            {resultsLogic}
        </div>
    )
}

export default Revision