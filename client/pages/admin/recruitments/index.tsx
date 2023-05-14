import React from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/contacts');

  return (
    <React.Fragment>
      <Authenticated>
        <Table
          model={{
            title: 'Ứng tuyển',
            route: 'recruitments',
          }}
          dataSource={data}
          isShowCreateBtn={false}
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
              label: 'Phone',
              field: 'phone',
            },
            {
              label: 'Trạng thái',
              field: 'status',
              filters: [
                { value: 'new', name: 'Mới' },
                { value: 'response', name: 'Đã Phản hồi' },
                { value: 'unread', name: 'Chưa đọc' },
                { value: 'close', name: 'Hủy' },
                { value: 'spam', name: 'Tin Spam' },
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
