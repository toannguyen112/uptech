import React, { useState } from 'react';
import axios from '../configAxios';

import { useRouter } from 'next/router'

function BannerHomePage() {

    const [banners, setBanners] = React.useState<any>([]);
    const [error, setError] = React.useState<any>();
    const router = useRouter();
    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };
    const [slideIndex, setSlideIndex] = useState<number>(0);

    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex(currentSlide => (currentSlide + 1) % banners.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [banners.length]);

    const currentSlideElement = banners[slideIndex];

    const nextSlide = () => {
        const nextIndex = (slideIndex + 1) % banners.length;
        setSlideIndex(nextIndex);
    }

    const fetchData = async () => {
        await axios
            .get(`/banners/getListBanner`, { headers })
            .then((res: any) => {
                setBanners(res.data.data)
            })
            .catch((error: any) => {
                console.log(error);
                setError(error)
            });
    }

    return (
        <section
            style={{
                backgroundImage: `url(${banners[slideIndex] && banners[slideIndex].thumbnail ? banners[slideIndex].thumbnail.path : "/images/banner_home.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            className='h-[92vh]  text-white bg-no-repeat bg-cover bg-center relative transition-all'>
            {
                banners[slideIndex] && (
                    <div className="container h-full">
                        <div className='lg:relative grid grid-cols-12 h-full '>
                            <div className="col-span-full lg:col-span-5 h-full flex lg:items-center items-start max-lg:pt-[80px]">
                                <div>
                                    <div className='title-3'>
                                        {banners[slideIndex].type}
                                    </div>
                                    <div className='display-1 mt-[12px] mb-[20px] font-bold'>
                                        {banners[slideIndex].name}
                                    </div>
                                    <div className='text-[18px]'>
                                        {banners[slideIndex].description}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end lg:grid grid-cols-12 h-full absolute inset-y-0 inset-x-0">
                                {
                                    banners.map((item, index) => {
                                        return (
                                            <div
                                                onClick={() => setSlideIndex(index)}
                                                key={index}
                                                className="col-span-full lg:col-span-4 xl:col-span-3 lg:h-full w-full flex items-end  ">
                                                <div className='bg-blue-navy w-full cursor-pointer  transition-all group'>
                                                    <div className='flex items-start py-[24px] px-[2rem]  justify-between'>
                                                        <div className='space-y-[2px] '>
                                                            <div className='title-3 font-semibold uppercase'>
                                                                {item.type}
                                                            </div>
                                                            <div className='text-white opacity-50'>
                                                                {item.sub_name}
                                                            </div>
                                                        </div>
                                                        <div className={`${slideIndex === index ? 'rounded-full group-hover:bg-white flex item-center justify-center w-[20px] h-[20px] p-[6px] bg-white text-primary  group-hover:border-white group-hover:text-primary' : "rounded-full group-hover:bg-white flex item-center justify-center w-[20px] h-[20px] p-[6px] text-[#B2CCFF] border border-[#B2CCFF] group-hover:border-white group-hover:text-primary"}`} >
                                                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.16602 11L6.16602 6L1.16602 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                )
            }

        </section >
    )
}

export default BannerHomePage
