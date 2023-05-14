import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FieldSet from '../../../components/Fields/FieldSet'
import FormPage from '../../../components/FormPage'
import useFetchDetail from '../../../hook/useFetchDetail'
import Authenticated from '../../../Layout/Authenticated'

function Form() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, form, setForm } = useFetchDetail(`/projects/show/${id}`, {
    name: '',
    description: '',
    status: '',
    type: '',
    content: '',
    file_id: null,
  })

  return (
    <Authenticated>

    </Authenticated>
  )
}

export default Form
