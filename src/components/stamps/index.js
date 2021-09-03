import React from 'react'
import RNT from 'assets/images/rnt.png'
import BIO from 'assets/images/bio.png'

export default function Stamps(props) {
    console.log(props.rnt);
    return (
        <div className={props.innerClass}>
            {
                parseInt(props.rnt) ? <img src={RNT} alt="RNT" /> : null
            }
            {
                parseInt(props.bio) ? <img src={BIO} alt="Biosecurity" /> : null
            }

        </div>
    )
}