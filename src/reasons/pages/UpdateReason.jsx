import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE,} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './UpdateReason.css';
import {ReasonDataContext} from './../../shared/context/ReferenceDataContext';

const UpdateReason = () => {

  const reasons = useContext(ReasonDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const RId = useParams().reasonId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      description: {value: '', isValid: false },
      image: {value: '',isValid: false},
    },
    false
  );

  const identifiedReason = reasons.REASONS.find(r => r.id === RId);

  useEffect(() => {
    if (identifiedReason) {
      setFormData(
        {
          description: {
            value: identifiedReason.description,
            isValid: true
          },
       },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedReason]);

  const reasonUpdateSubmitHandler = event => {
    event.preventDefault();
    reasons.updateItemReason(formState.inputs,RId);
    navigate('/reasons',{replace:true});
  };

  if (!identifiedReason) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find REASON Item!</h2>
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
    <form className="reason-form" onSubmit={reasonUpdateSubmitHandler}>
      <Input
        id="description"
        element="input"
        type="text"
        label="REASON:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE REASON
      </Button>
      <Button type="submit" onClick={()=>{navigate('/reasons',{replace:true})}}>CANCEL</Button>
    </form>
  );
};

export default UpdateReason;
