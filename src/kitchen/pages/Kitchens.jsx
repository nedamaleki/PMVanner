import { useContext } from 'react';
import {KitchenDataContext} from './../../shared/context/ReferenceDataContext';
import KitchensList from '../components/KitchensList';

const Kitchens = () => {
  const KITCHENS = useContext(KitchenDataContext)
  return (
          <KitchensList items={KITCHENS.KITCHENS} />
  );
};

export default Kitchens;
