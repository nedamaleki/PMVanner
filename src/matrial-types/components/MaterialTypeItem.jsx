import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './MaterialTypeItem.css';

const MaterialTypeItem = props => {
  return (
    <li className="kitchen-item">
      <Card className="kitchen-item__content">
        <Link to={`/${props.id}/MaterialTypeView`}>
          <div className="kitchen-item__image">
            <Avatar image={props.image} alt={props.description} />
          </div>
          <div className="kitchen-item__info">
            <h2>{props.description}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default MaterialTypeItem;
