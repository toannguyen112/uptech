import Image from 'next/image'
import React, { useState } from 'react'
import BannerHomePage from '../components/BannerHomePage'
import BlogItem from '../components/BlogItem'
import Companies from '../components/Companies'
import SectionNearFooter from '../components/SectionNearFooter'
import SocialMeta from '../components/SocialMeta'
import SolutionItem from '../components/SolutionItem'
import TechItem from '../components/TechItem';
import axios from '../configAxios';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { field, logos, solutions, tech } from '../seeds/home'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Techs from '../components/Techs'

function Index() {

  const router = useRouter();
  const [posts, setPosts] = React.useState<any>([]);
  const [menu, setMenu] = React.useState<any>([]);
  const [error, setError] = React.useState<any>();

  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  const [swiperInstance, setSwiperInstance] = useState<any>();

  React.useEffect(() => {
    fetchData();
    fetchServices();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/posts/getListFeatured`, { headers })
      .then((res: any) => {
        setPosts(res.data.data)
      })
      .catch((error: any) => {
        console.log(error);
        setError(error)
      });
  }

  const fetchServices = async () => {

    await axios
      .get(`/services/nav`, { headers })
      .then((res: any) => {
        setMenu(res.data.data)
      })
      .catch((error: any) => {
        console.log(error);
        setError(error)
      });
  }

  return (
    <React.Fragment>
      <SocialMeta title="Up Teach" />
      <BannerHomePage />
      <section>
        <div className='container max-md:py-[2rem] md:py-[92px]'>
          <div className='grid grid-cols-12 md:gap-[2rem]'>
            <div className="col-span-full xl:col-span-4 md:col-span-6">
              <div className='text-[#004EEB] title-3'>Uptech</div>
              <div className='text-gray-900 display-2 font-bold'>
                Đối Tác Công Nghệ
                Đáng Tin Cậy
              </div>
            </div>
          </div>
          <div></div>
          <div className='grid grid-cols-12 gap-[12px] md:gap-[2rem]'>
            <div className='col-span-full md:col-span-6'>
              <div className='grid grid-cols-2 gap-[32px]'>
                <div className="col-span-1">
                  <div className='text-gray-700'>
                    <div className='border-b border-gray-700 py-[4px] mb-[20px]'>01</div>
                    <div className='title-3 font-semibold'>Thiết kế giải pháp số tối ưu, phù hợp với từng doanh nghiệp. </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='text-gray-700'>
                    <div className='border-b border-gray-700 py-[4px] mb-[20px]'>02</div>
                    <div className='title-3 font-semibold'>Năng lực trong lĩnh vực Công nghệ thông tin đã được kiểm chứng.</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='text-gray-700'>
                    <div className='border-b border-gray-700 py-[4px] mb-[20px]'>03</div>
                    <div className='title-3 font-semibold'>Quy trình làm việc chuyên nghiệp để tạo ra sản phẩm tốt nhất.</div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='text-gray-700'>
                    <div className='border-b border-gray-700 py-[4px] mb-[20px]'>04</div>
                    <div className='title-3 font-semibold'>Luôn đồng hành cùng doanh nghiệp trước, trong và sau dự án.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-full md:col-start-8 md:col-span-4'>
              <div className='title-1 text-gray-900'>Đối Tác Công Nghệ Đáng Tin Cậy</div>
              <div className='text-gray-700 body-2'>Chúng tôi đồng hành với doanh nghiệp để mang lại giá trị cộng hưởng tới khách hàng thông qua từng sản phẩm số.
                Tại Uptech, chúng tôi tin vào công nghệ, con người, và những mối quan hệ cùng phát triển.</div>
              <Link href="/about">
                <div className=' inline-flex items-center mt-[25px] space-x-[6px]'>
                  <div className='title-2 text-blue-fdx'>Tìm hiểu thêm</div>
                  <div className="-rotate-90 rounded-full bg-blue-fdx text-white flex item-center justify-center p-[6px]" >
                    <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='md:bg-christopher-burns  bg-no-repeat bg-center'>
        <div className="container flex items-center  h-full">
          <div className='space-y-[2rem] w-full md:py-[80px]'>
            <div>
              <div className='title-3 text-blue-cyan max-md:text-[#004EEB]'>Dịch vụ</div>
              <div className='display-2 md:text-white max-md:text-gray-900 '>Giải pháp Công nghệ Toàn diện</div>
            </div>
            <div className='grid grid-cols-3 gap-[12px] lg:gap-[32px]'>
              {menu.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="col-span-full md:col-span-1 " >
                    <SolutionItem item={item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Techs />
      <section className='bg-blue-navy relative'>
        <div className='container grid grid-cols-12 max-md:h-[1400px] md:h-[1100px]'>
          <div className='col-span-3 border-l border-r border-blue-fdx'></div>
          <div className='col-span-3 border-r border-blue-fdx'></div>
          <div className='col-start-8 col-span-5 absolute right-0'>
            <img src="/images/home/Rectangle_43.png" className='w-full' />
          </div>
        </div>
        <div className=" absolute inset-y-0 left-0 ">
          <div className=" container h-full flex items-center">
            <div>
              <div>
                <p className='font-semibold'>Công nghệ</p>
                <p className='display-1 text-white mt-[12px] mb-[1rem]'>Tập trung vào kết quả <br className='md:block hidden' />
                  kinh doanh số</p>
                <p className='text-white opacity-60 body-2'>Với phương pháp tiếp cận tập trung vào kết quả kinh doanh,<br className='md:block hidden' />
                  Uptech hướng đến cung cấp những giá trị hữu hình cho doanh <br className='md:block hidden' />
                  nghiệp, không chỉ tập trung giải quyết các vấn đề ngắn hạn mà <br className='md:block hidden' />
                  còn hướng tới sự bền vững dài hạn.</p>
              </div>
              <div className='mt-[48px] md:flex max-md:flex-col items-center md:space-x-[52px] max-md:space-y-[1rem]'>
                <div className='max-md:space-y-[1rem] md:space-y-[2rem]'>
                  <div className='bg-gradient text-white md:max-w-[312px] p-[2rem] rounded-[12px]'>
                    <Image src="/svg/home/operate.svg" width={30} height={30} alt="operate" />
                    <div className='text-[24px] font-semibold mb-[16px] mt-[12px] leading-[150%]'>Vận hành <br className='md:block hidden' />
                      xuất sắc</div>
                    <div className='body-3'>
                      Tối ưu và tự động hóa quy trình, <br className='md:block hidden' />
                      tăng hiệu quả và giảm chi phí,
                      gia tăng mức độ cạnh tranh
                    </div>
                  </div>
                  <div className='bg-gradient text-white md:max-w-[312px] p-[2rem] rounded-[12px]'>
                    <Image src="/svg/home/model.svg" width={30} height={30} alt="operate" />
                    <div className='text-[24px] font-semibold mb-[16px] mt-[12px] leading-[150%]'>Mô hình kinh doanh <br className='md:block hidden' />
                      đổi mới</div>
                    <div className='body-3'>
                      Tạo dựng hướng đi kinh doanh <br className='md:block hidden' /> mới, xây dựng nền tảng số, thiết kế các sản phẩm số mới
                    </div>
                  </div>
                </div>
                <div className='bg-gradient text-white md:max-w-[312px] p-[2rem] rounded-[12px]'>
                  <Image src="/svg/home/ex.svg" width={30} height={30} alt="operate" />
                  <div className='text-[24px] font-semibold mb-[16px] mt-[12px] leading-[150%]'>Trải nghiệm <br className='md:block hidden' />
                    khách hàng</div>
                  <div className='body-3'>
                    Tương tác và gắn kết mối quan hệ với khách hàng, xây dựng trải nghiệm tốt và xuyên suốt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-50 max-md:py-[2rem] md:py-[72px]'>
        <div className='container grid grid-cols-12 max-md:gap-y-[12px] md:gap-[32px]'>
          <div className="col-span-full md:col-span-3">
            <div className='text-primary font-semibold'>Lĩnh vực</div>
            <div className='h1 text-gray-900'>Chuyên Môn
              Của Chúng Tôi
            </div>
          </div>
          <div className='col-span-full md:col-span-9'>
            <div className='grid grid-cols-3 gap-[4px]'>
              {field.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="col-span-full md:col-span-1 p-[10px] lg:py-[14px] lg:px-[27px]  space-y-[1.75rem] lg:space-y-[3.75rem] bg-white">
                    <div>
                      <Image src={item.image}
                        alt={item.name}
                        width={56}
                        height={56} />
                    </div>
                    <div className='title-3 font-semibold hover:text-blue-fdx text-gray-900 hover:bg-[#83B8FF] inline-block py-[6px] px-[8px] rounded-[40px]'>
                      {item.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Companies />
      <section className='bg-gray-50'>
        <div className="container py-[64px]">
          <div className="grid grid-cols-12 max-md:gap-y-[24px] md:gap-[2rem]">
            <div className="col-span-full lg:col-span-3 xl:col-span-2">
              <div className='space-y-[8px]'>
                <div className=' text-blue-fdx font-semibold'>
                  Insights
                </div>
                <div className=' h1 text-gray-900'>
                  Góc Nhìn Uptechers
                </div>
                <Link href="/blogs">
                  <div className='cursor-pointer inline-flex items-center space-x-[6px]'>
                    <div className='title-2 text-blue-fdx'>Xem chi tiết</div>
                    <div className="-rotate-90 rounded-full bg-blue-fdx text-white flex item-center justify-center p-[6px]" >
                      <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                          strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className='flex items-center space-x-[1rem] max-md:my-[24px] md:mt-[48px]'>
                <div
                  onClick={() => swiperInstance.slidePrev()}
                  className="cursor-pointer hover:bg-primary hover:text-white rotate-90 rounded-full bg-white border border-blue-fdx text-blue-fdx flex item-center justify-center p-[14px]" >
                  <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  onClick={() => swiperInstance.slideNext()}
                  className="cursor-pointer hover:bg-primary hover:text-white -rotate-90 rounded-full bg-white border border-blue-fdx text-blue-fdx flex item-center justify-center p-[14px]" >
                  <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-9 xl:col-span-10 ">
              <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                direction='horizontal'
                spaceBetween={32}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 12 },
                  480: { slidesPerView: 3, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 32 },
                }}

              >
                {posts.map((item: any, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <BlogItem item={item} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <SectionNearFooter />
      <SocialMeta
        title="Uptech | Đơn vị tư vấn thiết kế và triển khai chuyển đổi số"
        description="Uptech là đơn vị thiết kế và triển khai chuyển đổi số cho doanh nghiệp với dịch vụ đa dạng và giải pháp công nghệ toàn diện, bền vững."
      />
    </React.Fragment>
  )
}

export default Index
