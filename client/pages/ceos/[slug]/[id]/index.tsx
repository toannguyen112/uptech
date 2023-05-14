import React, { useEffect, useState } from 'react'
import axios from '../../../../configAxios'
import { useRouter } from 'next/router';
import Loading from '../../../../components/Loading';

function Index() {

    const [ceo, setCeo] = useState<any>();
    const [error, setError] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(false);

    const router = useRouter()
    const { id, slug } = router.query;

    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    useEffect(() => {
        if (!id) return;

        fetchListCeos();
    }, [id]);

    const fetchListCeos = async () => {

        setLoading(true);
        await axios
            .get(`/ceos/show/${id}`, { headers })
            .then((res: any) => {
                setCeo(res.data.data);
                setLoading(false);
            })
            .catch((error: any) => {
                setError(setError);
            });
    }

    if (!ceo) return <Loading />;
    if (error) return <div> {error} </div>;

    return (
        <main>
            <section className='bg-gray-50 py-[40px]' >
                <div className="container grid grid-cols-12" >
                    <div className="xl:col-start-2 xl:col-span-10 col-span-full">
                        <div className="grid xl:grid-cols-10 grid-cols-12 max-md:gap-y-[32px] md:gap-[12px] xl:gap-[48px]">
                            <div className="col-span-full xl:col-span-3 md:col-span-5">
                                <div className='md:w-[280px] md:h-[280px] aspect-w-1 aspect-h-1 rounded-full overflow-hidden'>
                                    <img src={ceo.thumbnail ? ceo.thumbnail.path : "/images/ceo/avatar.png"} alt="ceo" className='w-full h-full bg-center object-center' />
                                </div>
                            </div>
                            <div className="col-span-full md:col-span-7 xl:col-span-7 text-gray-700">
                                <div className="h1 text-gray-700" > {ceo.name} </div>
                                <div className="body-1 text-gray-700" > {ceo.title} </div>
                                <div className='pt-[32px]'>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Họ và tên:</div>
                                            <div className="col-span-5"> {ceo.name} </div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Ngày sinh:</div>
                                            <div className="col-span-5">{ceo.date}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Điện thoại:</div>
                                            <div className="col-span-5">{ceo.phone}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Email:</div>
                                            <div className="col-span-5">{ceo.email}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Vị trí công việc:</div>
                                            <div className="col-span-5">{ceo.position}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Làm việc tại:</div>
                                            <div className="col-span-5">{ceo.work_at}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Ngôn ngữ:</div>
                                            <div className="col-span-5">{ceo.lang}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Nơi ở hiện tại:</div>
                                            <div className="col-span-5">{ceo.address}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Các kênh social:</div>
                                            <div className="col-span-5">{ceo.social}</div>
                                        </div>
                                        <div className='w-full h-[1px] my-[12px]  bg-gray-200'></div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-7 items-center gap-x-[12px]' >
                                            <div className="col-span-2">Học vấn:</div>
                                            <div className="col-span-5">{ceo.education} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container grid grid-cols-12 text-gray-900 pt-[40px] pb-[66px]">
                    <div className='xl:col-start-2 xl:col-span-10 col-span-full prose'  >
                        <div className="" dangerouslySetInnerHTML={{ __html: ceo.detail }} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Index