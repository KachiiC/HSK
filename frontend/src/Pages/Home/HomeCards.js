import React from 'react'
// COMPONENTS
import {Link} from 'react-router-dom'

const HomeCards = (props) =>  (

    <div className="site-span-4 m-auto w-90">
        <Link to={`/${props.title}`}>
            <h1 className="text-center">{props.title}</h1>
            <img src={`https://via.placeholder.com/350x350?text=${props.title}`} 
                alt={props.title}
                className="site-responsive-image"
            />
        </Link>
    </div>

)

export default HomeCards