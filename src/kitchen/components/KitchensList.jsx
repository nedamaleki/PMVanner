import React from 'react';

import KitchenItem from './KitchenItem';
import Card from '../../shared/components/UIElements/Card';
import './KitchensList.css';

const KitchensList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No kitchen found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="kitchens-list">
      {props.items.map(kitchen => (
        <KitchenItem
          key={kitchen.id}
          id={kitchen.id}
          image={kitchen.image}
          name={kitchen.name}
          kitchenNo={kitchen.kitchenNo}
          address={kitchen.address}
          tel={kitchen.tel}
        />
      ))}
    </ul>
  );
};

export default KitchensList;
