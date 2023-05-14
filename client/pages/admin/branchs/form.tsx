import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading } = useFetchDetail("branchs",
    {
      "name": "",
    });

  const rules = {
    "name": "required|string",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'branchs', name: "Lĩnh vực" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên',
                placeholder: 'Tên',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
        </div>
        <div className="col-span-4 space-y-[2rem]">

        </div>
      </FormPage>
    </Authenticated>
  )
}

export default Form
