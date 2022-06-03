import React,{ useContext } from 'react';
import {ScaleDataContext} from './../../shared/context/ReferenceDataContext';

import ScalesList from '../components/ScalesList';
import Button from '../../shared/components/FormElements/Button'
import { useNavigate } from 'react-router-dom';

const ScaleOP = () => {
  const scale = useContext(ScaleDataContext);
  const navigate=useNavigate();
    return (
       <>
            <ScalesList items={scale.SCALES} />
            <div className="center">
            <Button type="submit" onClick={()=>{navigate('/scales/new')}}>NEW Scale</Button>
            </div>
       </>

  )
};

export default ScaleOP;