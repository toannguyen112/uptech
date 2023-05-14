import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { loading, form, setForm } = useFetchDetail(`contacts`, {
    type: 'contact',
    file: null,
    status: '',
  });

  const rules = {
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'contacts', name: "Ứng tuyển" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                disable: true,
                title: 'Tên',
                placeholder: 'Tên',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <label htmlFor="">Link CV</label>
            {
              form.file  &&  <a href=""> {form.file.path} </a>
            }
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, email: value })}
              modelValue={form.email}
              field={{
                disable: true,
                title: 'Email',
                type: "email",
                placeholder: 'Email',
                fieldName: "email",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, phone: value })}
              modelValue={form.phone}
              field={{
                disable: true,
                title: 'Phone',
                placeholder: 'Phone',
                fieldName: "phone",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, note: value })}
              modelValue={form.note}
              field={{
                disable: true,
                title: 'Note',
                type: "textarea",
                placeholder: 'Note',
                fieldName: "note",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

        </div>
        <div className="col-span-4 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, status: value })}
              modelValue={form.status}
              field={{
                title: 'Trạng thái',
                type: 'radio',
                fieldName: "",
                options: [
                  { value: 'new', name: 'Mới' },
                  { value: 'response', name: 'Đã Phản hồi' },
                  { value: 'unread', name: 'Chưa đọc' },
                  { value: 'close', name: 'Hủy' },
                  { value: 'spam', name: 'Tin Spam' },
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
