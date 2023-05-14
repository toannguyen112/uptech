import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from '../../../../configAxios'
import Loading from '../../../../components/Loading';
import CardProject from '../../../../components/CardProject';

function Index() {

  const [data, setData] = useState<any>();
  const [related, setRelated] = useState<any[]>([]);

  const [error, setError] = useState<any>();
  const router = useRouter();
  const { id, } = router.query;
  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  const fetchData = async () => {

    await axios
      .get(`/projects/findByIdClient/${id}`, { headers })
      .then((res: any) => {
        setData(res.data.data);
        setRelated(res.data.data.related)
      })
      .catch((error: any) => {
        setError(error)
      });
  }

  if (!data) return <Loading />
  if (error) return <div> {error} </div>

  return <main>
    <div className='bg-gradient  w-full container grid grid-cols-12 py-[33px]'>
      <div className="col-span-full md:col-span-6 text-white  flex items-center">
        <div className="space-y-[56px]">
          <div className="display-3">
            {data.name}
          </div>
          <div className="flex items-start space-x-[32px] ">
            <div className="space-y-[8px]" >
              <div className="font-bold font-[18px]">
                Hạng mục công việc
              </div>
              <div className="space-y-[8px] body-2">
                {
                  data && data.work_item && data.work_item.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="body-2">
                        {item.title}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="space-y-[8px]">
              <div className="font-bold font-[18px] ">
                Dịch vụ
              </div>
              <div className="space-y-[8px] body-2">
                {
                  data.services.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="body-2">
                        {item.name}
                      </div>
                    )
                  })
                }
              </div>

              <div className="font-bold font-[18px] ">
                Lĩnh vực
              </div>
              <div className="space-y-[8px] body-2">
                {
                  data.branchs.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="body-2">
                        {item.name}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-span-6">
        <img src={data.thumbnail ? data.thumbnail.path : "/images/projects/card_project.png"}
          alt={data.name} className="w-full h-full" />
      </div>
    </div>
    <section className="section_1 container" >
      <div className='text-gray-900 py-[48px]  prose'>
        <div className="" dangerouslySetInnerHTML={{ __html: data.section_1 }} />
      </div>
    </section>
    <section className="section_2 container py-[32px] md:py-[96px]" >
      <div className='text-gray-900  prose'>
        <div className="" dangerouslySetInnerHTML={{ __html: data.section_2 }} />
      </div>
    </section>
    <section className="section_3 container py-[32px] md:py-[96px]" >
      <div className='text-gray-900  prose'>
        <div className="" dangerouslySetInnerHTML={{ __html: data.section_3 }} />
      </div>
    </section>
    <section className="section_4 container py-[32px] md:py-[64px]" >
      <div className='text-gray-900  prose'>
        <div className="" dangerouslySetInnerHTML={{ __html: data.section_4 }} />
      </div>
    </section>
    <section className="section_5 container py-[32px] md:py-[64px]" >
      <div className='text-gray-900  prose'>
        <div className="" dangerouslySetInnerHTML={{ __html: data.section_5 }} />
      </div>
    </section>
    <section className="py-[32px] md:py-[72px] bg-gray-50" >
      <div className='container' >
        <div className="text-black display-3 mb-[32px]">
          Dự án liên quan
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-[32px] md:gap-[32px]">
          {related.length ? (
            related.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-span-full md:col-span-4" >
                  <CardProject item={item} />
                </div>
              )
            })
          ) : ""}

        </div>
      </div>
    </section>
  </main>
}

export default Index
