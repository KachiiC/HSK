import React, {useState} from 'react'
// Components
// Data 
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import TabData from 'Data/HSKWords/HSKTabData'
// CSS
import './levels.css'
import HSKTableColumns from 'Data/HSKTable/HSKTableColumns'
import AntdTable from 'Components/ComponentLibrary/AntdTable'
import LevelTabs from './LevelComponents/LevelTabs'


const HSK = () => {

    const [selectedLevel, setSelectedLevel] = useState(0)

    const displayedLevel = HSKWordsData.filter((level) => selectedLevel === 0 ? 
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

    const titleLogic = selectedLevel === 0 ? "All Levels" : `HSK Level ${selectedLevel}`

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