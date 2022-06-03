import React from 'react';
import { useParams } from "react-router-dom";
import ShowList from '../components/ShowList';

const MeasureList = () => {
    
    const scaleId = useParams().scaleId;
    
    return ( 
        <>
            <ShowList scaleId={scaleId}/>
        </>
     );
}
 
export default MeasureList;