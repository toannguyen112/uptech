import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import Seo from '../../../components/Seo/Seo'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading, id } = useFetchDetail("projects",
    {
      "name": "",
      "status": "active",
      "description": "",
      "work_item": "",
      "section_1": "",
      "section_2": "",
      "section_3": "",
      "section_4": "",
      "section_5": "",
      "type": "",
      "branchs": [],
      "services": [],
      "isFeatured": false,
      "content": "",
      "custom_slug": "",
      "meta_title": "",
      "meta_description": "",
      "canonica_link": "",
      "meta_robots": "",
      "meta_image": "",

      "thumbnail": null,
      "banner": null,
      "related": [],
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
        field={{ model: 'projects', name: "Dự án" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên dự án',
                placeholder: 'Tên dự án',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, work_item: value })}
              modelValue={form.work_item}
              field={{
                type: "list",
                title: 'Hạng mục công việc',
                fieldName: "work_item",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, section_1: value })
              }
              modelValue={form.section_1}
              field={{
                type: 'rich_text',
                title: 'Section 1',
                placeholder: 'Section 1',
                fieldName: "section_1",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, section_2: value })
              }
              modelValue={form.section_2}
              field={{
                title: 'Section 2',
                type: 'rich_text',
                fieldName: "section_2",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, section_3: value })
              }
              modelValue={form.section_3}
              field={{
                title: 'Section 3',
                type: 'rich_text',
                fieldName: "section_3",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, section_4: value })
              }
              modelValue={form.section_4}
              field={{
                title: 'Section 4',
                type: 'rich_text',
                fieldName: "section_4",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) =>
                setForm({ ...form, section_5: value })
              }
              modelValue={form.section_5}
              field={{
                title: 'Section 5',
                type: 'rich_text',
                fieldName: "section_5",
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
                fieldName: "isFeatured",
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
              updateModelValue={(value) =>
                setForm({ ...form, isFeatured: value })
              }
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
              updateModelValue={(modelValue) => { setForm({ ...form, related: modelValue }) }}
              modelValue={form.related}
              field={{
                title: 'Dự án liên quan',
                type: 'select_source',
                placeholder: "Dự án liên quan",
                source: {
                  model: "projects",
                  multiple: true,
                  query: {
                    page: 1,
                    page_size: 2000
                  }
                },
                fieldName: "",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, branchs: modelValue }) }}
              modelValue={form.branchs}
              field={{
                title: 'Lĩnh vực',
                type: 'select_source',
                placeholder: "Lĩnh vực",
                source: {
                  model: "branchs",
                  multiple: true,
                  query: {
                    page: 1,
                    page_size: 2000
                  }
                },
                fieldName: "",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, services: modelValue }) }}
              modelValue={form.services}
              field={{
                title: 'Dịch vụ',
                type: 'select_source',
                placeholder: "Dịch vụ",
                source: {
                  model: "services",
                  multiple: true,
                  query: {
                    page: 1,
                    page_size: 2000
                  }
                },
                fieldName: "",
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(file) =>
                setForm({ ...form, banner: file })
              }
              modelValue={form.banner}
              field={{
                title: 'Banner',
                type: 'input_file',
                multiple: false,
                fieldName: "banner",
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
