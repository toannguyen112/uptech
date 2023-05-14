import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'
import Box from '../../../components/Box'
import { Checkbox } from "primereact/checkbox";
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin'

function Form() {

  const [errors, setErrors] = useState<any>({});
  const { loading, form, setForm } = useFetchDetail(`roles`, {
    name: '',
    permissions: []
  });

  const rules = {
    "name": "required|string",
  }
  const { data, error } = useFetchListAdmin('/permissions');

  const onPermisstionChange = (e: any) => {
    let _selectedPermissions = [...form.permissions];

    if (e.checked)
      _selectedPermissions.push(e.value);
    else
      _selectedPermissions = _selectedPermissions.filter(permission => permission.id !== e.value.id);

    setForm({ ...form, permissions: _selectedPermissions });
  };

  return (
    <Authenticated>
      <FormPage
        loading={loading}
        rules={rules}
        errors={errors}
        setErrors={(errors) => setErrors(errors)}
        field={{ model: 'roles', name: "Vai trò" }}
        data={form}>
        <div className="col-span-7 space-y-[2rem]">
          <Box loading={loading}>
            <FieldSet
              updateModelValue={(value) => setForm({ ...form, name: value })}
              modelValue={form.name}
              field={{
                required: true,
                title: 'Tên vai trò',
                placeholder: 'Tên vai trò',
                fieldName: "name",
                rules: rules,
                errors: errors
              }}
            />
          </Box>
        </div>
        <div className="col-span-4 space-y-[2rem]">
          <Box loading={loading}>
            <div>
              <div className="mb-[12px] font-bold">Danh sách quyền</div>
              <div>
                <div className="flex flex-col gap-3">
                  {data && data.data.length ? data.data.map((permission: any) => {
                    return (
                      <div key={permission.id} className="flex align-items-center">
                        <Checkbox inputId={permission.id} name="permission"
                          value={permission}
                          onChange={onPermisstionChange}
                          checked={form.permissions.some((item: any) => item.id === permission.id)} />
                        <label htmlFor={permission.id} className="ml-2">
                          {permission.name}
                        </label>
                      </div>
                    );
                  }) : ""}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </FormPage>
    </Authenticated>
  )
}

export default Form
