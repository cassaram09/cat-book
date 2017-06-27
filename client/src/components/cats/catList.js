import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const catList = ({cats}) => {
  return(

    <ul className='list-group'>
      {cats.map(cat => (
        <li className="list-group-item" key={cat.id}>
          <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
        </li>
      ))}
    </ul>
  )
};

catList.propTypes = {
  cats: PropTypes.array.isRequired
}

export default catList;