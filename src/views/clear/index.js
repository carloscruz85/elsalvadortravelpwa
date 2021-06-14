import React, {useEffect} from 'react'



const Clear = () => {

    useEffect(() => {
        localStorage.removeItem('ws-data');
    }, [])

    return (
        <div className="container">
            Clearing
        </div>
    )
}

export default Clear
