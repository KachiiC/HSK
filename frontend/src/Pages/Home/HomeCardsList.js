import React from 'react'
// COMPONENTS
import HomeCards from './HomeCard'
import PageData from 'Data/PageData'

const HomeCardsList = () => {

    const renderCardsList = PageData.map((card, index) => (
            <HomeCards title={card.title} key={index}/>
        )
    )

    return (
        <div className="home-container">
            <div className="site-grid-system">
                {renderCardsList}
            </div>
        </div>
    )
    
}

export default HomeCardsList