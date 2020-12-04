import React from 'react'
//Pages
import About from 'Pages/About'
import Revision from 'Pages/Revision'
import Levels from 'Pages/Levels'

const inputLevel = 1

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
        name: `hsk-level`,
        page:  <Levels />
    }
]

export default PageData