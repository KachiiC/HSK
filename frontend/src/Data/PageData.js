import React from 'react'
//Pages
import About from 'Pages/About'
import Revision from 'Pages/Revision'
import Levels from 'Pages/Levels'

const PageData = [
    {
        name: "about",
        page: <About />
    },
    {
        name: "revision",
        page: <Revision />
    },
    {
        name: "hsk-words",
        page:  <Levels />
    }
]

export default PageData