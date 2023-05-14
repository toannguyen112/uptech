import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import axios from '../../../configAxios';
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/admins');

  return (
    <Authenticated>
      <Table
        model={{
          title: 'Tài khoản',
          route: 'accounts',
        }}
        dataSource={data}
        columns={[
          {
            label: 'ID',
            field: 'id',
          },
          {
            label: 'Tên',
            field: 'name',
          },
          {
            label: 'Email',
            field: 'email',
          },
          {
            label: 'Ngày tạo',
            field: 'createdAt',
          },
          {
            label: 'Ngày cập nhật',
            field: 'updatedAt',
          },
        ]}
      />
    </Authenticated>
  )
}

export default Index
