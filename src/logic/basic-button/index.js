import {Link} from 'react-router-dom'

export default function basicButton(term, i) {
    const img = require('../../assets/images/'+term[1].slug+'.png');
    // console.log(term[1].slug, '../../assets/images/'+term[1].slug+'.png');
    return (
        <Link to={'/section/'+term[1].slug} className="basic-button" key={i}>
            <img src={img['default']} alt={term[1].slug}/>
        </Link>
    )
  }
  