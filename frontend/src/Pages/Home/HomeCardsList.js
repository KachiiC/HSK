import React from 'react'
import HomeCards from './HomeCards'

const HomeCardsList = () => {

    const HomeCardsData = [
        {
            title: "revision"
        },
        {
            title: "quiz"
        },
        {
            title: "words"
        }
    ]

    const renderCardsList = HomeCardsData.map((card, index) => <HomeCards title={card.title} />)


    return renderCardsList
}

export default HomeCardsList