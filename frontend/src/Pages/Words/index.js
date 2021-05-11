import React, {useEffect, useState} from 'react'
// DATA
import TabData from 'Data/HSKWords/HSKTabData'
import HSKTableColumns from 'Data/HSKTable/HSKTableColumns'
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
// CSS
import './words.css'
// COMPONENTS
import AntdTable from 'Components/ComponentLibrary/AntdTable'
import LevelTabs from './LevelComponents/LevelTabs'
import ReviseButton from './LevelComponents/ReviseButton'
import SiteFetcher from 'Components/SiteComponents/SiteFetcher'
import SiteRender from 'Components/SiteComponents/SiteRender'


const HSKWords = () => {

    const [selectedLevel, setSelectedLevel] = useState(0)
    const [selectedWord, setSelectedWord] = useState(HSKWordsData)

    const responseData = SiteFetcher("http://127.0.0.1:8000/hsk_words/", [HSKWordsData])

    const wordsList = responseData.response

    const HSKWords = wordsList.map((word) => {

        const buttonLogic = () => word.revise === true ? "Remove" : "Add"
        const typeLogic = () => word.revise === true ? "danger" : "primary"
        
        const reviseLogic = () => word.revise === false ?
            word.revise = true
            :
            word.revise = false

        const clickLogic = () => {setSelectedWord(word); reviseLogic(); buttonLogic()}

        word.revision = <ReviseButton title={buttonLogic()} click={clickLogic} type={typeLogic()}/>

        return word
    })

    // PUT LOGIC FOR REVISION
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
    }, [selectedWord, HSKWords]);

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

    const renderLogic = (
        <AntdTable
            title={titleLogic}
            columns={HSKTableColumns} 
            data={displayedLevel}
            pagination={false}
        />
    )

    return (
        <div className="component-container">
            <div className="levels-container site-grid"
                style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
                {displayTabs}
            </div>
            {/* HSK TABLE  */}
            <SiteRender
                data={responseData}
                component={renderLogic}
            />
        </div>
    )
}

export default HSKWords