import axios from '../../../../../configAxios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RelatedItem from '../../../../../components/RelatedItem'
import BlogItemV2 from '../../../../../components/BlogItemV2'
import Loading from '../../../../../components/Loading'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'


function Index() {

  const [blog, setBlog] = useState<any>();
  const [ceo, setCeo] = useState<any>();

  const [error, setError] = useState<any>();
  const [swiperInstance, setSwiperInstance] = useState<any>();
  const router = useRouter();
  const { id, slug } = router.query;
  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  useEffect(() => {
    if (!id) return;
    // increaseView();
    fetchData();
  }, [id]);

  const fetchData = async () => {

    await axios
      .get(`/posts/findByIdClient/${id}`, { headers })
      .then((res: any) => {
        setBlog(res.data.data);
        setCeo(res.data.data.ceo)
      })
      .catch((error: any) => {
        setError(error)
      });
  }

  const increaseView = async () => {
    await axios.post(`/posts/increaseView`, { id });
  }

  if (!blog) return <Loading />
  if (error) return <div> {error} </div>

  return (
    <main>
      <section>
        <section
          className={`h-full lg:h-[360px]   bg-no-repeat bg-cover`}>
          <img src={blog.banner ? blog.banner.path : "/images/blogs/banner-blog-detail.png"} alt="" className="w-full" />
        </section>
        <div className="container md:pt-[53px] max-md:py-[2rem] md:pb-[4.5rem]">
          <div className='display-2 text-[#1A1919]'>
            {blog.name}
          </div>
          <div className='flex items-center justify-between pt-[2rem] pb-[48px] border-b border-gray-200'>
            <div className='body-1 text-gray-900'>
              {blog.posted_at}
            </div>
          </div>
          <div className='py-[48px]'>
            <div className="grid grid-cols-12 gap-[2rem]">
              <div className="col-span-full md:col-span-7 xl:col-span-8 ">
                <div className='text-gray-900  format'>
                  <div className="" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {ceo && (
                  <div className="flex md:flex-row flex-col items-start max-md:space-y-[32px] md:space-x-[32px] py-[32px]">
                    <div className="aspect-w-1 aspect-h-1 min-w-[140px] max-w-[140px] rounded-full  overflow-hidden">
                      <img src={ceo.thumbnail ? ceo.thumbnail.path : ""} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className='text-gray-600 title-2'>
                        Tác giả: {ceo.name}
                      </div>
                      <div className='text-gray-900 body-2 mt-[8px] mb-[1rem]'>
                        {ceo.description}
                      </div>
                      <Link
                        href={{
                          pathname: '/ceos/[slug]/[id]',
                          query: {
                            slug: ceo.slug,
                            id: ceo.id
                          },
                        }}
                      >
                        <a href={`/ceos/${ceo.slug}/${ceo.id}`}>
                          <div className=' flex items-center space-x-[6px] '>
                            <div className='title-2 text-blue-fdx'>Xem hồ sơ</div>
                            <div className="-rotate-90 rounded-full bg-blue-fdx text-white flex item-center justify-center p-[6px]" >
                              <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                                  strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}

              </div>
              <div className="col-span-full md:col-span-5 xl:col-span-4">
                <div>
                  <div className='title-1 text-gray-900' >Bài viết liên quan</div>
                  {
                    blog && blog.related ? blog.related.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className='mt-[24px]'>
                          <RelatedItem item={item} />
                        </div >
                      )
                    }) : ""
                  }
                </div>
              </div>
            </div>
          </div >
        </div >
      </section >
      {blog.posts.length ?
        (
          <section className='bg-gray-50'>
            <div className="container py-[72px]">
              <div className="grid grid-cols-12 max-md:gap-y-[24px] md:gap-[2rem]">
                <div className="col-span-full lg:col-span-3 xl:col-span-2">
                  <div className='space-y-[8px]'>
                    <div className=' h1 text-gray-900'>
                      Bài viết
                      cùng chủ đề
                    </div>
                  </div>
                  <div className='flex items-center space-x-[1rem] max-md:my-[24px] md:mt-[48px]'>
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
                        {blog.posts.map((item: any, index: number) => {
                          return (
                            <SwiperSlide key={index}>
                              <BlogItemV2 item={item} />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        )
        : ""}

    </main >
  )
}

export default Index
