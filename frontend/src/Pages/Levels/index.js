import React, {useEffect, useState} from 'react'
// Components
// Data 
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import TabData from 'Data/HSKWords/HSKTabData'
import HSKTableColumns from 'Data/HSKTable/HSKTableColumns'
// CSS
import './levels.css'
// COMPONENTS
import AntdTable from 'Components/ComponentLibrary/AntdTable'
import LevelTabs from './LevelComponents/LevelTabs'
import ReviseButton from './LevelComponents/ReviseButton'


const HSK = () => {

    const [wordsList, setWordsList] = useState([])
    const [selectedLevel, setSelectedLevel] = useState(0)
    const [selectedWord, setSelectedWord] = useState({
        chinese_characters: "",
        pinyin: "",
        definition: "",
        type: "",
        hsk_level: 0,
    })

    useEffect(() => {fetch("http://127.0.0.1:8000/hsk_words/") 
        .then(response => response.json())
        .then(words => setWordsList(words))
    },[]) 

    const HSKWords = wordsList.map((word) => {

        const buttonLogic = () => word.revise === true ? "Remove" : "Add"
        
        const reviseLogic = () => word.revise === false ?
            word.revise = true
            :
            word.revise = false

        const clickLogic = () => {setSelectedWord(word); reviseLogic(); buttonLogic()}

        word.revision = <ReviseButton title={buttonLogic()} click={clickLogic}/>

        return word
    })

    console.log(selectedWord)

    useEffect(() => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chinese_characters: selectedWord.chinese_characters,
                pinyin: selectedWord.pinyin,
                definition: selectedWord.definition,
                type: selectedWord.type,
                hsk_level: selectedWord.hsk_level,
                revise: selectedWord.revise
            })
        }
        fetch(`http://127.0.0.1:8000/add_revision_word/${selectedWord.chinese_characters}`, requestOptions)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }, [selectedWord]);

    const displayedLevel = HSKWords.filter((level) => selectedLevel === 0 ? 
        level
        :
        level.hsk_level === selectedLevel 
    )

    const displayTabs = TabData.map((tab, index) => 
        <LevelTabs
            key={index}
            click={() => setSelectedLevel(tab)}
            tab={tab}
        />
    )

    const titleLogic = selectedLevel === 0 ? 
        "All Levels" 
        : 
        `HSK Level ${selectedLevel}`

    return (
        <div className="component-container">
            <div className="levels-container site-grid"
                style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
                {displayTabs}
            </div>
            {/* HSK TABLE  */}
            <AntdTable
                title={titleLogic}
                columns={HSKTableColumns} 
                data={displayedLevel}
                pagination={false}
            />
        </div>
    )
}

export default HSK