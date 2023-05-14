import React from 'react'
import CardJob from '../../components/CardJob';
import ButtonJob from '../../components/ButtonJob';
import { useRouter } from 'next/router';
import axios from '../../configAxios'
import SocialMeta from '../../components/SocialMeta';

const steps = [
    {
        name: "Bước 01",
        description: "Nhận hồ sơ",
    },
    {
        name: "Bước 02",
        description: "Bài kiểm tra",
    },
    {
        name: "Bước 03",
        description: "Phỏng vấn trực tiếp",
    },
    {
        name: "Bước 04",
        description: "Thông báo kết quả",
    },
];

function Index() {

    const router = useRouter();
    const [jobs, setJobs] = React.useState<any[]>([]);

    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        await axios
            .get(`/jobs/getListFeatured`, { headers })
            .then((res: any) => {
                setJobs(res.data.data)
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <main>
            <section className='bg-gradient' >
                <div className='pt-[88px] pb-[115px] container ' >
                    <div className='  grid grid-cols-12 border-b border-[#4FA6FC] ' >
                        <div className="text-white display-1 col-span-full md:col-span-4 " >Tuyển dụng</div>
                        <div className="md:col-start-7 md:col-span-6 col-span-full" >Uptech chắp cánh cho những giấc mơ số và đánh thức tiềm năng của những người trẻ đầy nhiệt huyết.</div>
                    </div>

                </div>
                <div className='relative'>
                    <img src="/images/jobs/banner.png" alt="banner" className='w-full h-full' />
                    <div className='container bg-job md:absolute bottom-[-80px] right-0 text-white pt-[72px] pb-[85px]' >
                        <div className='grid grid-cols-12' >
                            <div className="col-span-full md:col-span-6">
                                <div className='mb-[12px]' >Uptech</div>
                                <div className="h1" >Khai phá tiềm năng con người</div>
                            </div>
                            <div className="col-span-full md:col-span-6 body-2">
                                Tiềm năng của mỗi con người là vô tận. Chúng tôi xây dựng môi trường làm việc chuyên nghiệp với những thử thách, như một chất xúc tác thúc Uptechers không ngừng học hỏi và bứt phá giới hạn bản thân.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container lg:pt-[255px] lg:pb-[83px] py-[32px]' >
                <div className='grid grid-cols-12 ' >
                    <div className="space-y-[8px] xl:col-start-2 xl:col-span-10 col-span-full" >
                        <div className="text-primary font-semibold" >Uptech</div>
                        <div className="h1 text-gray-900 pb-[12px] border-b border-gray-500" >Những Giá Trị Đại Diện Cho Uptecher</div>
                    </div>
                </div >
                <div className="grid grid-cols-12 pt-[32px lg:pt-[56px] " >
                    <div className="xl:col-start-4 xl:col-span-8 md:col-start-2 md:col-span-10 text-gray-900 col-span-full " >
                        <div className='flex md:flex-row flex-col  max-md:space-y-[12px] md:space-x-[56px]'>
                            <div className='title-1 col-span-full md:min-w-[200px] lg:min-w-[370px]' >Chấp nhận thử thách</div>
                            <div className='body-2' >
                                Chào đón mỗi thử thách với tinh thần sẵn sàng giải quyết vấn đề, tạo cơ hội để bản thân không ngừng phát triển.
                            </div>
                        </div>
                        <div className="my-[32px] w-full h-[1px] bg-gray-300" ></div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[32px lg:pt-[56px] " >
                    <div className="xl:col-start-4 xl:col-span-8 md:col-start-2 md:col-span-10 text-gray-900 col-span-full " >
                        <div className='flex md:flex-row flex-col  max-md:space-y-[12px] md:space-x-[56px]'>
                            <div className='title-1 col-span-full md:min-w-[200px] lg:min-w-[370px]' >Lắng nghe & học hỏi</div>
                            <div className='body-2' >
                                Chúng tôi lắng nghe mọi đánh giá và góp ý để cải thiện và trở thành phiên bản tuyệt vời nhất.
                            </div>
                        </div>
                        <div className="my-[32px] w-full h-[1px] bg-gray-300" ></div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[32px lg:pt-[56px] " >
                    <div className="xl:col-start-4 xl:col-span-8 md:col-start-2 md:col-span-10 text-gray-900 col-span-full " >
                        <div className='flex md:flex-row flex-col  max-md:space-y-[12px] md:space-x-[56px]'>
                            <div className='title-1 col-span-full md:min-w-[200px] lg:min-w-[370px]' >Đam mê & nhiệt huyết</div>
                            <div className='body-2' >
                                Theo đuổi niềm đam mê công nghệ và trải nghiệm số toàn diện.
                            </div>
                        </div>
                        <div className="my-[32px] w-full h-[1px] bg-gray-300" ></div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[32px lg:pt-[56px] " >
                    <div className="xl:col-start-4 xl:col-span-8 md:col-start-2 md:col-span-10 text-gray-900 col-span-full " >
                        <div className='flex md:flex-row flex-col  max-md:space-y-[12px] md:space-x-[56px]'>
                            <div className='title-1 col-span-full md:min-w-[200px] lg:min-w-[370px]' >Sáng tạo & đổi mới</div>
                            <div className='body-2' >
                                Uptech sẵn sàng thử nghiệm mọi ý tưởng để chọn ra phương án tối ưu nhất.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-banner-job-become py-[80px] text-white flex items-center' >
                <div className='container space-y-[40px]' >
                    <div className='space-y-[12px]' >
                        <div className='font-semibold' >Quy trình</div>
                        <div className='display-2' >Trở thành Uptechers trong 4 bước</div>
                    </div>
                    <div className='grid grid-cols-12 gap-[12px] md:gap-x-[8px]' >
                        {
                            steps.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='col-span-full md:col-span-6 lg:col-span-3'
                                    >
                                        <div className='rounded-[12px] bg-step space-y-[12px] py-[24px] px-[32px] bg-no-repeat  '>
                                            <div className='title-3 text-[#0999E8]' >
                                                {item.name}
                                            </div>
                                            <div className="title-1" >
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
            <section className='bg-gray-100' >
                <div className="container py-[32px] lg:py-[96px]">
                    <div className='space-y-[8px]' >
                        <div className='text-primary font-semibold' >Quy trình</div>
                        <div className='display-2 text-gray-900 pb-[12px] border-b border-gray-500' >Những Giá Trị Đại Diện Cho Uptecher</div>
                    </div>
                    <div className="pt-[2rem]  grid grid-cols-12 max-md:gap-y-[32px] md:gap-[32px]">
                        {jobs.map((job: any, index: number) => {
                            return <CardJob key={index} item={job} />
                        })}
                    </div>
                </div>
            </section>
            <section  >
                <div className="container py-[32px] lg:py-[72px] flex md:flex-row flex-col md:items-end justify-between max-md:space-y-[12px]">
                    <div className="space-y-[2rem] text-gray-900 display-2">
                        <div>
                            Chúng tôi trân trọng sự quan tâm <br />
                            và ứng tuyển của mọi ứng viên.
                        </div>
                        <div className='body-1' >
                            Nếu chưa tìm được vị trí phù hợp, bạn có thể ứng tuyển với vị trí mở. <br />
                            Chúng tôi sẽ liên hệ với bạn ngay khi chúng tôi có những vị trí thích hợp.
                        </div>
                    </div>
                    <ButtonJob />
                </div>
            </section>
            <SocialMeta
                title="Tuyển dụng"
                description='Uptech chắp cánh cho những giấc mơ số và đánh thức tiềm năng của những người trẻ đầy nhiệt huyết.'
            />
        </main>
    )
}

export default Index