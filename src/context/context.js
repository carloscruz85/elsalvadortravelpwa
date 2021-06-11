import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [globalData, dispatch] = useReducer(reducer, {
      data: null,
      lang: 'en',
      terms: [],
      filtered: [],
      pool: [],
      destinations: [],
      services: []
    });


  return (
    <DataContext.Provider value={{ globalData, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
