import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE,} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './UpdateMaterialType.css';
import {MaterialTypeDataContext} from './../../shared/context/ReferenceDataContext';

const UpdateMaterialType = () => {

  const materialTypes = useContext(MaterialTypeDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const MtId = useParams().materialTypeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      description: {value: '', isValid: false },
      image: {value: '',isValid: false},
    },
    false
  );

  const identifiedMaterialType = materialTypes.MATERIALTYPS.find(mt => mt.id === MtId);

  useEffect(() => {
    if (identifiedMaterialType) {
      setFormData(
        {
          description: {
            value: identifiedMaterialType.description,
            isValid: true
          },
            image: {
            value: identifiedMaterialType.image,
            isValid: true
          },
       },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedMaterialType]);

  const materialTypeUpdateSubmitHandler = event => {
    event.preventDefault();
    materialTypes.updateItemMaterialType(formState.inputs,MtId);
    navigate('/materialTypes',{replace:true});
  };

  if (!identifiedMaterialType) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find Material Type Item!</h2>
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
    <form className="materialtype-form" onSubmit={materialTypeUpdateSubmitHandler}>
      <Input
        id="description"
        element="input"
        type="text"
        label="Material Type:"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
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
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE MATERIAL TYPE
      </Button>
      <Button type="submit" onClick={()=>{navigate('/materialTypes',{replace:true})}}>CANCEL</Button>
    </form>
  );
};

export default UpdateMaterialType;
