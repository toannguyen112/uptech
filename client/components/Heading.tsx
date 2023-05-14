import React from 'react'

interface Props {
    title: string,
    description: string,
}
function Heading({ title = 'Dịch vụ', description = "Phát Triển Dịch Vụ Đa Dạng Đáp Ứng Thị Trường" }: Props) {
    return (
        <div className='space-y-[8px]'>
            <div className='text-[#004EEB] font-semibold' > {title} </div>
            <div className='h1 text-gray-900 pb-[12px] border-b border-gray-500' >{description}</div>
        </div>
    )
}

export default Heading