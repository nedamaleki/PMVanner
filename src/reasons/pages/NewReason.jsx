import React, { useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewReason.css';
import { useNavigate } from 'react-router-dom';
import {ReasonDataContext} from './../../shared/context/ReferenceDataContext';

const NewReason = () => {
  const reason = useContext(ReasonDataContext);
  const [formState, inputHandler] = useForm(
    {
      description: {
        value: '',
        isValid: false
      },
      // image: {
      //   value: '',
      //   isValid: false
      // },
    },
    false
  );
  let navigate=useNavigate();
  const reasonSubmitHandler = event => {
    event.preventDefault();
   // console.log(formState.inputs); // send this to the backend!
   reason.addItemReason(formState.inputs);
    navigate('/reasons',{replace:true});
  };
 
  return (
    <form className="reason-form" onSubmit={reasonSubmitHandler}>
      <Input
        id="description"
        element="input"
        type="text"
        label="REASON :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Reason."
        onInput={inputHandler}
      />
      {/* <Input
        id="image"
        element="input"
        type="text"
        label="Image:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Image URL."
        onInput={inputHandler}
      /> */}
      <Button type="submit" disabled={!formState.isValid}>
        ADD REASON
      </Button>
      <Button inverse type="submit" onClick={()=>{navigate('/reasons',{replace:true})}}>CANCEL </Button>
    </form>
  );
};

export default NewReason;
