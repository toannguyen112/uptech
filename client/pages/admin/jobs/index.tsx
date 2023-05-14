import React from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';


function Index() {

  const { data, error } = useFetchListAdmin('/jobs');

  return (
    <React.Fragment>
      <Authenticated>
        <Table
          model={{
            title: 'Tuyển dụng',
            route: 'jobs',
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
              label: 'Nổi bật',
              field: 'isFeatured',
            },
            {
              label: 'Ngày hết hạn',
              field: 'expried_date',
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
