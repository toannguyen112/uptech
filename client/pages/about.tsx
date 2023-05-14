import Image from 'next/image'
import React, { useState } from 'react'
import CountUp from 'react-countup';
import CeoItem from '../components/CeoItem';
import SocialMeta from '../components/SocialMeta';
import { useRouter } from 'next/router';
import axios from '../configAxios'

const list = [
    {
        name: "Con người",
        description: "Khai phá tiềm năng con người, lấy con người là trung tâm của mọi vấn đề."
    },
    {
        name: "Giải pháp",
        description: "Tập trung vào vấn đề của khách hàng để tìm ra giải pháp tối ưu."
    },
    {
        name: "Đam mê",
        description: "Theo đuổi niềm đam mê công nghệ và trải nghiệm số toàn diện."
    },
    {
        name: "Đồng hành",
        description: "Thấu hiểu và sẵn sàng đồng hành để cùng nhau phát triển trong tương lai."
    },
]

const cul = [
    {
        number: 30,
        image: "/svg/about/ex.svg",
        description: "Năm kinh nghiệm, kinh doanh trong các lĩnh vực Viễn thông, Truyền thông, Công nghệ thông tin, Bán lẻ, Giáo dục, Tài chính",
    },
    {
        number: 20000,
        image: "/svg/about/group.svg",
        description: "Nhân viên làm việc trong lĩnh vực tư vấn và triển khai Công nghệ",
    },
    {
        number: 15,
        image: "/svg/about/user.svg",
        description: "Năm kinh nghiệm trung bình tư vấn về công nghệ và chuyển đổi số của mỗi chuyên gia",
    },
]

const techDes = [
    {
        name: "Phát triển thương hiệu",
        description: "Phủ rộng hình ảnh thương hiệu thông qua sản phẩm số độc đáo, chỉnh chu và chuyên nghiệp; đồng thời, tạo ra sự gắn kết giữa khách hàng và doanh nghiệp mọi lúc, mọi nơi.",
    },
    {
        name: "Trải nghiệm số",
        description: "Nâng tầm trải nghiệm khách hàng từ các kênh truyền thống tới trực tuyến, ghi dấu ấn tượng mạnh mẽ và lôi cuốn khách hàng tiếp tục đồng hành cùng sản phẩm và dịch vụ của doanh nghiệp.",
    },
    {
        name: "Đột phá kinh doanh",
        description: "Khai phá thị trường tiềm năng trên toàn thế giới, loại bỏ rào cản về địa lý, văn hóa, con người, giúp khách hàng tập trung vào giá trị sản phẩm và dịch vụ mà doanh nghiệp cung cấp.",
    },
]
function About() {

    const [ceos, setCeos] = useState<any>();
    const router = useRouter();
    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    React.useEffect(() => {
        fetchListCeos();
    }, []);

    const fetchListCeos = async () => {
        await axios
            .get(`/ceos/getlistCeo`, { headers })
            .then((res: any) => {
                setCeos(res.data.data)
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <main>
            <section className='bg-banner-about h-[968px] bg-no-repeat bg-center bg-cover w-full'>
                <div className="container py-[32px] md:py-[88px] pb-[60px] md:pb-[120px]">
                    <div className='display-1 text-[#4FA6FC] opacity-[68] border-b border-[#4FA6FC]'>
                        Về chúng tôi
                    </div>
                    <div className='text-white mt-[24px] md:mt-[56px]'>
                        <div className='font-semibold mb-[7px]'>
                            Uptech
                        </div>
                        <div className='lg:flex-row flex-col flex space-y-[12px] lg:space-x-[28px]'>
                            <div className='h1 lg:min-w-[300px] xl:min-w-[492px]'>
                                Nơi Những Giấc Mơ Số <br />
                                Trở Thành Hiện Thực
                            </div>
                            <div className='body-2'>
                                Hành trình của Uptech bắt đầu từ năm 2021, khi đại dịch COVID-19 đang
                                đạt tới đỉnh điểm và xu hướng chuyển đổi số phát triển mạnh mẽ. Chúng tôi - những con người đam mê công nghệ và kinh doanh đã nhanh chóng bắt nhịp và nắm bắt cơ hội để vươn lên, đồng hành, và hội nhập cùng các doanh nghiệp trong khu vực Châu Á nói riêng và thế giới nói chung.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gray-50 py-[32px] md:py-[80px]'>
                <div className="container">
                    <div className='space-y-[8px]'>
                        <div className='text-[#004EEB] font-semibold' >Uptech</div>
                        <div className='h1 text-gray-900' >Những giá trị mang lại</div>
                    </div>
                    <div className='grid grid-cols-12 max-md gap-y-[32px] md:gap-[32px] mt-[32px] md:mt-[52px]'>
                        <div className="col-span-full md:col-span-2">
                            <div className='py-[35px] border-t border-b border-gray-300'>
                                <svg width="80" height="85" viewBox="0 0 80 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M62.9042 30.1893C55.7041 37.2926 48.5174 44.2243 41.5323 51.3592C39.6337 53.2932 38.5457 53.9033 36.5486 51.4948C34.3098 48.7836 31.5963 46.3932 28.9948 43.9757C27.5351 42.6201 27.0291 41.8248 28.8381 40.058C35.774 33.28 42.4726 26.2399 49.2518 19.2721C49.7533 18.7525 50.4697 18.3684 50.5324 17.4647C49.704 16.7191 48.7055 17.0806 47.8055 17.0715C41.586 17.0354 35.3665 17.0083 29.147 17.0715C27.5799 17.0715 26.9575 16.7326 27.0022 15.0156C27.1142 10.6731 27.0873 6.32614 27.0022 1.9837C26.9843 0.555797 27.3336 0 28.9053 0C45.2726 0.0572365 61.637 0.0572365 77.9984 0C79.7447 0 80.0044 0.668764 79.9999 2.19156C79.9581 18.7088 79.9581 35.2231 79.9999 51.7343C79.9999 53.5418 79.4313 54.0569 77.7029 53.9936C73.673 53.8897 69.6431 53.8535 65.649 53.9936C63.6654 54.0659 63.043 53.5418 63.0923 51.4496C63.2311 45.2726 63.155 39.0865 63.1281 32.9231C63.137 32.0148 63.3967 31.0388 62.9042 30.1893Z" fill="#155EEF" />
                                    <path d="M0.0539865 33.5582C0.0539865 28.7338 0.12147 23.9003 0 19.0759C0 17.4135 0.449887 16.9618 2.08748 17.0025C6.51137 17.1109 10.9353 17.1109 15.3592 17.0025C17.0237 16.9618 17.4196 17.4949 17.4062 19.103C17.3342 27.6858 17.3612 36.2911 17.3747 44.8874C17.3747 57.6803 26.9933 67.3743 39.7611 67.5098C41.8755 67.5324 43.999 67.6137 46.1045 67.4782C47.6971 67.3743 48.0255 68.0067 47.9985 69.4613C47.9175 73.9785 47.958 78.5409 47.9985 83.0763C47.9985 84.1107 48.0345 84.8199 46.5679 84.8832C34.3714 85.5472 23.0163 83.528 13.5506 75.013C4.99975 67.3547 0.508373 57.7917 0.0764809 46.3239C-0.0809798 42.0642 0.0539865 37.8089 0.0539865 33.5582Z" fill="#101828" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-full md:col-start-4 md:col-span-9">
                            <div className='grid grid-cols-2 gap-x-[48px] gap-y-[52px]'>
                                {
                                    list.map((item: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="col-span-full md:col-span-1 group">
                                                <div className='group-hover:border-[#155EEF] border-gray-50 transition-all border-b-[5px] border-solid pb-[1rem]'>
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.5917 11.3327C10.866 13.9993 8.14551 16.6013 5.50125 19.2797C4.78255 20.0057 4.37066 20.2347 3.61467 19.3306C2.76715 18.3129 1.73996 17.4155 0.755141 16.508C0.202559 15.9992 0.0110199 15.7006 0.695815 15.0374C3.32143 12.493 5.85721 9.8502 8.42349 7.23456C8.61334 7.03949 8.88454 6.89531 8.90827 6.55606C8.59469 6.27617 8.2167 6.41187 7.876 6.40848C5.52159 6.39491 3.16718 6.38473 0.812773 6.40848C0.21951 6.40848 -0.0161011 6.28126 0.000849274 5.63668C0.0432252 4.00657 0.033055 2.37477 0.000849274 0.744659C-0.00593088 0.20864 0.126282 0 0.72124 0C6.91717 0.021486 13.112 0.021486 19.3056 0C19.9667 0 20.065 0.251047 20.0633 0.822688C20.0475 7.02309 20.0475 13.2224 20.0633 19.4205C20.0633 20.099 19.8481 20.2924 19.1938 20.2686C17.6682 20.2296 16.1427 20.2161 14.6307 20.2686C13.8798 20.2958 13.6442 20.099 13.6629 19.3137C13.7154 16.9949 13.6866 14.6727 13.6764 12.359C13.6798 12.018 13.7781 11.6516 13.5917 11.3327Z" fill="#155EEF" />
                                                    </svg>
                                                    <div className='text-gray-900 title-1 mt-[1rem] mb-[8px]'>{item.name} </div>
                                                    <div className='body-2 text-gray-900'> {item.description} </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-md:pt-[32px] md:pt-[76px]">
                    <div className='grid grid-cols-12 max-md:gap-y-[32px] md:gap-[2rem]'>
                        <div className='col-span-full md:col-span-6 flex items-center' >
                            <div className='xl:space-y-[103px] space-y-[32px]'>
                                <div className="space-y-[6px]" >
                                    <div className='text-[#004EEB] font-semibold' >Lý Tưởng Mà Uptech Theo Đuổi</div>
                                    <div className='h1 text-gray-900'>Những Giá Trị Đại Diện Cho Uptech</div>
                                </div>
                                <div className='space-y-[32px]'>
                                    <div className='space-y-[30px]'>
                                        <div className='text-[28px] font-bold text-[#004EEB] border-b border-gray-300 leading-[130%]'>
                                            Sứ mệnh
                                        </div>
                                        <div className='body-2 text-gray-900'>
                                            Đem đến cho khách hàng những giải pháp và chiến lược số tối ưu nhất với mô hình kinh doanh của bạn.
                                        </div>
                                    </div>
                                    <div className='space-y-[30px]'>
                                        <div className='text-[28px] font-bold text-[#004EEB] border-b border-gray-300 leading-[130%]'>
                                            Tầm nhìn
                                        </div>
                                        <div className='body-2 text-gray-900'>
                                            Đẩy mạnh dịch vụ Cho thuê nhân sự IT tới thị trường châu Âu, Mỹ, Nhật Bản, Hàn Quốc,...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-full md:col-span-6' >
                            <img src='/images/about/human.png' className='w-full h-full object-fit' />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="container  md:pb-[64px] md:pt-[96px] py-[2rem]">
                    <div className="grid grid-cols-2 gap-y-[32px] md:gap-x-[24px] lg:gap-x-[64px] text-gray-900 pb-[24px] border-b border-gary-300">
                        <div className="col-span-full md:col-span-1 h1">
                            Văn hoá doanh nghiệp
                        </div>
                        <div className="col-span-full md:col-span-1 body-1">
                            FPT Digital hướng tới những giá trị về đổi mới, trao quyền và cộng tác, hình thành văn hóa doanh nghiệp của FPT Digital từ trong nội bộ cũng như khi làm việc cùng các đối tác và khách hàng.
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#162670]'>
                <div className="container py-[2rem] md:py-[64px]">
                    <div className="grid grid-cols-3 gap-y-[32px] md:gap-x-[24px] lg:gap-x-[64px]">
                        {
                            cul.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-span-full md:col-span-1 text-white">
                                        <div className="space-y-[24px]">
                                            <div className="flex items-center space-x-[20px]">
                                                <Image src={item.image} width='64px' height='64px' />
                                                <div className="text-[48px] text-white leading-[150%] font-display font-semibold" >
                                                    <CountUp
                                                        enableScrollSpy={true}
                                                        end={Number(item.number)} />+
                                                </div>
                                            </div>
                                            <div className='body-2 font-normal'>
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='py-[32px] md:py-[96px] container'>
                <div className=" grid grid-cols-12 gap-y-[32px] md:gap-[2rem] pb-[24px] border-b border-gray-300">
                    <div className='col-span-full md:col-span-6 h1 text-gray-900'>
                        Kết Hợp Hài Hòa Giữa <br />
                        Con Người Và Công nghệ
                    </div>
                    <div className='col-span-full md:col-span-6'>
                        <div className='body-1 text-gray-900'>
                            Uptech dựa trên nhu cầu của khách hàng, sự thấu hiểu về trải nghiệm người dùng cùng khả năng áp dụng công nghệ linh hoạt và sáng tạo để tạo ra những sản phẩm số hoàn hảo.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 max-md:gap-y-[2rem] xl:gap-x-[88px] pt-[56px] ">
                    <div className='col-span-full lg:col-span-6 h1 text-gray-900'>
                        <img src='/images/about/rounded.png' className='w-full h-full' />
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                        {
                            techDes.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <div className='body-1 text-gray-900'>
                                            <div className='title-1 text-gray-900' >{item.name} </div>
                                            <div className='mt-[8px] mb-[12px] body-2 text-gray-900'>
                                                {item.description}
                                            </div>
                                            <div className="flex items-center space-x-[8px] title-2 text-[#155EEF]">
                                                <div>
                                                    Xem thêm dịch vụ orem ipsum dolor
                                                </div>
                                                <div>
                                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                                                        <path d="M11 20L17 14L11 8" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-[1px] bg-gray-300 my-[28px]'></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='bg-gray-50 md:py-[80px] py-[32px]'>
                <div className="container">
                    <div className='grid grid-cols-12 max-md:gap-y-[32px] md:gap-x-[32px]' >
                        <div className='col-span-full md:col-span-3 space-y-[8px]'>
                            <div className='font-semibold text-[#004EEB]'>
                                Uptecher
                            </div>
                            <div className='h1 text-gray-900 pb-[12px] border-b border-gray-500'>
                                Gặp gỡ <br />
                                Uptechers
                            </div>
                        </div>
                        <div className='col-span-full md:col-span-9'>
                            <div className='grid grid-cols-12 gap-[12px] lg:gap-[32px]'>
                                {
                                    ceos && ceos.length ? ceos.map((item: any, index: number) => {
                                        return (
                                            <CeoItem
                                                item={item}
                                                key={index} />
                                        )
                                    }) : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SocialMeta
                title="Về Uptech"
                description='Uptech - nơi những người trẻ theo đuổi ước mơ công nghệ, chuyển đổi số và trải nghiệm người dùng trong thời đại 4.0'
            />
        </main>
    )
}

export default About