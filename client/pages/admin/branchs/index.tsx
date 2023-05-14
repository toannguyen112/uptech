import React from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/branchs');

  return (
    <React.Fragment>
      <Authenticated>
        <Table
          model={{
            title: 'Lĩnh vực',
            route: 'branchs',
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
    </React.Fragment>
  )
}

export default Index
