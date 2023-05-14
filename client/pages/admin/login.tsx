import React, { useState } from 'react'
import FieldSet from '../../components/Fields/FieldSet'
import { validateForm } from '../../validator'
import { useUpdateEffect } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { adminLogin } from '../../store/auth/authAction'
import Router, { useRouter } from "next/router";
import { Button as ButtonPrime } from 'primereact/button';
interface IForm {
  username: string
  password: string
}
function Login() {

  const { loading, info, error } = useAppSelector((state: any) => state.auth)

  const dispatch = useAppDispatch()
  const router = useRouter();

  const [form, setForm] = useState<IForm>({
    username: 'admin',
    password: 'admin',
  });

  const [errors, setErrors] = useState<any>({});
  const submit = () => setErrors(validateForm(form, rules));

  useUpdateEffect(() => {
    if (Object.keys(errors).length) return;
    handleLogin();
  }, [errors]);

  const handleLogin = async () => {
    dispatch(adminLogin(form));
  }

  React.useEffect(() => {
    if (info) {
      Router.push("/admin/dashboard")
    }
  }, [info])

  const rules = {
    "username": "required|string",
    "password": "required|string",
  }

  return (
    <div className="bg-[#F1F5F9] h-screen overflow-y-hidden flex items-center justify-center ">
      <div className=" shadow-2xl border border-gray-100 py-[40px] px-[100px] rounded-[8px] bg-white">
        <div className="text-black text-center display-3">Đăng nhập</div>
        <div className="space-y-[2rem] my-[30px] min-w-[300px]">
          <div className=''>
            <div className='text-red-500 mb-[8px]'> {error && error}</div>
            <FieldSet
              updateModelValue={(username) =>
                setForm({ ...form, username: username })
              }
              modelValue={form.username}
              field={{
                title: 'Tài khoản',
                type: 'text',
                placeholder: 'Tài khoản',
                fieldName: "username",
                required: true,
                rules: rules,
                errors: errors
              }}
            />
          </div>
          <div>
            <FieldSet
              updateModelValue={(password) =>
                setForm({ ...form, password: password })
              }
              modelValue={form.password}
              field={{
                title: 'Mật khẩu',
                type: 'password',
                required: true,
                placeholder: 'Mật khẩu',
                fieldName: "password",
                rules: rules,
                errors: errors
              }}
            />
          </div>
        </div>
        <ButtonPrime
          loading={loading}
          className='w-full'
          onClick={() => submit()}
          label="Đăng nhập" />
      </div>
    </div>
  )
}

export default Login
