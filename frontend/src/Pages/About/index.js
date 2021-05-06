import React from 'react'
import './about.css'

const About = (
    <>
    <h1 className="text-center my-4">About</h1>
    <div className="about-description">
        <p>This project is designed for people learning simplified chinese. The project currently
        only has HSK level 1 but I will sortly add HSK Levels 2 to 6. 
        </p>
        <p>This Project is designed with <strong>React</strong> and <strong>Django Rest Framework.</strong></p>
        <p>Component Libraries used:</p>
        <ul>
            <li>Materiel UI</li>
            <li>Ant Deisgn</li>
            <li>React-Bootstrap</li>
        </ul>
        <p>Other Components used:</p>
        <ul>
            <li>React-router-dom</li>
        </ul>
    </div>
    </>
)

export default About