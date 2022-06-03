import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './KitchenItem.css';

const KitchenItem = props => {
  return (
    <li className="kitchen-item">
      <Card className="kitchen-item__content">
        <Link to={`/${props.id}/kitchenView`}>
          <div className="kitchen-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="kitchen-item__info">
            <h2>{props.name}</h2>
            <h4>
              {props.kitchenNo} 
            </h4>
            <h4>
              {props.address}-{props.tel} 
            </h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default KitchenItem;
