import React, { useContext, useEffect, useState} from 'react';
import moment from 'moment'
import './ScaleView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import BSModal from './BSModal';
import { OperationDataContext } from '../../shared/context/ReferenceDataContext';

const ShowList = (props) => {
    var message='';
    const scaleId = props.scaleId;
    const operation = useContext(OperationDataContext);
    let selectedOperations = operation.OPERATIONS.filter(s=>s.scaleId===scaleId);
    const navigate=useNavigate();
    const [oper, setOper]=useState(selectedOperations);

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const showDeleteWarningHandler =()=>setShowConfirmModal(true);
    const cancelDeleteHandler =()=> setShowConfirmModal(false);
    const confirmDeleteHandler =()=>{
        const index = 0;//props.operations.indexOf(thisOper);
       // props.operations.remove(index,1);
        setShowConfirmModal(false);
        navigate(`/selectedScale/${scaleId}`,{replace:true});
  }
  const [showConfirmModalAll, setShowConfirmModalAll] = useState(false);
  const showDeleteAllWarningHandler =()=>setShowConfirmModalAll(true);
  const cancelDeleteAllHandler =()=> setShowConfirmModalAll(false);
  
  const confirmDeleteAllHandler =()=>{
        operation.deleteAllItemOperations(scaleId);
        setShowConfirmModalAll(false);
        selectedOperations =operation.OPERATIONS.filter(s=>s.scaleId===scaleId);
        navigate(`/selectedScale/${scaleId}`,{replace:true});
}

 useEffect(() => {
    setOper(selectedOperations);
 },[selectedOperations]);

 let content='';   
 if(selectedOperations.length===0 || selectedOperations==='undefined'){
    message="There is no Measurement for this Scale."
    content=(    
       <div className='place-item'>
             {message &&<div className="alert alert-success">{message}</div>}
        </div>
       );
    }
  else {
      content =( <table className="table table-striped table-hover caption-top">
      <caption>Measured Records of Scale {selectedOperations[0].scaleNo}</caption>
      <thead className="table-dark">
          <tr>
              <th c>#</th>
              <th scope="col">KITCHEN NAME</th>
              <th scope="col">SCALE NO</th>
              <th scope="col">MATERIAL</th>
              <th scope="col">REASON</th>
              <th scope="col">WEIGHT</th>
              <th scope="col">DATE</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
          </tr>
      </thead>
      <tbody>
          { oper.map((item,index)=>
                                  <tr key={item.id}>
                                       <th scope="row">{index+1}</th>
                                      <td> {item.kitchenName}</td>
                                      <td> {item.scaleNo.toString()}</td>
                                      <td> {item.materialTypeDescription}</td>
                                      <td> {item.reasonDescription}</td>
                                      <td> {item.weight}</td>
                                      <td> {moment(item.dateTime).format("YYYY-MM-DD")}</td>
                                      <td><button className='btn btn-info' onClick={()=>{navigate(`/updateMeasure/${item.id}`)}}> Update</button></td>
                                      <td><button className='btn btn-warning'  type="submit" onClick={()=>{}}> Delete</button></td>
                                  </tr>
                                )}
          
      </tbody>
  </table>);
  }  
    return ( 
        <div className='place-item'>
            <BSModal show={showConfirmModal}
                    onCancel={cancelDeleteHandler} 
                   header="Are you sure?" 
                   footerClass="place-item__modal-actions"
                   footer={<>
                       <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                       <Button danger onClick={confirmDeleteHandler}> DELETE</Button> 
                   </>}
                >
                <p>Do you want to proceed and delete this Measurement? Please note that it 
                    cant be undone thereafter. </p>
            </BSModal> 
            <BSModal show={showConfirmModalAll}
                    onCancel={cancelDeleteAllHandler} 
                   header="Are you sure?" 
                   footerClass="place-item__modal-actions"
                   footer={<>
                       <Button inverse onClick={cancelDeleteAllHandler}>CANCEL</Button>
                       <Button danger onClick={confirmDeleteAllHandler}> DELETE</Button> 
                   </>}
                >
                <p>Do you want to proceed and delete ALL Measurementa? Please note that it 
                    cant be undone thereafter. </p>
            </BSModal>             
               
                <div className="table-responsive">
                  {content}
                <div className="col">
                    <button className="btn btn-success" onClick={()=>{navigate(`/newMeasure/${scaleId}`)}}>ADD INFO</button>
                </div>
                <br/>
                <div className="col">
                    <button className="btn btn-danger" onClick={showDeleteAllWarningHandler}>DELETE ALL RECORDS</button>
                </div>
                <br/>
                <br/>
                <Button inverse onClick={()=>{navigate(`/selectedKitchen/${selectedOperations[0].kitchenId}`)}}>BACK TO SCALES</Button>
                </div>
                
            </div>
     );
}
 
export default ShowList;