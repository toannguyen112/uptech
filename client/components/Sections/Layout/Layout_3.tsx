import React from 'react'
import SocialMeta from "../../SocialMeta";
import Prices from "../Services/Prices";
import Link from 'next/link';
import Techs from '../../Techs';
import Section_3 from '../Services/Section_3';

function Layout_3({ data }: any) {

    const section_1 = data['section_1'];
    const section_2 = data['section_2'];
    const section_3 = data['section_3'];
    const section_4 = data['section_4'];

    return (
        <main className='layout_3'>
            <section className=' bg-gray-50' >
                <div className="container">
                    <div className='pt-[80px] pb-[12px] grid grid-cols-12 max-md:gap-y-[12px] md:gap-x-[32px] border-b border-gray-500'>
                        <div className="space-y-[8px] col-span-full md:col-span-7">
                            <div className='text-[#004EEB] font-semibold'>{section_1 ? section_1.text_small : "Chuyển đổi số"} </div>
                            <div
                                dangerouslySetInnerHTML={{ __html: section_1 ? section_1.header : "" }}
                                className='h1 text-gray-900 '>
                            </div>
                        </div>
                        <div className='body-2 col-span-full md:col-span-5 text-gray-900'>
                            {section_1 ? section_1.sub_text : ""}
                        </div>
                    </div>
                </div>

            </section>
            <section className='max-md:py-[32px]  md:pb-[80px] bg-gray-50' >
                <div className="container">
                    <Prices prices={section_1 ? section_1.sections : []} />
                </div>
            </section>
            <section className='bg-white' >
                <Techs />
            </section>
            <section className='bg-white' >
                <Section_3
                    section={section_2}
                    image="/images/services/image_200.png" />
            </section>
            <section className='bg-banner_christopher w-full h-[800px] container bg-no-repeat flex items-center justify-center' >
                <div className="space-y-[8px] py-[80px] w-full">
                    <div className='title-3 text-[#0999E8]'>
                        Dịch vụ
                    </div>
                    <div className='display-2 text-white' >
                        Năng Lực IT Của Uptech
                    </div>
                    <div className='bg-banner_it w-full h-[576px] p-[34px] bg-no-repeat	space-y-[1rem]'>
                        <div className='title-2 opacity-70 hover:opacity-100'>
                            Phát triển Website
                        </div>
                        <div className='title-2 opacity-70 hover:opacity-100'>
                            Phát triển Website
                        </div>
                        <div className='title-2 opacity-70 hover:opacity-100'>
                            Phát triển Website
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container md:pt-[72px] md:pb-[46px] max-md:py-[2rem]">
                    <div className='space-y-[8px] pb-[12px] border-b border-gray-500'>
                        <div className='title-3 text-[#004EEB]'> {section_3.text_small ?? "Mô hình"}  </div>
                        <div className='h1 text-gray-900'>
                            {section_3.header ?? "Mô hình Project-based"}</div>
                    </div>
                    {
                        section_3 && section_3.sections && section_3.sections.length && section_3.sections.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex md:flex-row flex-col max-md:space-y-[12px] py-[46px] justify-between items-center">
                                    <div className='md:px-[48px]'>
                                        <div className='text-gray-900 border-t border-b border-gray-200 py-[1rem] body-2  mb-[22px] md:mb-[48px] max-w-[400px]'>
                                            <div>Uptech thực hiện ký kết hợp đồng theo dự án, đảm bảo thực hiện dự án đúng tiến độ, chất lượng và bảo mật thông tin.</div>
                                        </div>
                                        <div className="title-2 text-[#155EEF] space-x-[10px] inline-flex items-center cursor-pointer" >
                                            <span>
                                                Liên hệ
                                            </span>
                                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="1.04199" width="27" height="27" rx="13.5" fill="white" />
                                                <path d="M11 20.542L17 14.542L11 8.54199" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <rect x="0.5" y="1.04199" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className='aspect-w-2 aspect-h-1 rounded-[24px] overflow-hidden'>
                                        <img src={item.file ? item.file : "https://picsum.photos/728/324"} alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
            <section>
                {section_4 && section_4.sections && section_4.sections.length && section_4.sections.map((item, index) => {
                    <div
                        key={index}
                        className="md:pb-[32px] container grid grid-cols-12 md:gap-x-[2rem]">
                        <div className="col-span-full md:col-span-6">
                            <div className='space-y-[8px] pb-[12px] border-b border-gray-500'>
                                <div className='title-3 text-[#004EEB]'> Mô hình</div>
                                <div className='h1 text-gray-900'>Mô hình Project-based </div>
                            </div>
                            <div className="flex-col max-md:space-y-[12px] py-[46px] justify-between items-center">
                                <div className='aspect-w-2 aspect-h-1 rounded-[24px] overflow-hidden'>
                                    <img src={item.file ? item.file : "https://picsum.photos/728/324"} alt="" className="w-full h-full" />
                                </div>
                                <div className='md:py-[2rem] md:px-[48px]'>
                                    <div className="h2 text-gray-900 pb-[1rem]">
                                        {item.title}
                                    </div>
                                    <div className='text-gray-900 border-t border-b border-gray-200 py-[1rem] body-2 mb-[24px] max-w-[500px]'>
                                        <div>{item.value}</div>
                                    </div>
                                    <div className="title-2 text-[#155EEF] space-x-[10px] inline-flex items-center cursor-pointer" >
                                        <span>
                                            Liên hệ
                                        </span>
                                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="1.04199" width="27" height="27" rx="13.5" fill="white" />
                                            <path d="M11 20.542L17 14.542L11 8.54199" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="0.5" y="1.04199" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </section>
            <section className={`bg-banner_Quote_section h-[277px] bg-no-repeat bg-cover`}>
                <div className="container h-full flex items-center">
                    <div className='space-y-[1rem]'>
                        <div>
                            <div className='title-3 text-[#0999E8]'> Đội ngũ</div>
                            <div className='h1'> Gặp Gỡ Những Người Đồng Đội <br /> Trong Dự Án Sắp Tới </div>
                        </div>
                        <Link href={'/about'}>
                            <div className='bg-blue-light text-white py-[12px] px-[20px] inline-flex items-center justify-center space-x-[12px] rounded-[8px] cursor-pointer hover:bg-primary'>
                                <div> Tìm hiểu thêm </div>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16675 6.99984H12.8334M12.8334 6.99984L7.00008 1.1665M12.8334 6.99984L7.00008 12.8332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <SocialMeta title="Dịch vụ" />
        </main>
    )
}

export default Layout_3