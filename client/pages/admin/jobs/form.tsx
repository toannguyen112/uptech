import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import Seo from '../../../components/Seo/Seo'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading, id } = useFetchDetail("jobs",
    {
      "name": "",
      "status": "active",
      "description": "",
      "expried_date": null,
      "address_work": "",
      "location": "",
      "view": 0,
      "isFeatured": false,
      "required": "",
      "benefit": "",
      "custom_slug": "",
      "meta_title": "",
      "meta_description": "",
      "canonica_link": "",
      "meta_robots": "",
      "meta_image": "",
      "related": [],
    });


  const rules = {
    "name": "required|string",
    "status": "required",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'jobs', name: "Tuyển dụng" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên ',
                placeholder: 'Tên ',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, location: value })}
              modelValue={form.location}
              field={{
                title: 'Khu vực',
                placeholder: 'Khu vực',
                fieldName: "location",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, address_work: value })}
              modelValue={form.address_work}
              field={{
                title: 'Nơi làm việc',
                placeholder: 'Nơi làm việc',
                fieldName: "address_work",
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
              updateModelValue={(value) => setForm({ ...form, required: value })}
              modelValue={form.required}
              field={{
                title: 'Yêu cầu',
                type: 'rich_text',
                fieldName: "required",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, benefit: value })}
              modelValue={form.benefit}
              field={{
                title: 'Quyền lợi',
                type: 'rich_text',
                fieldName: "benefit",
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
              updateModelValue={(value) => setForm({ ...form, isFeatured: value })}
              modelValue={form.isFeatured}
              field={{
                title: 'Nổi bật',
                type: 'checkbox',
                fieldName: "",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, expried_date: value })}
              modelValue={form.expried_date}
              field={{
                type: 'date',
                title: 'Ngày hết hạn',
                placeholder: 'Ngày hết hạn',
                fieldName: "expried_date",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, related: modelValue }) }}
              modelValue={form.related}
              field={{
                title: 'Việc liên quan',
                type: 'select_source',
                placeholder: "Việc liên quan",
                source: {
                  model: "jobs",
                  multiple: true,
                  query: {
                    page: 1,
                    page_size: 2000,
                    status: "active"
                  }
                },
                fieldName: "related",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, view: Number(modelValue) }) }}
              modelValue={form.view}
              field={{
                title: 'Lượt xem',
                disable: true,
                type: 'number',
                fieldName: "view",
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
