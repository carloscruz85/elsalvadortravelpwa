import axios from 'axios'

const api = axios.create({
    baseURL: 'https://elsalvador.travel/wp-json/ccruz85/v2/estpwa/'
})

export const getData = () => api.get().then( res => res.data )