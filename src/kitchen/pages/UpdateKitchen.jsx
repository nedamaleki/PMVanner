import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './UpdateKitchen.css';
import {KitchenDataContext} from './../../shared/context/ReferenceDataContext';

const UpdateKitchen = () => {

  const kitchens = useContext(KitchenDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const kitId = useParams().kitchenId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {value: '', isValid: false },
      kitchenNo: {value: '',isValid: false},
      image: {value: '',isValid: false},
      address: {value: '',isValid: false},
      tel: {value: '',isValid: false }
    },
    false
  );

  const identifiedKitchen = kitchens.KITCHENS.find(k => k.id === kitId);

  useEffect(() => {
    if (identifiedKitchen) {
      setFormData(
        {
          name: {
            value: identifiedKitchen.name,
            isValid: true
          },
          kitchenNo: {
            value: identifiedKitchen.kitchenNo,
            isValid: true
          },
          image: {
            value: identifiedKitchen.image,
            isValid: true
          },
          address: {
            value: identifiedKitchen.address,
            isValid: true
          },
          tel: {
            value: identifiedKitchen.tel,
            isValid: true
          }

        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedKitchen]);

  const kitchenUpdateSubmitHandler = event => {
    event.preventDefault();
    kitchens.updateItemKitchen(formState.inputs,kitId);
    navigate('/kitchens',{replace:true});
  };

  if (!identifiedKitchen) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find KitchenItem!</h2>
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
    <form className="place-form" onSubmit={kitchenUpdateSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Name."
        onInput={inputHandler}
        initialValue={formState.inputs.name.value}
        initialValid={formState.inputs.name.isValid}
      />
      <Input
        id="kitchenNo"
        element="input"
        type="text"
        label="Kitchen No :"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Kitchen No."
        onInput={inputHandler}
        initialValue={formState.inputs.kitchenNo.value}
        initialValid={formState.inputs.kitchenNo.isValid}
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
        id="address"
        element="textarea"
        label="Address:"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Address (at least 5 character)."
        onInput={inputHandler}
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
      />
      <Input
        id="tel"
        element="input"
        type="text"
        label="Telephon NO.:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Telephone Number."
        onInput={inputHandler}
        initialValue={formState.inputs.tel.value}
        initialValid={formState.inputs.tel.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE KITCHEN
      </Button>
      <Button type="submit" onClick={()=>{navigate('/kitchens',{replace:true})}}>CANCEL</Button>
    </form>
  );
};

export default UpdateKitchen;
