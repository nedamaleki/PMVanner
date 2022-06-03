import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE,} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './UpdateScale.css';
import {ScaleDataContext, KitchenDataContext} from './../../shared/context/ReferenceDataContext';

const UpdateScale = () => {

  const scales = useContext(ScaleDataContext);
  const kitchen= useContext(KitchenDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const SId = useParams().scaleId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      type: {value: '', isValid: false },
      brand:{value: '', isValid: false },
      maxWeight:{value: '', isValid: false },
      scaleNo:{value: '', isValid: false },
      kitchenId:{value: '', isValid: false },
      kitchenName:{value: '', isValid: false },
      image: {value: '',isValid: false},
    },
    false
  );
  
  let selectKit =kitchen.KITCHENS.map((kitchenItem) => ({
    value: kitchenItem.id,
    label: kitchenItem.name,
      }));

  const identifiedScale = scales.SCALES.find(s => s.id === SId);
  //const theKit = kitchen.KITCHENS.find(k=>k.id.toString()=== identifiedScale.kitchenId);
  useEffect(() => {
    if (identifiedScale) {
     
      setFormData(
        {
          type: {
            value: identifiedScale.type,
            isValid: true
          },
          brand: {
            value: identifiedScale.brand,
            isValid: true
          },
          maxWeight: {
            value: identifiedScale.maxWeight,
            isValid: true
          },
          scaleNo: {
            value: identifiedScale.scaleNo,
            isValid: true
          },
          kitchenId: {
            value: identifiedScale.kitchenId,
            isValid: true
          },
          kitchenName: {
            value: identifiedScale.kitchenName,
            isValid: true
          },
         
            image: {
            value: identifiedScale.image,
            isValid: true
          },
       },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedScale]);

  const scaleUpdateSubmitHandler = event => {
    event.preventDefault();
    scales.updateItemScale(formState.inputs,SId);
    navigate('/scales',{replace:true});
  };

  if (!identifiedScale) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find SCALE Item!</h2>
        </Card>
      </div>
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
    <form className="reason-form" onSubmit={scaleUpdateSubmitHandler}>
      <Input
        id="type"
        element="input"
        type="text"
        label="TYPE:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid TYPE."
        onInput={inputHandler}
        initialValue={formState.inputs.type.value}
        initialValid={formState.inputs.type.isValid}
      />
      <Input
        id="brand"
        element="input"
        type="text"
        label="BRAND:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid BRAND."
        onInput={inputHandler}
        initialValue={formState.inputs.brand.value}
        initialValid={formState.inputs.brand.isValid}
      />
       <Input
        id="image"
        element="input"
        type="text"
        label="Image:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Image URL."
        onInput={inputHandler}
        initialValue={formState.inputs.image.value}
        initialValid={formState.inputs.image.isValid}
      />
      <Input
        id="maxWeight"
        element="input"
        type="text"
        label="Max Weight:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Max Weight."
        onInput={inputHandler}
        initialValue={formState.inputs.maxWeight.value}
        initialValid={formState.inputs.maxWeight.isValid}
      />
      <Input
        id="scaleNo"
        element="input"
        type="text"
        label="Scale No:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Scale No."
        onInput={inputHandler}
        initialValue={formState.inputs.scaleNo.value}
        initialValid={formState.inputs.scaleNo.isValid}
      /> 
      <Input
        id="kitchenName"
        element="select"
        type="text"
        label="Kitchen Name:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please select a Kitchen Name."
        onInput={inputHandler}
        initialValue={formState.inputs.kitchenName.value}
        initialValid={formState.inputs.kitchenName.isValid}
        options={selectKit}
      />
     
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE SCALE
      </Button>
      <Button type="submit" onClick={()=>{navigate('/scales',{replace:true})}}>CANCEL</Button>
    </form>
  );
};

export default UpdateScale;
