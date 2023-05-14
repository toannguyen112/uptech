import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import Seo from '../../../components/Seo/Seo'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { form, setForm, loading } = useFetchDetail("posts",
    {
      "name": "",
      "status": "active",
      "description": "",
      "post_at": "",
      "view": 0,
      "ceo_id": null,
      "category_id": null,
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
      "images": [],
    });

  const rules = {
    "name": "required|string",
    "status": "required",
    "category_id": "required",
  }

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'posts', name: "Bài viết" }}
        data={form}>
        <div className="col-span-8 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên bài viết',
                placeholder: 'Tên bài viết',
                fieldName: "name",
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
                setForm({ ...form, content: value })
              }
              modelValue={form.content}
              field={{
                title: 'Chi tiết',
                type: 'rich_text',
                fieldName: "content",
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
              updateModelValue={(value) => setForm({ ...form, status: value })}
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
              updateModelValue={(modelValue) => { setForm({ ...form, post_at: modelValue }) }}
              modelValue={form.post_at}
              field={{
                title: 'Ngày tạo',
                type: 'date',
                fieldName: "",
                rules: rules,
                errors: errors,
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, category_id: modelValue }) }}
              modelValue={form.category_id}
              field={{
                title: 'Danh mục',
                type: 'select_source',
                placeholder: "Danh mục",
                fieldName: "category_id",
                source: {
                  model: "categories",
                  multiple: false,
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, ceo_id: modelValue }) }}
              modelValue={form.ceo_id}
              field={{
                title: 'Tác giả',
                type: 'select_source',
                placeholder: "Tác giả",
                fieldName: "ceo_id",
                source: {
                  model: "ceos",
                  multiple: false,
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
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(modelValue) => { setForm({ ...form, related: modelValue }) }}
              modelValue={form.related}
              field={{
                title: 'Bài viết liên quan',
                type: 'select_source',
                placeholder: "Bài viết liên quan",
                source: {
                  model: "posts",
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
              updateModelValue={(value) => setForm({ ...form, view: Number(value) })}
              modelValue={form.view}
              field={{
                disable: true,
                title: 'View',
                placeholder: 'View',
                fieldName: "view",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(file) => setForm({ ...form, thumbnail: file })}
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
              updateModelValue={(file) => setForm({ ...form, banner: file })}
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
