import { useContext } from 'react';
import {KitchenDataContext} from './../../shared/context/ReferenceDataContext';

import KitchensList from '../components/KitchensList';
import Button from '../../shared/components/FormElements/Button'
import { useNavigate } from 'react-router-dom';

const KitchenOP = () => {
  const KITCHENS = useContext(KitchenDataContext);
  KITCHENS.workStatusOnKitchen="KITCHEN";
  const navigate=useNavigate();
    return (
       <>
            <KitchensList items={KITCHENS.KITCHENS} />
            <div className="center">
            <Button type="submit" onClick={()=>{navigate('/kitchens/new')}}>NEW KITCHEN</Button>
            </div>
       </>

  )
};

export default KitchenOP;