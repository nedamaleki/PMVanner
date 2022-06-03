import React from 'react';
import { Link } from 'react-router-dom';

// import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ReasonItem.css';

const ReasonItem = props => {
  return (
    <li className="kitchen-item">
      <Card className="kitchen-item__content">
        <Link to={`/${props.id}/ReasonView`}>
          {/* <div className="kitchen-item__image">
            <Avatar image={props.image} alt={props.description} />
          </div> */}
          <div className="kitchen-item__info">
            <h2>{props.description}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default ReasonItem;
