import React from 'react'
// COMPONENTS
import {Link} from 'react-router-dom'

const HomeCards = (props) =>  (

    <div className="site-span-3 m-auto w-90">
        <Link to={`/${props.title}`}>
            <h2>{props.title}</h2>
            <img src={`https://via.placeholder.com/350x350?text=${props.title}`} 
                alt={props.title}
                className="site-responsive-image"
            />
        </Link>
    </div>

)

export default HomeCards