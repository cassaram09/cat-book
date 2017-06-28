import React, {PropTypes} from 'react';

// presentational component that renders a list of hobbies

const HobbyList = ({hobbies}) => {  
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map(hobby => 
            <li key={hobby.id}>{hobby.description}</li>
          )}
      </ul>
    </div>
  );
};

HobbyList.propTypes = {  
  hobbies: PropTypes.array.isRequired
};

export default HobbyList; 