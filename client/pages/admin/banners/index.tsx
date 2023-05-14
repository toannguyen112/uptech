import React from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/banners');

  return (
    <Authenticated>
      <Table
        model={{
          title: 'Banner',
          route: 'banners',
        }}
        dataSource={data}
        columns={[
          {
            label: 'Id',
            field: 'id',
          },
          {
            label: 'Hình ảnh',
            field: 'thumbnail',
          },
          {
            label: 'Tên',
            field: 'name',
          },
          {
            label: 'Trạng thái',
            field: 'status',
            filters: [
              {
                name: "Ẩn",
                value: "inactive",
              },
              {
                name: "Hoạt động",
                value: "active",
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
