import React, {useState} from 'react'

// CSS
import './revision.css'
// Components
import RevisionTest from './RevisionComponents/RevisionTest'
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
// Data 
import TabData from 'Data/HSKWords/HSKTabData'
// CSS
import LevelTabs from 'Pages/Levels/LevelComponents/LevelTabs'

const Revision = (props) => {

    const [selectedLevel, setSelectedLevel] = useState(0)

    const filteredData = HSKWordsData.filter((level) => {

        const filteredItems = selectedLevel === 0 ? level
        :
        level.hsk_level === selectedLevel

        return filteredItems
    })

    const displayTabs = TabData.map((tab, index) => (
            <LevelTabs
                key={index}
                click={() => setSelectedLevel(tab)}
                tab={tab}
            />
        )
    )

    return (
        <div>
            <div className="site-grid"
                style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
                {displayTabs}
            </div>
        <RevisionTest data={filteredData}/>
        </div>
    )
    
}

export default Revision