import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ScaleItem.css';

const ScaleItem = props => {
  return (
    <li className="kitchen-item">
      <Card className="kitchen-item__content">
        <Link to={`/${props.id}/ScaleView`}>
          <div className="kitchen-item__image">
            <Avatar image={props.image} alt={props.scaleNo} />
          </div>
          <div className="kitchen-item__info">
            <h2>{props.type}-{props.brand}</h2>
            <h5>
               No:{props.scaleNo}   Max : {props.maxWeight}Kg 
            </h5>
            <h5>
              {props.kitchenName} 
            </h5>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default ScaleItem;
