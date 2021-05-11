import React, {useState} from 'react'

// CSS
import './revision.css'
// Components
import RevisionTest from './RevisionComponents/RevisionTest'
import HSKWordsData from 'Data/HSKWords/HSKWordsData'
import SiteFetcher from 'Components/SiteComponents/SiteFetcher'
import SiteRender from 'Components/SiteComponents/SiteRender'
// Data 
import TabData from 'Data/HSKWords/HSKTabData'
// CSS
import LevelTabs from 'Pages/Words/LevelComponents/LevelTabs'

const Quiz = (props) => {

    const [selectedLevel, setSelectedLevel] = useState(0)
    const [wordIndex, setWordIndex] = useState(0)

    const responseData = SiteFetcher("http://127.0.0.1:8000/hsk_words/", [HSKWordsData])

    const wordsList = responseData.response

    const filteredData = wordsList.filter((level) => {

        const filteredItems = selectedLevel === 0 ? level
        :
        level.hsk_level === selectedLevel

        return filteredItems
    })

    const displayTabs = TabData.map((tab, index) => (
            <LevelTabs
                key={index}
                click={() => {setSelectedLevel(tab); setWordIndex(0)}}
                tab={tab}
            />
        )
    )

    const revisionComponent = (
        <>
        <div className="site-grid levels-container"
            style={{"gridTemplateColumns": `repeat(${TabData.length},1fr)`}}
            >
            {displayTabs}
        </div>
        <RevisionTest data={filteredData} word_index={wordIndex}/>
    </>
    )

    return <SiteRender data={responseData} component={revisionComponent} />
    
}

export default Quiz