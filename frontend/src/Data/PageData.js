import React from 'react'
//Pages
import About from 'Pages/About'
import Quiz from 'Pages/Quiz'
import Levels from 'Pages/Words'
import Revision from 'Pages/Revision'

const PageData = [
    {
        title: "about",
        page: About
    },
    {
        title: "Quiz",
        page: <Quiz />
    },
    {
        title: "Words",
        page:  <Levels />
    },
    {
        title: "Revision",
        page: <Revision />
    }
]

export default PageData