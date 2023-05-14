import React, { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect';
import { FieldInterface } from '../../Interface'

function Select({ field, modelValue, updateModelValue }: FieldInterface) {

  const [selected, setSelected] = useState(modelValue ?? []);

  const panelFooterTemplate = () => {
    const length = selected ? selected.length : 0;

    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? 's' : ''} selected.
      </div>
    );
  };

  return (
    <div className="flex justify-content-center">
      <MultiSelect
        value={(selected)}
        options={field.options}
        onChange={(e) => setSelected(e.value)}
        optionValue="id"
        optionLabel="name"
        placeholder="Select"
        panelFooterTemplate={panelFooterTemplate}
        className="w-full md:w-20rem" />
    </div>
  )
}

export default Select
