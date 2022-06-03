import { useContext } from 'react';
import {MaterialTypeDataContext} from './../../shared/context/ReferenceDataContext';

import MaterialTypesList from '../components/MaterialTypesList';
import Button from '../../shared/components/FormElements/Button'
import { useNavigate } from 'react-router-dom';

const MaterialTypeOP = () => {
  const materialType = useContext(MaterialTypeDataContext);
  const navigate=useNavigate();
    return (
       <>
            <MaterialTypesList items={materialType.MATERIALTYPS} />
            <div className="center">
            <Button type="submit" onClick={()=>{navigate('/materialTypes/new')}}>NEW MATERIAL</Button>
            </div>
       </>

  )
};

export default MaterialTypeOP;