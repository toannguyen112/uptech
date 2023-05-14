import React, { useEffect, useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import Seo from '../../../components/Seo/Seo'
import axios from '../../../configAxios'
import { Dialog } from 'primereact/dialog';
import { Tree } from 'primereact/tree';
import { useRouter } from 'next/router'
import { InputText } from 'primereact/inputtext';
import { toast } from 'react-toastify';
import { useUpdateEffect } from 'usehooks-ts'
import { Button } from 'primereact/button'
import Skeleton from 'react-loading-skeleton'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const [form, setForm] = useState({
    "name": "",
    "id": "",
    "thumbnail": null,

    "parent_id": 0,
    "layout_number": 1,
    "custom_slug": "",
    "isFeatured": false,
    "description": "",
    "meta_title": "",
    "meta_description": "",
    "canonica_link": "",
    "meta_robots": "",
    "meta_image": "",

    "section_1": null,
    "section_2": null,
    "section_3": null,
    "section_4": null,
    "section_5": null,

  })

  const rules = {
    "name": "required|string",
  }

  const [nodes, setNodes] = useState([]);
  const [name, setName] = useState('');
  const [selectedKey, setSelectedKey] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState<boolean>(false);

  const { locale, query, } = useRouter();
  const headers: any = { 'Accept-Language': locale };

  const [expandedKeys, setExpandedKeys] = useState({ '0': true, '0-0': true });

  const expandNode = (node: any, _expandedKeys: any) => {
    if (node.children && node.children.length) {
      _expandedKeys[node.key] = true;

      for (const child of node.children) {
        expandNode(child, _expandedKeys);
      }
    }
  };

  useUpdateEffect(() => {
    fetchDetailNode();
  }, [selectedKey]);

  useEffect(() => {
    fetchNodes();
  }, []);

  const onCreateNode = async () => {

    await axios.post('/services/create', {
      parent_id: selectedKey,
      name: name,
    })
      .then((res) => {
        setVisible(false);
        toast.success('Thêm danh mục thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        setName("");
        fetchNodes();
      });
  }

  const onUpdateNode = async () => {
    setLoading(true);
    await axios.put(`/services/update/${selectedKey}`, form, { headers })
      .then((res) => {
        setVisible(false);
        toast.success('Update thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        setName("");
        fetchNodes();
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }

  const onDeleteNode = async () => {
    await axios.delete(`/services/delete/${selectedKey}`,
    ).then((res) => {
      if (res.data) {
        toast.success('Xóa thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        fetchNodes();
      }
    })
  }

  const fetchNodes = async () => {
    setLoading(true);
    await axios
      .get(`/services/nav`, { headers })
      .then((res: any) => {
        setNodes(res.data.data);
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error)
      });
  }

  const fetchDetailNode = async () => {
    setLoading(true);
    await axios
      .get(`/services/show/${selectedKey}`, { headers })
      .then((res: any) => {
        setForm(res.data.data)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error: any) => {
        setError(error)
      });
  }

  const isShowButtonSave = () => {
    if (selectedKey) {
      return <Button
        label="Lưu"
        loading={loading}
        onClick={() => onUpdateNode()}
      />
    }
  }

  return (
    <Authenticated>
      <Dialog header="Tạo mới dịch vụ"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}>

        <div className='space-y-[8px]'>
          <label htmlFor="">Tên</label>
          <InputText
            onChange={(e) => setName(e.target.value)}
            className="w-full" />
        </div>

        <div className='flex justify-end'>
          <button
            onClick={() => onCreateNode()}
            className='btn btn-prime mt-[20px]'>
            Tạo
          </button>
        </div>

      </Dialog>
      <div className='grid grid-cols-12 gap-[32px]'>
        <div className="col-span-7 space-y-[2rem] ">
          <div className="flex-col items-center space-y-[12px]">
            <Tree
              selectionMode="single"
              selectionKeys={selectedKey}
              onSelectionChange={(e: any) => setSelectedKey(e.value)}
              value={nodes}
              expandedKeys={expandedKeys}
              onToggle={(e: any) => setExpandedKeys(e.value)}
              className="w-full md:w-30rem" />

            <div className="flex items-center space-x-[12px]">
              <Button label="Tạo mới"
                onClick={() => setVisible(true)}
              />
              {selectedKey && (
                <Button
                  onClick={() => onDeleteNode()}
                  label="Xóa" severity="danger" />
              )}
            </div>
          </div>
        </div>
        <div className="col-span-5 space-y-[2rem]">
          <Box loading={loading}>
            {isShowButtonSave()}
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
              updateModelValue={(value) => setForm({ ...form, layout_number: value })}
              modelValue={form.layout_number}
              field={{
                title: 'Layout',
                type: 'radio',
                fieldName: "",
                options: [
                  { value: 1, name: 'Layout 1' },
                  { value: 2, name: 'Layout 2' },
                  { value: 3, name: 'Layout 3' },
                ],
                rules: rules,
                errors: errors,
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
                rows: 3,
                placeholder: 'Mô tả',
                fieldName: "description",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, section_1: value })}
              modelValue={form.section_1}
              field={{
                title: 'Section 1',
                type: "section_custom",
                placeholder: 'section 1',
                fieldName: "section_1",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, section_2: value })}
              modelValue={form.section_2}
              field={{
                title: 'Section 2',
                type: "section_custom",
                placeholder: 'section 1',
                fieldName: "section_2",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, section_3: value })}
              modelValue={form.section_3}
              field={{
                title: 'Section 3',
                type: "section_custom",
                placeholder: 'section 3',
                fieldName: "section_2",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, section_4: value })}
              modelValue={form.section_4}
              field={{
                title: 'Section 4',
                type: "section_custom",
                placeholder: 'section 4',
                fieldName: "section_4",
                rules: rules,
                errors: errors
              }}
            />
          </Box>

          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, section_5: value })}
              modelValue={form.section_5}
              field={{
                title: 'Section 5',
                type: "section_custom",
                placeholder: 'section 4',
                fieldName: "section_5",
                rules: rules,
                errors: errors
              }}
            />
          </Box>


          <div className="card">
            {
              loading ? <Skeleton height={100} /> : (
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
              )
            }
          </div>
          <div >
            {
              loading ? <Skeleton height={100} /> : (
                <Seo
                  loading={loading}
                  form={form}
                  onSetForm={(formSeo: any) => setForm({ ...form, ...formSeo })}
                />
              )
            }
          </div>
          {isShowButtonSave()}
        </div>
      </div>
    </Authenticated >
  )
}

export default Form
