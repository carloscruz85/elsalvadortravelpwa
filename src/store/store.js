import create  from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const [useStore] = create( set => ({
    data: [],
    lang: 'en',
    terms: [],
    filtered: [],
    pool: [],
    destinations: [],
    services: [],
    inc: () => 
        set( state => ({
            count: state.count + 1
        }) ),
    setData: (newData) => {
        (
            set( (state) => ({
                data: newData
            }) )
        )
    },
    setTerms: ( newTerms ) => {
        (
            set( ()=>({
                terms: newTerms
            }) )
        )
    },
    setDestinations : (newDestinations) => {
        (
            set( ()=>({
                destinations : newDestinations
            }) 

             )
        )
    }
    
})
)

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('My Store',useStore);
  }