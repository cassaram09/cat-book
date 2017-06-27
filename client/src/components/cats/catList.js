import React, {PropTypes} from 'react';

const catList = ({cats}) => {
  return(

    <ul className='list-group'>
      {cats.map(cat => (
        <li className="list-group-item" key={cat.id}>
          {cat.name}
        </li>
      ))}
    </ul>
  )
};

catList.propTypes = {
  cats: PropTypes.array.isRequired
}

export default catList;