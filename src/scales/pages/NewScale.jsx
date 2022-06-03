import React, { useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewScale.css';
import { useNavigate } from 'react-router-dom';
import {KitchenDataContext, ScaleDataContext} from './../../shared/context/ReferenceDataContext';

const NewScale = () => {
  const scale = useContext(ScaleDataContext);
  const kitchen= useContext(KitchenDataContext);
  
  // let selectKit =[];
  //     for (let i=0; i<kitchen.KITCHENS.length; i++){
  //       selectKit.push({
  //         value: kitchen.KITCHENS[i].id,
  //         label: kitchen.KITCHENS[i].name,
  //     });
  let selectKit =kitchen.KITCHENS.map((kitchenItem) => ({
        value: kitchenItem.id,
        label: kitchenItem.name,
          }));

  const [formState, inputHandler] = useForm(
    {
      type: {
        value: '',
        isValid: false
      },
      brand: {
        value: '',
        isValid: false
      },
      maxWeight: {
        value: '',
        isValid: false
      },
      scaleNo: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      },
      kitchenName: {
        value: '',
        isValid: true
      },
      kitchenId: {
        value: '',
        isValid: true
      },
    },
    false
  );
  let navigate=useNavigate();
  const scaleSubmitHandler = event => {
    event.preventDefault();
   scale.addItemScale(formState.inputs);
    navigate('/scales',{replace:true});
  };
 
  return (
    <form className="reason-form" onSubmit={scaleSubmitHandler}>
      <Input
        id="type"
        element="input"
        type="text"
        label="TYPE :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Type."
        onInput={inputHandler}
      />
      <Input
        id="brand"
        element="input"
        type="text"
        label="BRAND :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Brand."
        onInput={inputHandler}
      />
      <Input
        id="image"
        element="input"
        type="text"
        label="Image:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Image URL."
        onInput={inputHandler}
      />
      <Input
        id="maxWeight"
        element="input"
        type="text"
        label="Max Weight :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Maximum Weight."
        onInput={inputHandler}
      />
      <Input
        id="scaleNo"
        element="input"
        type="text"
        label="Scale No:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid number as Scale No."
        onInput={inputHandler}
      />
      <Input
        id="kitchenName"
        element="select"
        type="text"
        label="Kitchen Name:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please select a Kitchen Name."
        onInput={inputHandler}
        options={selectKit}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD SCALE
      </Button>
      <Button inverse type="submit" onClick={()=>{navigate('/scales',{replace:true})}}>CANCEL </Button>
    </form>
  );
};

export default NewScale;
