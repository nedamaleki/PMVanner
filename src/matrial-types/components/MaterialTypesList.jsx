import React from 'react';

import MaterialTypeItem from './MaterialTypeItem';
import Card from '../../shared/components/UIElements/Card';
import './MaterialTypesList.css';

const MaterialTypesList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No MaterialType found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="materialtypes-list">
      {props.items.map(mt => (
        <MaterialTypeItem
          key={mt.id}
          id={mt.id}
          image={mt.image}
          description={mt.description}
        />
      ))}
    </ul>
  );
};

export default MaterialTypesList;
