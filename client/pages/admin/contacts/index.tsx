import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table'
import Authenticated from '../../../Layout/Authenticated'
import axios from '../../../configAxios';
import { useFetchListAdmin } from '../../../hook/admin/useFetchListAdmin';

function Index() {

  const { data, error } = useFetchListAdmin('/contacts');

  return (
    <Authenticated>
      <Table
        model={{
          title: 'Liên hệ',
          route: 'contacts',
        }}
        isShowCreateBtn={false}
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
            label: 'Phone',
            field: 'phone',
          },
          {
            label: 'Email',
            field: 'email',
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
  )
}

export default Index
