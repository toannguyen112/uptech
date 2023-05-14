import React from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/projects');

  return (
    <React.Fragment>
      <Authenticated>
        <Table
          model={{
            title: 'Dự án',
            route: 'projects',
          }}
          dataSource={data}
          columns={[
            {
              label: 'ID',
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
              label: 'Nổi bật',
              field: 'isFeatured',
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
    </React.Fragment>
  )
}

export default Index
