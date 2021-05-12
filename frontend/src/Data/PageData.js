import React from 'react'
//Pages
import About from 'Pages/About'
import Quiz from 'Pages/Quiz'
import Levels from 'Pages/Words'
import Revision from 'Pages/Revision'

const PageData = [
    {
        title: "Quiz",
        page: <Quiz />,
        image: ""
    },
    {
        title: "Words",
        page:  <Levels />,
        image: ""
    },
    {
        title: "Revision",
        page: <Revision />,
        image: ""
    },
    {
        title: "about",
        page: About,
        image: ""
    },
]

export default PageData