import React from 'react';

import ReasonItem from './ReasonItem';
import Card from '../../shared/components/UIElements/Card';
import './ReasonsList.css';

const ReasonsList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Reason found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="reasons-list">
      {props.items.map(r => (
        <ReasonItem
          key={r.id}
          id={r.id}
          //image={r.image}
          description={r.description}
        />
      ))}
    </ul>
  );
};

export default ReasonsList;
