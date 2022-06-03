import React from 'react';

import ScaleItem from './ScaleItem';
import Card from '../../shared/components/UIElements/Card';
import './ScalesList.css';

const ScalesList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Scale found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="reasons-list">
      {props.items.map(s => (
        <ScaleItem
          key={s.id}
          id={s.id}
          image={s.image}
          type={s.type}
          brand={s.brand}
          maxWeight={s.maxWeight}
          scaleNo = {s.scaleNo}
          kitchenId={s.kitchenId}
          kitchenName ={s.kitchenName}
        />
      ))}
    </ul>
  );
};

export default ScalesList;
