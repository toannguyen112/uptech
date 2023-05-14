import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import axios from '../configAxios'

function Header() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isShowLang, setIsShowLang] = useState<boolean>(false);
  const [isShowServiceMobile, setIsShowServiceMobile] = useState<boolean>(false);

  const { locale, asPath } = useRouter();
  const [menu, setMenu] = React.useState<any>([]);
  const headers: any = { 'Accept-Language': locale };

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/services/nav`, { headers })
      .then((res: any) => {
        setMenu(res.data.data)
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  const renderNameLocale = () => {
    switch (locale) {
      case 'vi':
        return 'vie'
      case 'en':
        return 'en'
      case 'ja':
        return 'ja'
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <header className=' sticky top-0 z-[90] bg-white border-b border-gray-200'>
        <section className="container flex items-center justify-between py-[2rem] md:py-[1rem]">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="navigation">
              <Link href="/about">
                <a className="navigation-item">
                  <div>Giới thiệu</div>
                </a>
              </Link>
              <div >
                <div className="relative group transition-all">
                  <div className="navigation-item">
                    <span>Dịch vụ</span>
                    <div className='flex items-center'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute group-hover:visible invisible top-[180%] transition-all 
                    after:content-['']
                    after:absolute
                    after:h-[30px]
                    after:w-full
                    after:inset-x-0 
                    after:-top-[20px] 
                    after:bg-white
                    group-hover:opacity-100 opacity-0  min-w-[1032px] bg-white min-h-[340px] shadow-input left-1/3 transform -translate-x-1/3 py-[2rem] px-[64px]">
                    <div className="grid grid-cols-3 gap-[2rem]">
                      {
                        menu && menu.length ? menu.map((item: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className="col-span-1">
                              <div className="">
                                <div className="title-3 text-gray-500 pb-[10px] border-b border-gray-200">
                                  {item.label}
                                </div>
                                <div className="space-y-[8px] mt-[10px]">
                                  {
                                    item?.children.map((item: any, index: number) => {
                                      return (
                                        <Link
                                          key={index}
                                          href={{
                                            pathname: '/services/[slug]/[id]',
                                            query: {
                                              slug: item.slug,
                                              id: item.key,
                                            },
                                          }}
                                        >
                                          <a
                                            className='body-2 text-gray-900 hover:text-primary transition-all cursor-pointer block'>
                                            {item.label}
                                          </a>
                                        </Link>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                          )
                        }) : ""
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/projects">
                <a className="navigation-item">
                  <div>Dự án</div>
                </a>
              </Link>
              <Link href="/blogs">
                <a className="navigation-item">
                  <div>Góc nhìn</div>
                </a>
              </Link>
              <Link href="/recruitments">
                <a className="navigation-item">
                  Cơ hội nghề nghiệp
                </a>
              </Link>
            </div>
          </div>
          <div className="items-center xl:flex hidden space-x-[12px] ">
            <div
              onClick={() => {
                setIsShowLang(!isShowLang)
              }}
              className='cursor-pointer  relative uppercase border border-gray-300 text-gray-700 font-medium flex items-center space-x-[8px] py-[10px] px-[12px] rounded-[10px]'>
              <div> {renderNameLocale()} </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {
                isShowLang ? (
                  <div className="absolute top-[100%] left-0 rounded-[8px] font-medium min-w-[100px] uppercase bg-white text-gray-700 shadow-lang">
                    <div className="py-[10px] px-[12px] hover:text-[#0647C9] cursor-pointer "  >
                      <a href={`${asPath}`}>Vietnamese</a>
                    </div>
                    <div className="py-[10px] px-[12px] hover:text-[#0647C9] cursor-pointer" >
                      <a href={`/en/${asPath}`}>English</a>
                    </div>
                    <div className="py-[10px] px-[12px] hover:text-[#0647C9] cursor-pointer" >
                      <a href={`/ja/${asPath}`}>Japan</a>
                    </div>
                  </div>
                ) : ""
              }
            </div>
            <Link href="/contact">
              <a className='bg-primary text-white py-[10px] px-[2rem] inline-flex items-center justify-center space-x-[12px] rounded-[8px] cursor-pointer hover:bg-secondary font-semibold'>
                <div>Liên hệ</div>
              </a>
            </Link>
          </div>
          <div
            onClick={() => setIsShowMenu(!isShowMenu)}
            className="block xl:hidden cursor-pointer menu">
            <Image src="/svg/menu.svg" width={30} height={30} />
          </div>
        </section>
      </header >
      <div className='max-xl:block xl:hidden'>
        {isShowMenu && <div
          onClick={() => setIsShowMenu(!isShowMenu)}
          className='bg-black opacity-70 fixed inset-x-0 inset-y-0 w-full h-full z-[90]'></div>}
        <div
          className={isShowMenu ? "right-0 bg-white fixed inset-y-0 w-[70vw]  h-full z-[90] transition-all"
            : "-right-full transition-all bg-white fixed  inset-y-0 w-[70vw]  h-full z-[90]"}>
          <div className='flex flex-col space-y-[12px] text-gray-900'>
            <div className='p-[1rem]'>
              <Link href="/">
                <div className="flex items-center">
                  <Logo />
                </div>
              </Link>
            </div>
            <Link href="/about">
              <a className="p-[1rem] flex items-center space-x-[12px]">
                <div>Giới thiệu</div>
              </a>
            </Link>
            <div className="p-[1rem] ">
              <div
                onClick={() => setIsShowServiceMobile(!isShowServiceMobile)}
                className='flex items-center space-x-[12px]'>
                <div>Dịch vụ</div>
                <div className='flex items-center'>
                  <Image src="/svg/arrow.svg" width={10} height={5} />
                </div>
              </div >
              <div>
                {
                  isShowServiceMobile && menu && menu.length ? menu.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="pl-[10px] py-[10px]">
                        <div className="">
                          <div className="title-3 text-gray-500 pb-[10px]">
                            {item.label}
                          </div>
                          <div className="space-y-[8px] pl-[20px]">
                            {
                              item?.children.map((item: any, index: number) => {
                                return (
                                  <Link
                                    key={index}
                                    href={{
                                      pathname: '/services/[slug]/[id]',
                                      query: {
                                        slug: item.slug,
                                        id: item.key,
                                      },
                                    }}
                                  >
                                    <div
                                      className='body-2 text-gray-900 hover:text-primary transition-all cursor-pointer block'>
                                      {item.label}
                                    </div>
                                  </Link>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    )
                  }) : ""
                }
              </div>
            </div>
            <Link href="/projects">
              <a className="p-[1rem]">
                <div>Dự án</div>
              </a>
            </Link>
            <Link href="/blogs">
              <a className="p-[1rem]">
                <div>Góc nhìn</div>
              </a>
            </Link>
            <Link href="/recruitments">
              <a className="p-[1rem]">
                Cơ hội nghề nghiệp
              </a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Header
