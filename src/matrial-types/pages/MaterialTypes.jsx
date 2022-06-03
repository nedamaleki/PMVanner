import { useContext } from 'react';
import {MaterialTypeDataContext} from './../../shared/context/ReferenceDataContext';
import MaterialTypesList from './../components/MaterialTypesList';

const MaterialTypes = () => {
  const MaterialTypes = useContext(MaterialTypeDataContext)
  return (
          <MaterialTypesList items={MaterialTypes.MATERIALTYPS} />
  );
};

export default MaterialTypes;
