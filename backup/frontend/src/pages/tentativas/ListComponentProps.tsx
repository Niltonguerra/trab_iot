import React from 'react';

import {ListComponentProps} from '../types/types'

const ListComponent: React.FC<ListComponentProps> = ({ professor }) => {

    
  return (
    <ul>
      {professor.map((professors) => (
        <li key={professors.id_professor}>{professors.name_professor}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
