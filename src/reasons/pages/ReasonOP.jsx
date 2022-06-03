import { useContext } from 'react';
import {ReasonDataContext} from './../../shared/context/ReferenceDataContext';

import ReasonsList from '../components/ReasonsList';
import Button from '../../shared/components/FormElements/Button'
import { useNavigate } from 'react-router-dom';

const ReasonOP = () => {
  const reason = useContext(ReasonDataContext);
  const navigate=useNavigate();
    return (
       <>
            <ReasonsList items={reason.REASONS} />
            <div className="center">
            <Button type="submit" onClick={()=>{navigate('/reasons/new')}}>NEW REASON</Button>
            </div>
       </>

  )
};

export default ReasonOP;