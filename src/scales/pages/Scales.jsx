import { useContext } from 'react';
import {ScaleDataContext} from './../../shared/context/ReferenceDataContext';
import ScalesList from './../components/ScalesList';

const Scales = () => {
  const scales = useContext(ScaleDataContext)
  return (
          <ScalesList items={scales.SCALES} />
  );
};

export default Scales;
