import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'

import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'

import Box from '../../../components/Box'
import Seo from '../../../components/Seo/Seo'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading } = useFetchDetail("ceos",
    {
      "name": "",
      "title": "",
      "status": "active",
      "description": "",
      "detail": "",
      "date": "",
      "phone": "",
      "email": "",
      "position": "",
      "work_at": "",
      "lang": "",
      "address": "",
      "social": "",
      "education": "",
      "custom_slug": "",
      "meta_title": "",
      "meta_description": "",
      "canonica_link": "",
      "meta_robots": "",
      "thumbnail": null,
    });

  const rules = {
    "name": "required|string",
    "title": "required|string",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'ceos', name: "CEO" }}
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
              updateModelValue={(value) => setForm({ ...form, title: value })}
              modelValue={form.title}
              field={{
                title: 'Chức vụ',
                placeholder: 'Chức vụ',
                fieldName: "title",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, date: value })}
              modelValue={form.date}
              field={{
                title: 'Ngày sinh',
                placeholder: 'Ngày sinh',
                fieldName: "date",
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
                title: 'Số diện thoại',
                placeholder: 'Số diện thoại',
                fieldName: "phone",
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
                title: 'Email',
                placeholder: 'email',
                fieldName: "email",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, position: value })}
              modelValue={form.position}
              field={{
                title: 'Vị trí công việc',
                placeholder: 'Vị trí công việc',
                fieldName: "position",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, work_at: value })}
              modelValue={form.work_at}
              field={{
                title: 'Làm việc tại',
                placeholder: 'Làm việc tại',
                fieldName: "work_at",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, lang: value })}
              modelValue={form.lang}
              field={{
                title: 'Ngôn ngữ',
                placeholder: 'Ngôn ngữ',
                fieldName: "lang",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, address: value })}
              modelValue={form.address}
              field={{
                title: 'Nơi ở hiện tại',
                placeholder: 'Nơi ở hiện tại',
                fieldName: "address",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, social: value })}
              modelValue={form.social}
              field={{
                title: 'Các kênh social',
                placeholder: 'Các kênh social',
                fieldName: "social",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, education: value })}
              modelValue={form.education}
              field={{
                title: 'Học vấn',
                placeholder: 'Học vấn',
                fieldName: "education",
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, detail: value })
              }
              modelValue={form.detail}
              field={{
                title: 'Chi tiết',
                type: 'rich_text',
                fieldName: "detail",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <Seo
              loading={loading}
              form={form}
              onSetForm={(formSeo: any) => setForm({ ...form, ...formSeo })}
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(file) =>
                setForm({ ...form, thumbnail: file })
              }
              modelValue={form.thumbnail}
              field={{
                title: 'Avatar',
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
