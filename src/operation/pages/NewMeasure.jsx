import React, { useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewMeasure.css';
import { useNavigate, useParams } from 'react-router-dom';
import {OperationDataContext, MaterialTypeDataContext,ReasonDataContext, ScaleDataContext} from './../../shared/context/ReferenceDataContext';

const NewMeasure = () => {
    const operation = useContext(OperationDataContext);
    const materialType= useContext(MaterialTypeDataContext);
    const reason= useContext(ReasonDataContext);
    const scaleId = useParams().scaleId;
    const scale = useContext(ScaleDataContext); 
    const selectedScale = scale.SCALES.filter(s=>s.id.toString()===scaleId);
    console.log('selectedScale',selectedScale);
    let selectMaterials =materialType.MATERIALTYPS.map((materialItem) => ({
          value: materialItem.id,
          label: materialItem.description,
            }));
    let  selectReasons=reason.REASONS.map((reasonItem) => ({
         value: reasonItem.id,
         label: reasonItem.description,
           }));
  
    const [formState, inputHandler] = useForm(
      {
        weight: {
          value: '',
          isValid: false
        },
        dateTime: {
          value: '',
          isValid: true
        },
        scaleId: {
          value: '',
          isValid: true
        },
        scaleNo: {
          value: '',
          isValid: true
        },
        scaleType: {
            value: '',
            isValid: true
          },
        kitchenName: {
          value: '',
          isValid: true
        },
        kitchenId: {
          value: '',
          isValid: true
        },
        materialTypeDescription: {
            value: '',
            isValid: false
          },
        materialTypeId: {
            value: '',
            isValid: true
          },
        reasonDescription: {
            value: '',
            isValid: false
          },
        reasonId: {
            value: '',
            isValid: true
          },
      },
      false
    );
    let navigate=useNavigate();
    const operationSubmitHandler = event => {
      event.preventDefault();
     operation.addItemOperation(formState.inputs);
      navigate(`/selectedScale/${scaleId}`,{replace:true});
    };
   
    return (
      <form className="reason-form" onSubmit={operationSubmitHandler}>
        <Input
          id="kitchenName"
          element="input"
          type="text"
          label="Kitchen Name:"
          onInput={inputHandler}
          initialValue={selectedScale[0].kitchenName}
          initialValid={true}
          validators={[VALIDATOR_REQUIRE()]}
          disabled={true}
        />
        <Input
          id="scaleNo"
          element="input"
          type="text"
          label="Scale No:"
          onInput={inputHandler}
          initialValue={selectedScale[0].scaleNo}
          initialValid={true}
          validators={[VALIDATOR_REQUIRE()]}
          disabled={true}
        />
         <Input
          id="materialTypeDescription"
          element="select"
          type="text"
          label="Material Type Description:"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please select a Material Type."
          onInput={inputHandler}
          options={selectMaterials}
        />
        <Input
          id="weight"
          element="input"
          type="number"
          label="WEIGHT :"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid Weight."
          onInput={inputHandler}
        />
        <Input
          id="reasonDescription"
          element="select"
          type="text"
          label="REASON:"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please select a REASON."
          onInput={inputHandler}
          options={selectReasons}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD MEASEURE
        </Button>
        <Button inverse type="submit" onClick={()=>{navigate(`/selectedScale/${scaleId}`,{replace:true})}}>CANCEL </Button>
      </form>
    );
  };
 
export default NewMeasure;