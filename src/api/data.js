import React from 'react'
import {useQuery} from 'react-iframe'
import * as api from './dataApi'

const Data = () => {
    const {data} =  useQuery('data', api.getData)
    return (
        <div>
            hi
        </div>
    )
}

export default Data
