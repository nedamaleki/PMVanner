import Card from "../../shared/components/UIElements/Card";
import './ReasonView.css';
import Button from './../../shared/components/FormElements/Button'
import { useContext, useState } from "react";
import Modal from "./../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { ReasonDataContext } from "../../shared/context/ReferenceDataContext";
//import Map from "../../shared/UIElements/Map";
import { useNavigate } from "react-router-dom";


const ReasonView = () => {

    const auth=useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const RId = useParams().reasonId;
    const reason = useContext(ReasonDataContext);
    const thisR = reason.REASONS.find(r=>r.id === RId);
    let navigate= useNavigate();
    const showDeleteWarningHandler =()=> setShowConfirmModal(true);
    const cancelDeleteHandler =()=> setShowConfirmModal(false);
    const confirmDeleteHandler =()=>{
         // console.log('DELETING....');
          const index = reason.REASONS.indexOf(thisR);
          reason.REASONS.splice(index,1);
          setShowConfirmModal(false);
          navigate('/reasons',{replace: true});
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
                <p>Do you want to proceed and delete this REASON? Please note that it 
                    cant be undone thereafter. </p>
            </Modal>          
            <li className="place-item">
              <Card className="place-item__content">  
                {/* <div className="place-item__image">
                    <img src={thisMt.image} alt={thisMt.description}/>
                </div> */}
                <div className="place-item__info">
                    <h2>{thisR.description}</h2>
                </div>
                <div className="place-item__actions">
                    {auth.isLoggedIn && (<Button to={`/reasons/${thisR.id}`}>EDIT</Button>)}
                    {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>)}
                    <Button inverse onClick={()=>{navigate('/reasons', {replace:true})}}>CANCEL</Button>
                    
                </div>
             </Card>
            </li>
            
    </div>       
    </>  );
}
 
export default ReasonView;