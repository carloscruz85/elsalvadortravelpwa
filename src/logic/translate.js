import {useStore} from 'store/store'

const Translate = (props) => {
const {lang} = useStore()
    switch (lang) {
        case 'es':
            return props[1]
            // break;
    
        default:
            return props[0]
            // break;
    }
}

export default Translate
