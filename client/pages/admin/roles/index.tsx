import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import axios from '../../../configAxios';
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/roles');

  return (
    <Authenticated>
      <Table
        model={{
          title: 'Vai trò',
          route: 'roles',
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
