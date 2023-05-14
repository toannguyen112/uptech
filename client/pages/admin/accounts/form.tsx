import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { loading, form, setForm } = useFetchDetail(`admins`, {
    name: '',
    email: '',
    username: "",
    password: '',
    roles: [],

  });

  const rules = {
    "name": "required|string",
    "email": "required|email",
    "username": "required",
    "password": "required",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'admins', name: "Vai trò" }}
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
              updateModelValue={(value) => setForm({ ...form, email: value })}
              modelValue={form.email}
              field={{
                required: true,
                title: 'Email',
                type: "email",
                placeholder: 'Email',
                fieldName: "email",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <div className='flex items-center'>
            <Box loading={loading}>
              <FieldSet
                updateModelValue={(value) =>
                  setForm({ ...form, username: value })
                }
                modelValue={form.username}
                field={{
                  required: true,
                  title: 'Tài khoản',
                  placeholder: 'Tài khoản',
                  fieldName: "username",
                  rules: rules,
                  errors: errors
                }}
              />
            </Box>
            <Box loading={loading}>
              <FieldSet
                updateModelValue={(value) =>
                  setForm({ ...form, password: value })
                }
                modelValue={form.password}
                field={{
                  title: 'Mật khẩu',
                  type: "password",
                  required: true,
                  placeholder: 'Mật khẩu',
                  fieldName: "password",
                  rules: rules,
                  errors: errors
                }}
              />
            </Box>
          </div>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => { setForm({ ...form, roles: value }) }}
              modelValue={form.roles}
              field={{
                title: 'Vai trò',
                type: 'select_source',
                placeholder: "roles",
                fieldName: "roles",
                source: {
                  model: "roles",
                  multiple: true,
                  query: {
                    page: 1,
                    page_size: 2000
                  }
                },
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
