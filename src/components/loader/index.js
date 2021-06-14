import React from 'react'
import './index.scss'
import Logo from '../../assets/images/woman.png'

function Loader(props) {
    // console.log(props);
    return (
        <div className="loader-container">
           <div className="aro">
            </div>
            <img src={Logo} alt="loader"/>
            <div className="msg">{props.msg}</div>
        </div>
    )
}

export default Loader
