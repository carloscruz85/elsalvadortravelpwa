import React from 'react'
import Iframe from 'react-iframe'

const StreetView = (props) => {
    return (
        <div>
            <Iframe url="https://www.viewmake.com/es/view/be6a7851e42-be3c9757b14f7eb854eaf"
                width="450px"
                height="450px"
                className="myClassname"
                display="initial"
                position="relative"/>
            {/* {props.streetview} */}
        </div>
    )
}

export default StreetView
