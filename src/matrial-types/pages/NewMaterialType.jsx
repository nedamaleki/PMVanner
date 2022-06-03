import React, { useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewMaterialType.css';
import { useNavigate } from 'react-router-dom';
import {MaterialTypeDataContext} from './../../shared/context/ReferenceDataContext';

const NewMaterialType = () => {
  const Mt = useContext(MaterialTypeDataContext);
  const [formState, inputHandler] = useForm(
    {
      description: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      },
    },
    false
  );
  let navigate=useNavigate();
  const materialTypeSubmitHandler = event => {
    event.preventDefault();
   // console.log(formState.inputs); // send this to the backend!
    Mt.addItemMaterialType(formState.inputs);
    navigate('/materialTypes',{replace:true});
  };
 
  return (
    <form className="materialtype-form" onSubmit={materialTypeSubmitHandler}>
      <Input
        id="description"
        element="input"
        type="text"
        label="Material Type :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Description."
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
      <Button type="submit" disabled={!formState.isValid}>
        ADD MATERIAL
      </Button>
      <Button inverse type="submit" onClick={()=>{navigate('/materialTypes',{replace:true})}}>CANCEL </Button>
    </form>
  );
};

export default NewMaterialType;
