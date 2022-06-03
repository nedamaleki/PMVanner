import React,{ useContext } from 'react';
import Coverflow from 'react-coverflow';
import {NavLink } from 'react-router-dom';
import { KitchenDataContext } from '../../shared/context/ReferenceDataContext.jsx';
import './Carousel.css';
const CarouselKitchen = () => {
  const kitchens = useContext(KitchenDataContext);
  return (
    <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={true}
      // displayQuantityOfSide={2}
      // navigation={true}
      // enableHeading={true}
      // active={0}
      // media={{
      //   '@media (max-width: 900px)': {
      //     width: '600px',
      //     height: '300px'
      //   },
      //   '@media (min-width: 900px)': {
      //     width: '960px',
      //     height: '600px'
      //   }
      // }}

    >
      
      {kitchens.KITCHENS.map((item, key)=>{
        
       return(<>
                    <div >
                      <NavLink className="startpage" to={`/selectedKitchen/${item.id}`}> 
                            {item.name}
                      </NavLink>
                    </div>
                    <img   key={item.id}  src={item.image}  alt={item.name} style={{ display: "block", width: "100%" }}/>
               </>
                  );
      })}
     
    </Coverflow>
    
  );
};

export default CarouselKitchen;
