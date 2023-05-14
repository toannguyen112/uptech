import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import axios from '../configAxios'
import { validateForm } from '../validator'
import { useUpdateEffect } from 'usehooks-ts'
import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
import EventBus from '../event-bus';
import { confirmDialog } from 'primereact/confirmdialog';
import { FormattedMessage } from 'react-intl'
interface IProps {
  children: React.ReactNode,
  loading: boolean,
  field: any,
  rules: any,
  data: any,
  errors: any,
  setErrors: (arg: any) => void
}

export default function FormPage({
  children,
  loading,
  data,
  rules,
  field,
  errors,
  setErrors,
}: IProps) {
  const router = useRouter();
  const { model } = field;
  const { id } = router.query;

  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  const isCreate = !id;

  const submit = async () => setErrors(validateForm(data, rules));

  const handleCreate = async () => {
    await axios.post(`${model}/create`, { ...data })
      .then((res) => {
        toast.success('Tạo mới thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        router.back();
      });
  }

  const handleUpdate = async () => {
    await axios.put(`${model}/update/${id}`, { ...data }, { headers })
      .then((res) => {
        EventBus.$dispatch("refreshData", "");
        toast.success('Cập nhật thành công !', {
          position: toast.POSITION.TOP_CENTER,
});
      });
  }

  const handleRemove = async () => {
    await axios.delete(`${model}/delete/${id}`)
      .then((res) => {
        toast.success('Xóa thành công !', {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => {
            router.back();
          }
        });
      });
  }

  const accept = () => {
    handleRemove()
  }

  const confirmRemove = () => {
    confirmDialog({
      message: 'Bạn có chắc muốn xóa ?',
      header: 'Xóa',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,
    });
  };

  useUpdateEffect(() => {
    if (Object.keys(errors).length) return;

    //  CREATE   
    if (!id) {
      handleCreate();
    }

    // EDIT
    if (id) {
      handleUpdate();
    }
  }, [errors]);

  return (
    <Fragment>
      <div>
        <div className="flex justify-between items-center py-[12px]">
          <div className='title-1'>
            {id ? (
              <div
                onClick={() => router.back()}
                className=" text-prime font-bold hover:text-prime-100 cursor-pointer">
                <FormattedMessage id="page.admin.btn_update" /> {field.name} <span className='text-black font-bold'>/</span> {id}
              </div>
            ) : (
              <div
                onClick={() => router.back()}
                className="h5 text-prime font-bold hover:text-prime-100 cursor-pointer">
                <FormattedMessage id="page.admin.btn_new" /> {field.name}
              </div>
            )}
          </div >
          <Button label="Lưu"
            loading={isCreate ? false : loading}
            onClick={submit} />
        </div>
        <div className="grid grid-cols-12 gap-[32px]">
          {children}
          <div className="col-span-8">
            <div className="flex items-center justify-between w-full">
              {id ? (
                <Button
                  onClick={() => confirmRemove()}
                  label="Xóa"
                  severity="danger" />
              ) : null}
              <Button label="Lưu"
                loading={isCreate ? false : loading}
                onClick={submit} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
