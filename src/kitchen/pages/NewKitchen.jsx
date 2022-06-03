import React, { useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewKitchen.css';
import { useNavigate } from 'react-router-dom';
import {KitchenDataContext} from './../../shared/context/ReferenceDataContext';

const NewKitchen = () => {
  const kit = useContext(KitchenDataContext);
 // const location=useLocation();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      kitchenNo: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      tel: {
        value: '',
        isValid: false
      },
    },
    false
  );
  let navigate=useNavigate();
  const kitchenSubmitHandler = event => {
    event.preventDefault();
   // console.log(formState.inputs); // send this to the backend!
    kit.addItemKitchen(formState.inputs);
    navigate('/kitchens',{replace:true});
  };
 
  return (
    <form className="scale-form" onSubmit={kitchenSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Kitchen Name:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
        onInput={inputHandler}
      />
      <Input
        id="kitchenNo"
        element="input"
        type="text"
        label="Kitchen NO:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid kitchen NO."
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
        id="address"
        element="textarea"
        label="Address:"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Addreass (at least 5 character)."
        onInput={inputHandler}
      />
      <Input
        id="tel"
        element="input"
        type="text"
        label="Tel:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid telephone number."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD KITCHEN
      </Button>
      <Button inverse type="submit" onClick={()=>{navigate('/kitchens',{replace:true})}}>CANCEL </Button>
    </form>
  );
};

export default NewKitchen;
