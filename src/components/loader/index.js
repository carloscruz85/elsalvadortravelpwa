import React from 'react'
import './index.scss'
// import Logo from '../../assets/images/woman.png'
import { CircularProgress } from '@material-ui/core';

function Loader(props) {
    // console.log(props);
    return (
        <div className="loader-container">
           <CircularProgress />
            <div className="msg">{props.msg}</div>
        </div>
    )
}

export default Loader
