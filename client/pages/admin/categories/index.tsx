import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import axios from '../../../configAxios';
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/categories');

  return (
    <Authenticated>
      <Table
        model={{
          title: 'Danh mục',
          route: 'categories',
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
            label: 'Thể loại',
            field: 'type',
          },
          {
            label: 'Trạng thái',
            field: 'status',
            filters: [
              {
                name: "Ngưng hoạt động",
                value: "Deactivated",
              },
              {
                name: "Hoạt động",
                value: "Activated",
              },
            ],
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
