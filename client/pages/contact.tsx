import React, { useState } from 'react'
import Banner from '../components/Banner'
import ConnectSocialContact from '../components/ConnectSocialContact'
import SocialMeta from '../components/SocialMeta'
import axios from '../configAxios'
import { toast } from 'react-toastify';

function Index() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        type: "contact",
        email: "",
        note: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('contacts/create',
            {
                ...form
            }).then((res) => {
                toast.success('Gửi thành công !', {
                    position: toast.POSITION.TOP_CENTER
                });
                setForm({
                    name: "",
                    phone: "",
                    type: "contact",
                    email: "",
                    note: "",
                })
            }).catch((error) => {
                toast.error('Gửi Thất bại @@', {
                    position: toast.POSITION.TOP_CENTER
                });
            });
    }

    return (
        <main>
            <Banner
                title='Liên hệ'
                description={`
                Bạn có ý tưởng phát triển sản phẩm số, Uptech có đội <br/> ngũ chuyên nghiệp hỗ trợ bạn.`}
                textColor='text-gray-700'
                bgBanner="bg-banner-view" />

            <div className='max-xl:relative md:mt-[72px]'>
                <div className='xl:relative xl:container'>
                    <section className='max-xl:container max-md:py-[2rem] md:pb-[42px] '>
                        <div className=" grid grid-cols-12 gap-[2rem] ">
                            <div className='lg:block hidden absolute left-0 top-0 bottom-[72px] xl:max-w-[600px] lg:w-[420px] xl:w-[600px]'>
                                <img src="/images/contact/Rectangle 44.png" alt="house" className='w-full h-full' />
                            </div>
                            <form
                                onSubmit={(e) => onSubmit(e)}
                                className="lg:col-start-6 lg:col-span-7 md:col-start-2 md:col-span-10 col-span-full">
                                <div className='h2 text-[#1A1919]'>
                                    Liên hệ với chúng tôi
                                </div>
                                <div className='mt-[1rem] mb-[24px] space-y-[1rem]'>
                                    <div className='space-y-[6px]'>
                                        <div className='text-gray-700 font-semibold' >Họ và tên*</div>
                                        <input
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required type="text" placeholder='Nhập họ và tên' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                                    </div>
                                    <div className="flex items-center space-x-[1rem]">
                                        <div className='flex-1 space-y-[6px]'>
                                            <div className='text-gray-700 font-semibold' >Số điện thoại*</div>
                                            <input
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                required type="number" placeholder='Nhập số điện thoại' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                                        </div>
                                        <div className='flex-1 space-y-[6px]'>
                                            <div className='text-gray-700 font-semibold' >Email*</div>
                                            <input
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                required type="email" placeholder='Nhập email' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                                        </div>
                                    </div>
                                    <div className="space-x-[1rem]">
                                        <div className='space-y-[6px]'>
                                            <div className='text-gray-700 font-semibold' >Lời nhắn</div>
                                            <textarea
                                                value={form.note}
                                                onChange={(e) => setForm({ ...form, note: e.target.value })}
                                                rows={5}
                                                placeholder='Nhập lời nhắn'
                                                className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit" className="bg-primary space-x-[8px] font-semibold text-white py-[10px] px-[2rem] inline-flex items-center justify-center rounded-[8px] cursor-pointer hover:bg-secondary">
                                    <span>
                                        Gửi yêu cầu
                                    </span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.83301 14.1666L14.1663 5.83325M14.1663 5.83325H5.83301M14.1663 5.83325V14.1666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </form>
                        </div>
                    </section>
                    <section className='max-xl:container bg-gray-100 max-md:py-[32px] md:pt-[40px]'>
                        <div className="grid grid-cols-12 md:pb-[72px] gap-[12px] md:gap-[2rem]">
                            <div className="lg:col-start-6 lg:col-span-7 md:col-start-2 md:col-span-10 col-span-full">
                                <div className="grid grid-cols-2 gap-[12px] lg:gap-[2rem]">
                                    <div className="col-span-full md:col-span-1 space-y-[8px]">
                                        <div className='title-2 text-[#1a1919] font-semibold'>
                                            Văn phòng đại diện
                                        </div>
                                        <div className="body-2 text-gray-700 ">
                                            <div>
                                                VCB Tower, 5 Công Trường Mê Linh, P. Bến Nghé, Q.1, TP. Hồ Chí Minh, Việt Nam
                                            </div>
                                            <div className="lg:mt-[8px] lg:mb-[1rem]">
                                                Tel: (+84) 968 726 135 <br />
                                                Email: info@uptech.vn
                                            </div>
                                            <div className="space-y-[8px]">
                                                <div className='lg:block hidden'>
                                                    <ConnectSocialContact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full md:col-span-1 space-y-[8px]">
                                        <div className='title-2 text-[#1a1919] font-semibold'>
                                            Trung tâm công nghệ
                                        </div>
                                        <div className="body-2 text-gray-700 space-y-[8px]">
                                            <div>
                                                B2, Đ. Nguyễn Hữu Thọ, P. Tân Phong, Q. 7, TP. Hồ Chí Minh, Việt Nam
                                            </div>
                                            <div className="">
                                                Tel: (+84) 868 046 068 <br />
                                                Email: info@uptech.vn
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full lg:hidden block">
                                        <ConnectSocialContact />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
            <section className="">
                <img src="/images/contact/Frame 3467349.png" alt="" className='w-full h-full' />
            </section>
            <SocialMeta
                title="Liên hệ"
                description='Bạn có ý tưởng phát triển sản phẩm số, Uptech có đội ngũ chuyên nghiệp hỗ trợ bạn.'
            />
        </main>
    )
}


export default Index
