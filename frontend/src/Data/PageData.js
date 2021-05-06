import React from 'react'
//Pages
import About from 'Pages/About'
import Revision from 'Pages/Revision'
import Levels from 'Pages/Levels'

const PageData = [
    {
        title: "about",
        page: About
    },
    {
        title: "revision",
        page: <Revision />
    },
    {
        title: "levels",
        page:  <Levels />
    },
]

export default PageData