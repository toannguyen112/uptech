import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'

import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'

import Box from '../../../components/Box'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading } = useFetchDetail("banners",
    {
      "name": "",
      "sub_name": "",
      "type": "",
      "status": "active",
      "description": "",
      "thumbnail": null,
    });

  const rules = {
    "name": "required|string",
    "sub_name": "required|string",
    "status": "required",
    "type": "required",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'banners', name: "Banner" }}
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, type: value })}
              modelValue={form.type}
              field={{
                required: true,
                title: 'Thể loại',
                placeholder: 'Thể loại',
                fieldName: "type",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, sub_name: value })}
              modelValue={form.sub_name}
              field={{
                required: true,
                title: 'Tiêu đề phụ',
                placeholder: 'Sub Name',
                fieldName: "sub_name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, description: value })
              }
              modelValue={form.description}
              field={{
                type: "textarea",
                title: 'Mô tả',
                placeholder: 'Mô tả',
                fieldName: "description",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

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
                fieldName: "status",
                options: [
                  { value: 'active', name: 'Hoạt động' },
                  { value: 'inactive', name: 'Ẩn' },
                ],
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(file) =>
                setForm({ ...form, thumbnail: file })
              }
              modelValue={form.thumbnail}
              field={{
                title: 'Thumbnail',
                type: 'input_file',
                multiple: false,
                fieldName: "thumbnail",
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
