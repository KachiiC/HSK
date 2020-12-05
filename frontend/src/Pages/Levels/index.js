import React, {useState} from 'react'
// Components
import SiteTable from 'Components/SiteTable'
// Data 
import HSKWordsData from 'Data/HSKWordsData'
import TabData from 'Data/TabData'
// CSS
import './levels.css'


const HSK = () => {

    const [selectedLevel, setSelectedLevel] = useState(1)

    const hskColumns = [
        "chinese_characters",
        "pinyin",
        "definition",
        "type",
        "hsk_level"
    ]

    const displayedData = HSKWordsData.filter((level) => {
        return level.hsk_level === selectedLevel
    })

    const displayTabs = TabData.map((tab, index) => (
        <div key={index}
            className="single-tab" 
            onClick={() => setSelectedLevel(tab)}>
            <h4>HSK Level {tab}</h4>
        </div>
    ))


    return (
        <div className="component-container">
            <h1>HSK Levels</h1>
            <div className="tabs-row">
                {displayTabs}
            </div>
            <h3>HSK Level {selectedLevel}</h3>
            <SiteTable columns={hskColumns} data={displayedData} />
        </div>
    )
}
export default HSK