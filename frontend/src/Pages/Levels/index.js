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

    const displayTabs = TabData.map((tab, index) => (
        <LevelTabs
            key={index}
            click={() => setSelectedLevel(tab)}
            tab={tab}
        />
    ))

    const titleLogic = () => {
        if (selectedLevel === 0) {
            return "All Levels"
        }
        return `HSK Level ${selectedLevel}`
    }

    return (
        <div className="component-container">
            <div className="site-grid levels-container"
                style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
                {displayTabs}
            </div>
            {/* HSK TABLE  */}
            <AntdTable
                title={titleLogic()}
                columns={HSKTableColumns} 
                data={displayedLevel}
                pagination={false}
            />
        </div>
    )
}
export default HSK