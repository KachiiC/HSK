import React, {useState} from 'react'
// DATA
import ButtonsList from 'Data/Revision/ButtonsList'
// Components
import RevisionButtons from './RevisionButtons'
import WordResult from './WordResult'
import TestWord from './TestWord'

const RevisionTest = (props) => {

    const WordsData = props.data

    // Current Word
    const [wordIndex, setWordIndex] = useState(0)
    const [showResults, setShowResults] = useState(false)

    // BUTTONS
    const showMe = () => setShowResults(show => !show)

    const nextWord = () => {
        // Turn off results
        setShowResults(false);
        // If index goes past length of Array, set index to 0
        (wordIndex === WordsData.length - 1) ? 
            setWordIndex(0)
            : 
            setWordIndex(prevWord => prevWord + 1)
    }

    const previousWord = () => {
        // Turn off results
        setShowResults(false);
        // If index goes into minsuses, set index to length of Array
        (wordIndex === 0) ? 
            setWordIndex(WordsData.length - 1)
            :
            setWordIndex(prevWord => prevWord - 1)
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
            definition={WordsData[wordIndex].definition}
            pinyin={WordsData[wordIndex].pinyin}
            type={WordsData[wordIndex].type}
        />
    : 
        null
    
    return (
        <div className="card-container">
            <TestWord
                word_index={wordIndex + 1}
                total_words={WordsData.length}
                displayed_word={WordsData[wordIndex].chinese_characters}
            />
            <RevisionButtons data={newButtonsList} />
            {resultsLogic}
        </div>
    )
}

export default RevisionTest