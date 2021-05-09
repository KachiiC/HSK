import React from 'react'


const LevelTabs = (props) => {

    const tabLogic = props.tab === 0 ? "All Levels" : `HSK Level ${props.tab}`

    return (
        <div className="site-span-1 single-tab"
            onClick={props.click}
        >
            <div>{tabLogic}</div>
        </div>
    )
}

export default LevelTabs