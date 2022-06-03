import Card from "../../shared/components/UIElements/Card";
import './KitchenView.css';
import Button from './../../shared/components/FormElements/Button'
import { useContext, useState } from "react";
import Modal from "./../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { KitchenDataContext } from "../../shared/context/ReferenceDataContext";
//import Map from "../../shared/UIElements/Map";
import { useNavigate } from "react-router-dom";


const KitchenView = () => {

    const auth=useContext(AuthContext);
    const [showMap,setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const kitId = useParams().kitchenId;
    const kitchen = useContext(KitchenDataContext);
    const thisKit = kitchen.KITCHENS.find(k=>k.id === kitId);
    let navigate= useNavigate();
    const openMapHandler =()=> setShowMap(true);
    const closeMapHandler =()=> setShowMap(false);
    const showDeleteWarningHandler =()=> setShowConfirmModal(true);
    const cancelDeleteHandler =()=> setShowConfirmModal(false);
    const confirmDeleteHandler =()=>{
          const index = kitchen.KITCHENS.indexOf(thisKit);
          kitchen.KITCHENS.splice(index,1);
          setShowConfirmModal(false);
          navigate('/kitchens',{replace: true});
    }
     return (<>
     <div className="place-list center">
            <Modal show={showMap} 
                   onCancel={closeMapHandler} 
                   header={thisKit.address}
                   contentClass="place-item__modal-content"
                   footerClass ="place-item__modal-actions"
                   footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                <div className="map-container">
                    {/* <Map center={thisKit.coordinates} zoom={16}/> */}
                    <h2>This is a Map</h2>
                </div>      
            </Modal> 
            <Modal show={showConfirmModal}
                   onCancel={cancelDeleteHandler} 
                   header="Are you sure?" 
                   footerClass="place-item__modal-actions"
                   footer={<>
                           <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                           <Button danger onClick={confirmDeleteHandler}> DELETE</Button> 
                   </>}>
                <p>Do you want to proceed and delete this kitchen? Please note that it 
                    cant be undone thereafter. </p>
            </Modal>          
            <li className="place-item">
              <Card className="place-item__content">  
                <div className="place-item__image">
                    <img src={thisKit.image} alt={thisKit.kitchenNo}/>
                </div>
                <div className="place-item__info">
                    <h2>{thisKit.name}</h2>
                    <h3>NO:{thisKit.kitchenNo}</h3>
                    <h3>{thisKit.address}</h3>
                    <p>{thisKit.tel}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                    {auth.isLoggedIn && (<Button to={`/kitchens/${thisKit.id}`}>EDIT</Button>)}
                    {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>)}
                    <Button inverse onClick={()=>{navigate('/kitechens', {replace:true})}}>CANCEL</Button>
                    
                </div>
             </Card>
            </li>
            
    </div>       
    </>  );
}
 
export default KitchenView;