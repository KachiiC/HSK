import React from 'react'


const LevelTabs = (props) => {

    const tabLogic = () => {
        if (props.tab === 0) {
            return "All Levels"
        }
        return `HSK Level ${props.tab}`
    }

    return (
        <div className="site-span-1 single-tab"
            onClick={props.click}
        >
            <div>{tabLogic()}</div>
        </div>
    )
}

export default LevelTabs