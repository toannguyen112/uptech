import Image from 'next/image';
import React, { useState } from 'react'
import Banner from '../../components/Banner'
import CardProject from '../../components/CardProject';
import axios from '../../configAxios'
import { useRouter } from 'next/router';
import ButtonViewMoreProject from '../../components/ButtonViewMoreProject';
import SocialMeta from '../../components/SocialMeta';

function Index() {

  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

  const { push, query, locale } = useRouter();

  const [projects, setProjects] = React.useState<any>([]);
  const [activeBranch, setActiveBranch] = React.useState<any>("Tất cả lĩnh vực");
  const [services, setServices] = React.useState<any>([]);
  const [branchs, setBranchs] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  const headers: any = { 'Accept-Language': locale };

  React.useEffect(() => {
    fetchBranchs();
    fetchServices();
  }, []);

  React.useEffect(() => {
    fetchData();
    setIsShowDropdown(false);
  }, [query]);

  const fetchData = async () => {

    const config = {
      headers,
      params: {
        ...query
      },
    }
    await axios
      .get(`/projects/getProjectsClient`, config)
      .then((res: any) => {
        setProjects(res.data.data)
      })
      .catch((error: any) => {
        setError(error);
      });
  }

  const fetchBranchs = async () => {
    await axios
      .get(`/branchs/getListBranch`, { headers })
      .then((res: any) => {
        setBranchs(res.data.data)
      })
      .catch((error: any) => {
        setError(error);
      });
  }

  const fetchServices = async () => {
    setLoading(true);
    await axios
      .get(`/services/getListService`, { headers })
      .then((res: any) => {
        setServices(res.data.data);
        setLoading(false);
      })
      .catch((error: any) => {
        setError(error);
      });
  }

  const removeQueryParam = (param) => {
    const updatedQuery = query;
    delete updatedQuery[param];

    push({ query: updatedQuery }, undefined, { shallow: true });
  }

  if (error) return <div> {error} </div>;

  return (
    <main>
      <Banner
        title='Dự án'
        description="Những sản phẩm chứng minh <br/> năng lực công nghệ của Uptech."
      />
      <section>
        <div className="container">
          <div className='flex items-center py-[24px] space-x-[10px] flex-nowrap whitespace-nowrap overflow-x-auto overflow-y-hidden'>
            <div
              onClick={() => {
                removeQueryParam('service_id')
              }}
              className={!query.service_id ?
                'tag active' :
                'tag'}>
              Tất cả
            </div>
            {
              services.map((item: any, index: number) => {
                return (
                  <div
                    onClick={() => push({ query: { ...query, service_id: item.id } })}
                    key={index}
                  >
                    <div className={query.service_id == item.id ?
                      'tag active' :
                      'tag'} > {item.name}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-[2rem] pb-[80px]">
          <div className='flex items-center justify-between pb-[23px] md:flex-row max-md:flex-col'>
            <div
              className='display-1 text-[#1A1919]'>Tất cả dịch vụ</div>
            <div className='relative'>
              <div className='space-x-[8px] flex items-center'>
                <div className='text-[#18181B] font-semibold'>
                  Lọc theo
                </div>
                <div
                  onClick={() => setIsShowDropdown(!isShowDropdown)}
                  className='flex items-center py-[6px] px-[1rem] border border-[#E3E6E8] rounded-[8px] space-x-[8px] cursor-pointer'>
                  <div className='font-semibold text-[#155EEF]'>{activeBranch}</div>
                  <div>
                    <Image src="/svg/arrow.svg"
                      alt="arrow"
                      width={10}
                      height={5} />
                  </div>
                </div>
              </div>
              {
                isShowDropdown && (
                  <div className="absolute body-2 top-full inset-x-0 bg-[#FCFCFD] rounded-[6px] shadow-dropdown z-1  min-h-full">
                    <div>
                      <div

                        className={!query.branch_id ?
                          "py-[6px] px-[1rem]  flex items-center justify-between text-[#155EEF] cursor-pointer"
                          : "py-[6px] px-[1rem]  flex items-center justify-between text-gray-600 cursor-pointer"}>
                        <div onClick={() => {
                          removeQueryParam('branch_id')
                          setActiveBranch("Tất cả lĩnh vực")
                        }
                        }>
                          Tất cả lĩnh vực
                        </div>
                        <div className='flex items-center'>
                          {!query.branch_id ? (
                            <Image src="/svg/tick.svg"
                              alt="tick"
                              width={24}
                              height={24} />

                          ) : ""}
                        </div>
                      </div>
                      {
                        branchs.map((item: any, index: number) => {
                          return (
                            <div
                              onClick={() => {
                                push({ query: { ...query, branch_id: item.id } });
                                setActiveBranch(item.name)
                              }}
                              key={index}
                              className={query.branch_id == item.id
                                ? "py-[6px] px-[1rem]  flex items-center justify-between text-[#155EEF] cursor-pointer"
                                : "py-[6px] px-[1rem]  flex items-center justify-between text-gray-600 cursor-pointer"}>
                              <div>
                                {item.name}
                              </div>
                              <div className='flex items-center'>
                                {
                                  query.branch_id == item.id ? (
                                    <Image src="/svg/tick.svg"
                                      alt="tick"
                                      width={24}
                                      height={24} />
                                  ) : ""
                                }
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {projects && projects.data && projects.data.length ? (
            <React.Fragment>
              <div className='py-[56px] border-t border-gray-200'>
                <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[56px]'>
                  {projects.data.slice(0, visibleItems).map((project: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="col-span-full md:col-span-1">
                        <CardProject item={project} />
                      </div>
                    )
                  })}
                </div>
              </div>
              {visibleItems < projects.data.length && (
                <div
                  onClick={handleShowMore}
                >
                  <ButtonViewMoreProject
                  />
                </div>
              )}
            </React.Fragment>
          ) : ""}
        </div>
      </section>
      <SocialMeta
        title="Dự án"
        description='Những sản phẩm chứng minh năng lực công nghệ của Uptech.' />
    </main>

  )
}

export default Index
