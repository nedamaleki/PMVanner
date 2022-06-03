// import React,{ useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { ScaleDataContext } from '../../shared/context/ReferenceDataContext';
// import Coverflow from 'react-coverflow';
// import {NavLink } from 'react-router-dom';
// import Card from '../../shared/components/UIElements/Card';
// import './Carousel.css'

// const CarouselScale = () => {
//     const kitchenId = useParams().kitchenId;
//     const scales= useContext(ScaleDataContext);
//     const selectedScales=scales.SCALES.filter(s=>s.kitchenId.toString()===kitchenId);
//     if (selectedScales.length === 0) {
//         return (
//           <div className="center">
//             <Card>
//               <h2>No Scale found.</h2>
//             </Card>
//           </div>
//         );
//       }
//       return (
//         <Coverflow
//           width={960}
//           height={480}
//           displayQuantityOfSide={2}
//           navigation={false}
//           enableHeading={false}
//          >
//           {selectedScales.map((item, key)=>{
        
//        return(<>
//                     <div>
//                       <NavLink className="startpage" to="/"> 
//                             {item.brand}
//                       </NavLink>
//                     </div>
//                     <img   key={item.id}  src={item.image}  alt={item.scaleNo} style={{ display: "block", width: "100%" }}/>
//                </>

//                   );
//       })}
     
//     </Coverflow>
//     );
// }
 
// export default CarouselScale;

import React,{ useContext } from 'react';
import Coverflow from 'react-coverflow';
import {NavLink } from 'react-router-dom';
import { ScaleDataContext } from '../../shared/context/ReferenceDataContext';
import { useParams } from 'react-router-dom';
import './Carousel.css';

const CarouselScale = () => {
  const kitchenId = useParams().kitchenId;
  const scales= useContext(ScaleDataContext);
  const selectedScales=scales.SCALES.filter(s=>s.kitchenId.toString()===kitchenId);
  return (
    <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={true}
    >
      {selectedScales.map((item, key)=>{
       return(<>
                    <div >
                      <NavLink className="startpage" to={`/selectedScale/${item.id}`}> 
                            {item.type}-{item.scaleNo}-{item.brand}
                      </NavLink>
                    </div>
                    <img   key={item.id}  src={item.image}  alt={item.brand} style={{ display: "block", width: "100%" }}/>
               </>
                  );
      })}
     
    </Coverflow>
    
  );
};

export default CarouselScale;
