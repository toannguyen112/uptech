import React from 'react'


const services = [
    {
        heading: "Thiết kế & phát triển sản phẩm số",
        child: [
            {
                name: "Website",
                link: ""
            },
            {
                name: "Ứng dụng di động",
                link: ""
            },
            {
                name: "Mobile game",
                link: ""
            },
            {
                name: "Hệ thống nghiệp vụ",
                link: ""
            },
            {
                name: "Trí tuệ nhân tạo",
                link: ""
            },
            {
                name: "Blockchain",
                link: ""
            },
            {
                name: "VR/AR",
                link: ""
            },
        ]
    },
    {
        heading: "Tư vấn và phát triển Doanh nghiệp số",
        child: [
            {
                name: "Tư vấn và phát triển Doanh nghiệp số",
                link: ""
            },
            {
                name: "ERP",
                link: ""
            },
            {
                name: "CDP",
                link: ""
            },
            {
                name: "BI",
                link: ""
            },
            {
                name: "Smart Factory",
                link: ""
            },
            {
                name: "Loyalty",
                link: ""
            },
        ]
    },
    {
        heading: "Giải pháp nhân sự thông minh",
        child: [
            {
                name: "Cho thuê nhận sự IT",
                link: ""
            },
            {
                name: "Bảo trì phần mềm",
                link: ""
            },
            {
                name: "Thiết kế UI/UX",
                link: ""
            },
            {
                name: "QA & Testing",
                link: ""
            },
        ]
    },
]
function sitemap() {
    return (
        <section>
            <div className="container py-[48px]">
                <h1 className='display-2 text-gray-900 pb-[2rem]' >
                    Uptech sitemap
                </h1>
                <div>
                    <div className='title-2 text-gray-900 pb-[8px] '>
                        Dịch vụ
                    </div>
                    <div className='grid grid-cols-3 gap-[12px] xl:gap-[32px] py-[2rem] border-t border-b border-gray-300'>
                        {
                            services.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-span-full md:col-span-1 space-y-[12px] xl:space-y-[2rem]">
                                        <div className='title-2 text-gray-900'>
                                            {item.heading}
                                        </div>
                                        {item.child.map((chil: any, i: number) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className='body-2 text-gray-700'>
                                                    {chil.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-[12px] xl:gap-[32px] mt-[2rem]'>
                        <div className="col-span-full md:col-span-1 space-y-[12px] xl:space-y-[2rem] text-gray-700">
                            <div className="text-gray-900 title-2" >Lĩnh vực</div>
                            <div>Bán lẻ & Tiêu dùng</div>
                            <div>Bất động sản</div>
                            <div>Công nghệ Thông tin</div>
                            <div>Logistics & Vận tải</div>
                        </div>
                        <div className="col-span-full md:col-span-1 space-y-[12px] xl:space-y-[2rem] text-gray-700">
                            <div>Chăm sóc Sức khỏe</div>
                            <div>Công nghiệp Sản xuất</div>
                            <div>Giáo dục & Đào tạo</div>
                            <div>Tài chính & Ngân hàng</div>
                            <div>Nông - Lâm - Ngư nghiệp</div>
                        </div>
                        <div className="col-span-full md:col-span-1 space-y-[12px] xl:space-y-[2rem] text-gray-700">
                            <div className="title-2 text-gray-900">Về chúng tôi</div>
                            <div>Về Uptech</div>
                            <div>Tuyển dụng</div>
                            <div>Góc nhìn</div>
                            <div>Liên hệ</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default sitemap