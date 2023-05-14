import React, { useEffect, useState } from "react";
import { FieldInterface } from '../../Interface'
import Field from './Field'
import { validateField } from "../../validator";

function FieldSet({ field, updateModelValue, modelValue }: FieldInterface) {

  const error = () => {
    return field.fieldName
      ? field.errors[field.fieldName]
      : "";
  }

  const [validate, setValidate] = useState(!field.validate ? field.validate : true);

  useEffect(() => {
    setValidate(validateField(modelValue, field.rules[field.fieldName]));
  }, [modelValue]);

  useEffect(() => {
    checkValidate();
  }, [field.errors]);

  const checkValidate = () => {
    setValidate(!field.errors.hasOwnProperty(field.fieldName));
  }

  return (
    <div className="relative">
      <Field
        field={field}
        updateModelValue={updateModelValue}
        modelValue={modelValue}
      />
      {
        validate != true && validate != undefined ?
          (
            <small className="text-red-400 absolute inset-x-0 bottom-[-30px] font-bold">
              {Array.isArray(error) ? error[0] : `${field.title} không hợp lệ`}
            </small>
          ) : ''
      }
    </div>
  )
}

export default FieldSet
