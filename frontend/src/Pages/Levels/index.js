import React, {useState} from 'react'
// Components
// Data 
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import TabData from 'Data/HSKWords/HSKTabData'
// CSS
import './levels.css'
import HSKTableColumn from 'Data/HSKTable/HSKTableColumns'
import AntdTable from 'Components/ComponentLibrary/AntdTable'


const HSK = () => {

    const [selectedLevel, setSelectedLevel] = useState(1)

    const displayedLevel = HSKWordsData.filter((level) => level.hsk_level === selectedLevel )

    const displayTabs = TabData.map((tab, index) => (
        <div key={index}
            className="single-tab" 
            onClick={() => setSelectedLevel(tab)}>
            <h4>HSK Level {tab}</h4>
        </div>
    ))

    const ammendedColumn = HSKTableColumn.map((column) => {
        
        column.align = "center"
        column.width = "25%"

        return column
    })

    return (
        <div className="component-container">
            <h1>HSK Levels</h1>
            <div className="tabs-row">
                {displayTabs}
            </div>
            {/* HSK TABLE  */}
            <AntdTable
                title={`HSK Level ${selectedLevel}`}
                columns={ammendedColumn} 
                data={displayedLevel}
                pagination={false}
            />
        </div>
    )
}
export default HSK