export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_DATA':
            // console.log(state);
        return {
            ...state,
            data: action.data,
            terms: action.data.terms,
            filtered: [],
            destinations: Object.entries(action.data.destinations),
            services: Object.entries(action.data.services)
        }

        case 'UPDATE_VALUE_TERMS':
            // console.log(state.filtered);
            let temp = state.terms;

            let value = !temp[action.term].childs[action.childId].value
            temp[action.term].childs[action.childId].value = value

            let pool = state.pool
            let idTemp = parseInt(action.childId, 10);
            if( value ){
                pool.push( idTemp )
            }else{
                let index = pool.indexOf(idTemp);
                if (index > -1) {
                    pool.splice(index, 1);
                  }
            }

            //filter destinations
            let tempDestinations = Object.entries( state.data.destinations )
            let destinations = tempDestinations.filter( item => {
                let result  = item[1].terms.reduce( (total, current) => {
                    if( pool.includes( current.term_id ) ){
                        // console.log(item[1]);
                        return total + 1
                    }else{
                        return total
                    }
                }, [] )


                if( result > 0){
                    return item[1]
                }
                else{
                    return null
                }
            }  )

            // console.log(state.pool.length);

            if( state.pool.length === 0 ){
                destinations = state.data.destinations
            }

            return {
                ...state,
                terms: temp,
                pool: pool,
                filtered: destinations
            }

            case 'CHANGE_LANG':
            let lang = ''
            if( state.lang === 'en' ) lang = 'es'; else lang = 'en'
            return {
                ...state,
                lang: lang
            }

        default: return state
    }
}