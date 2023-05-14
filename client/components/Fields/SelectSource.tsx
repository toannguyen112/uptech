import React, { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect';
import axios from '../../configAxios'
import { useUpdateEffect } from 'usehooks-ts';
import { useRouter } from 'next/router';
import { Dropdown } from 'primereact/dropdown';

function SelectSource({ field, modelValue, updateModelValue }: any) {

  const [selected, setSelected] = useState(modelValue ?? []);
  const [options, setOptions] = useState<any[]>([]);

  const transformOptions = (option: []) => {
    if (!option) return [];
    return option.map((option: any) => {
      return {
        id: option.id,
        name: option.name,
      }
    });
  }

  const router = useRouter();
  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  const fetchData = async () => {

    if (field && field.source) {
      return axios.get(`${field.source.model}?` + field.source.query, { headers })
        .then((res) => {
          const { data } = res.data.data
          const options = transformOptions(data);
          setOptions(options);
        });
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  useUpdateEffect(() => {
    updateModelValue(selected);
  }, [selected]);

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
      {field.source?.multiple && (
        <MultiSelect
          value={selected}
          options={options}
          onChange={(e) => {
            setSelected(e.value);
          }}
          optionLabel="name"
          optionValue='id'
          placeholder="Select"

          panelFooterTemplate={panelFooterTemplate}
          className="w-full" />
      )}

      {!field.source?.multiple && (
        <Dropdown
          value={modelValue}
          onChange={(e: any) => updateModelValue(e.value)}
          options={options}
          optionValue="id"
          optionLabel="name"
          placeholder="Thể loại"
          className="w-full" />
      )}

    </div>
  )
}

export default SelectSource
