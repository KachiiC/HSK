import React, {useState} from 'react'
// Components
// Data 
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import TabData from 'Data/HSKWords/HSKTabData'
// CSS
import './levels.css'
import HSKTableColumns from 'Data/HSKTable/HSKTableColumns'
import AntdTable from 'Components/ComponentLibrary/AntdTable'


const HSK = () => {

    const [selectedLevel, setSelectedLevel] = useState(1)

    const displayedLevel = HSKWordsData.filter((level) => level.hsk_level === selectedLevel )

    const displayTabs = TabData.map((tab, index) => (
        <div key={index}
            className="site-span-1 single-tab"
            onClick={() => setSelectedLevel(tab)}>
            <h4>HSK Level {tab}</h4>
        </div>
    ))


    return (
        <div className="component-container">
            <div className="site-grid"
                style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
                {displayTabs}
            </div>
            {/* HSK TABLE  */}
            <AntdTable
                title={`HSK Level ${selectedLevel}`}
                columns={HSKTableColumns} 
                data={displayedLevel}
                pagination={false}
            />
        </div>
    )
}
export default HSK