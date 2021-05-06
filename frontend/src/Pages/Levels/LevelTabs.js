import React, { useState } from 'react'


const LevelTabs = (props) => {

    const [selectedTab, setSelectTab] = useState()

    const displayTabs = props.data.map((tab, index) => (
        <div key={index}
            className="single-tab" 
            onClick={setSelectTab(tab)}>
            <h4>HSK Level {tab}</h4>
        </div>
    ))

    return {displayTabs, selectedTab}

}


export default LevelTabs