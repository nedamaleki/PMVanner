import Card from "../../shared/components/UIElements/Card";
import './ScaleView.css';
import Button from './../../shared/components/FormElements/Button'
import React,{ useContext, useState } from "react";
import Modal from "./../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { ScaleDataContext } from "../../shared/context/ReferenceDataContext";
//import Map from "../../shared/UIElements/Map";
import { useNavigate } from "react-router-dom";


const ScaleView = () => {

    const auth=useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const SId = useParams().scaleId;
    const scale = useContext(ScaleDataContext);
    const thisS = scale.SCALES.find(s=>s.id === SId);
    let navigate= useNavigate();
    const showDeleteWarningHandler =()=> setShowConfirmModal(true);
    const cancelDeleteHandler =()=> setShowConfirmModal(false);
    const confirmDeleteHandler =()=>{
         // console.log('DELETING....');
          const index = scale.SCALES.indexOf(thisS);
          scale.SCALES.splice(index,1);
          setShowConfirmModal(false);
          navigate('/scales',{replace: true});
    }
     return (<>
     <div className="place-list center">
            <Modal show={showConfirmModal}
                   onCancel={cancelDeleteHandler} 
                   header="Are you sure?" 
                   footerClass="place-item__modal-actions"
                   footer={<>
                           <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                           <Button danger onClick={confirmDeleteHandler}> DELETE</Button> 
                   </>}>
                <p>Do you want to proceed and delete this Scale? Please note that it 
                    cant be undone thereafter. </p>
            </Modal>          
            <li className="place-item">
              <Card className="place-item__content">  
                <div className="place-item__image">
                    <img src={thisS.image} alt={thisS.scaleNo}/>
                </div>
                <div className="place-item__info">
                    <h2>{thisS.type}-{thisS.brand}</h2>
                    <h3>
                    No:{thisS.scaleNo}   Max : {thisS.maxWeight}Kg 
                    </h3>
                    <h3>
                    {thisS.kitchenName} 
                    </h3>
                </div>
                <div className="place-item__actions">
                    {auth.isLoggedIn && (<Button to={`/scales/${thisS.id}`}>EDIT</Button>)}
                    {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>)}
                    <Button inverse onClick={()=>{navigate('/scales', {replace:true})}}>CANCEL</Button>
                    
                </div>
             </Card>
            </li>
            
    </div>       
    </>  );
}
 
export default ScaleView;