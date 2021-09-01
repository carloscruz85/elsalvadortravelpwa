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
    experiences: [],
    setExperiences: (newExperiences) => {
        (
            set( (state) => ({
                experiences: newExperiences
            }) )
        )
    },
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
    },
    setLang : (lang) => {
        set( 
            ()=>({
                lang: lang
            })
         )
    },
    setServices: (newServices) => {
        (
            set(
                ()=>(
                    {
                        services: newServices
                    }
                )
            )
        )
    }
    
})
)

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('My Store',useStore);
  }