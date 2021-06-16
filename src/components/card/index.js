import React from 'react'
import {Link} from 'react-router-dom'
import Slugify from '../../logic/slugify'

const Card = (props) => {
    return (
        <Link to={`/destination/${Slugify(props.title)}`} className="destination" >
            <div className="destination-title"
                dangerouslySetInnerHTML={{
                    __html: `${props.title}`
                }}></div>
        </Link>
    )
}

export default Card
