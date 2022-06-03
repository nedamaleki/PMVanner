import { useContext } from 'react';
import {ReasonDataContext} from './../../shared/context/ReferenceDataContext';
import ReasonsList from './../components/ReasonsList';

const Reasons = () => {
  const reasons = useContext(ReasonDataContext)
  return (
          <ReasonsList items={reasons.REASONS} />
  );
};

export default Reasons;
