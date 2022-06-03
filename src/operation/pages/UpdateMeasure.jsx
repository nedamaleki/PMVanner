import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE,} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './UpdateMeasure.css';
import {OperationDataContext, MaterialTypeDataContext, ReasonDataContext} from './../../shared/context/ReferenceDataContext';

const UpdateMeasuer = () => {

  const operation = useContext(OperationDataContext);
  const materialType= useContext(MaterialTypeDataContext);
  const reason= useContext(ReasonDataContext);
  const operId = useParams().operId;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      kitchenId:{value: '', isValid: false },
      kitchenName:{value: '', isValid: false },
      scaleId:{value: '', isValid: false },
      scaleType:{value: '', isValid: false },
      scaleNo:{value: '', isValid: false },
      materialTypeId:{value: '', isValid: false },
      materialTypeDescription:{value: '', isValid: false },
      reasonId:{value: '', isValid: false },
      reasonDescription:{value: '', isValid: false },
      weight:{value: '', isValid: false },
      dateTime:{value: '', isValid: false } 
    },
    false
  );
  
  let selectMaterials =materialType.MATERIALTYPS.map((materialItem) => ({
    value: materialItem.id,
    label: materialItem.description,
      }));
let  selectReasons=reason.REASONS.map((reasonItem) => ({
   value: reasonItem.id,
   label: reasonItem.description,
     }));
  const identifiedOper = operation.OPERATIONS.find(o => o.id === operId);
  useEffect(() => {
    if (identifiedOper) {
     
      setFormData(
        {
          kitchenId:{value: identifiedOper.kitchenId, isValid: true },
          kitchenName:{value: identifiedOper.kitchenName, isValid: true },
          scaleId:{value: identifiedOper.scaleId, isValid: true },
          scaleType:{value: identifiedOper.scaleType, isValid: true },
          scaleNo:{value: identifiedOper.scaleNo, isValid: true },
          materialTypeId:{value: identifiedOper.materialTypeId, isValid: true },
          materialTypeDescription:{value: identifiedOper.materialTypeDescription, isValid: true },
          reasonId:{value: identifiedOper.reasonId, isValid: true },
          reasonDescription:{value: identifiedOper.reasonDescription, isValid: true },
          weight:{value: identifiedOper.weight, isValid: true },
          dateTime:{value: identifiedOper.dateTime, isValid: true } 
       },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedOper]);

  const operationUpdateSubmitHandler = event => {
    event.preventDefault();
    operation.updateItemOperation(formState.inputs,operId);
    navigate(`/selectedScale/${identifiedOper.scaleId}`,{replace:true});
  };

  if (!identifiedOper) {
    return (
      <>
      <div className="center">
        <Card>
          <h2>Could not find record Item!</h2>
        </Card>
      </div>
      <div>
      <Button type="submit" onClick={()=>{navigate(`/selectedScale/${identifiedOper.scaleId}`,{replace:true})}}>BACK TO LIST</Button>
      </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="reason-form" onSubmit={operationUpdateSubmitHandler}>
      <Input
          id="kitchenName"
          element="input"
          type="text"
          label="Kitchen Name:"
          onInput={inputHandler}
          initialValue={identifiedOper.kitchenName}
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
          initialValue={identifiedOper.scaleNo}
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
          initialValue={formState.inputs.materialTypeDescription.value}
          initialValid={formState.inputs.materialTypeDescription.isValid}
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
          initialValue={formState.inputs.weight.value}
          initialValid={formState.inputs.weight.isValid}
        />
        <Input
          id="reasonDescription"
          element="select"
          type="text"
          label="REASON:"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please select a REASON."
          onInput={inputHandler}
          initialValue={formState.inputs.reasonDescription.value}
          initialValid={formState.inputs.reasonDescription.isValid}
          options={selectReasons}

        />
      
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE MEASURE
      </Button>
      <Button type="submit" onClick={()=>{navigate(`/selectedScale/${identifiedOper.scaleId}`,{replace:true})}}>CANCEL</Button>
    </form>
  );
};

export default UpdateMeasuer;
