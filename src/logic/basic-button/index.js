import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/store'

const BasicButton = (props) => {
    const { lang } = useStore();
    // console.log(props.term);
    const img = require('../../assets/images/' + props.term.slug + '.png');
    return (

        <Link to={props.term.id !== -1 ? '/section/'+props.term.slug : '/'+props.term.slug} className="basic-button" key={props.i}>
            <img src={img['default']} alt={props.term.slug} /> {props.term['title-'+lang]}
        </Link>
    )


}

export default BasicButton
