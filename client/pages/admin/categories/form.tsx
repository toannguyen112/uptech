import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import { Dropdown } from 'primereact/dropdown';
import Seo from '../../../components/Seo/Seo'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading } = useFetchDetail("categories",
    {
      "name": "",
      "description": "",
      "status": "active",
      "custom_slug": "",
      "meta_title": "",
      "meta_description": "",
      "canonica_link": "",
      "meta_robots": "",
      "meta_image": "",
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
        field={{ model: 'categories', name: "Danh mục" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên danh mục',
                placeholder: 'Tên danh mục',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, description: value })}
              modelValue={form.description}
              field={{
                title: 'Mô tả',
                type: "textarea",
                placeholder: 'Mô tả',
                fieldName: "description",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Seo
            loading={loading}
            form={form}
            onSetForm={(value: any) => console.log(value)}
          />
        </div>
        <div className="col-span-4 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, status: value })
              }
              modelValue={form.status}
              field={{
                title: 'Trạng thái',
                type: 'radio',
                fieldName: "",
                options: [
                  { value: 'active', name: 'Hoạt động' },
                  { value: 'inactive', name: 'Ẩn' },
                ],
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
        </div>
      </FormPage>
    </Authenticated>
  )
}

export default Form
