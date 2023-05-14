import React from 'react'
import Banner from '../../components/Banner'
import SectionNearFooter from '../../components/SectionNearFooter';
import Tag from '../../components/Tag'
import ViewItem from '../../components/ViewItem';
import { useRouter } from 'next/router';
import axios from '../../configAxios'
import SocialMeta from '../../components/SocialMeta';
import Loading from '../../components/Loading';
import Link from 'next/link';
import ButtonViewMoreProject from '../../components/ButtonViewMoreProject';

function Index() {

  const router = useRouter();

  const [categories, setCategories] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any>();
  const [category, setCategory] = React.useState<any>();
  const [postLatest, setPostLatest] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [postsOfCategory, setPostsOfCategory] = React.useState<any[]>([]);
  const [postsMore, setPostsMore] = React.useState<any[]>([]);
  const [postMostView, setPostMostView] = React.useState<any>();
  const [error, setError] = React.useState<any>(null);

  const [visibleItems, setVisibleItems] = React.useState(3);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };


  React.useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {

    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    await axios
      .get(`/categories/getListCategories`, { headers })
      .then((res: any) => {
        setCategories(res.data.data)
      })
      .catch((error: any) => {
        setError(error);
      });
  }

  const fetchData = async () => {
    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };
    setLoading(true);
    await axios
      .get(`/posts/getPageAll`, { headers })
      .then((res: any) => {
        if (res.data) {
          const { category, postLatest, postsOfCategory, postsMore, postMostView } = res.data.data;

          setPostsOfCategory(postsOfCategory);
          setCategory(category);
          setPostsMore(postsMore);
          setPostMostView(postMostView);
          setPostLatest(postLatest)
          setLoading(false);
        }
      })
      .catch((error: any) => {
        setError(error);
        setLoading(false);
      });
  }

  if (error) return <div> {error} </div>

  return (
    <main>
      <Banner
        title='Góc nhìn'
        description='Nơi Uptechers cùng chia sẻ về công nghệ dưới góc nhìn và kinh <br/> nghiệm của những người làm nghề.'
        textColor='text-gray-700'
        bgBanner="bg-banner-view" />

      <section className='border-b border-gray-300'>
        <div className='container flex items-center py-[24px] space-x-[1rem] flex-nowrap whitespace-nowrap overflow-x-auto overflow-y-hidden'>
          <Link
            href={{
              pathname: '/blogs',
            }}
          >
            <div className={router.pathname == '/blogs' ?
              'tag active' :
              'tag'} > Tất cả </div>
          </Link>
          {
            categories.map((item: { name: string, slug: string }, index: number) => {
              return (
                <Tag
                  key={index}
                  item={item}
                />
              )
            })
          }
        </div>
      </section>

      {postLatest && (
        <section className='py-[32px] md:py-[77px]'>
          <div className="container grid grid-cols-12 gap-[12px] xl:gap-x-[109px]">
            <div className='col-span-full md:col-span-6 xl:col-span-7'>
              <div className='space-y-[12px]'>
                <div className='text-gray-700 bg-gray-100 title-3 inline-block py-[4px] px-[12px]'>
                  {postLatest.category_name}
                </div>
                <div className='display-2 text-[#1A1919]'>
                  {postLatest.name}
                </div>
                <div className='body-1 text-gray-900'>
                  {postLatest.description}
                </div>
              </div>
              <Link
                href={{
                  pathname: '/blogs/[categories]/[slug]/[id]',
                  query: {
                    categories: postLatest.category_slug,
                    slug: postLatest.slug,
                    id: postLatest.id,
                  },
                }}
              >
                <div className='inline-flex space-x-[6px] text-blue-fdx mt-[12px] md:mt-[24px]'>
                  <div className='title-2' >Xem chi tiết</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#0647C9" />
                    <path d="M9.5 17L14.5 12L9.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className='col-span-full md:col-span-6 xl:col-span-5'>
              <img
                src={postLatest.thumbnail ? postLatest.thumbnail.path : "/images/views/view.png"}
                className='w-full h-full' />
            </div>
          </div>
        </section>
      )}

      <section className='bg-gray-100 text-gray-700 py-[32px] md:py-[72px]'>
        <div className="container">
          <div className='display-3 mb-[24px]'>
            Danh Mục {category ? category.name : ""}
          </div>
          <div className='grid grid-cols-12 gap-[12px] lg:gap-[32px]'>
            {
              postsOfCategory.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="col-span-full md:col-span-4">
                    <ViewItem item={item} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      {data && postMostView && (
        <section className='py-[32px] md:py-[77px]'>
          <div className="container grid grid-cols-12 gap-[12px] xl:gap-x-[48px]">
            <div className='col-span-full md:col-span-6 xl:col-span-7 rounded-[12px]'>
              <img
                src={postMostView.thumbnail ? postMostView.thumbnail.path : "/images/views/view.png"} className='w-full h-full' />
            </div>
            <div className='col-span-full md:col-span-6 xl:col-span-5 flex items-center'>
              <div>
                <div className='border-b border-gray-300 pb-[12px] body-1 mb-[12px] md:mb-[24px] text-gray-900'>
                  Bài đọc nhiều nhất
                </div>
                <div className='space-y-[12px]'>
                  <div className='text-gray-700 bg-gray-100 title-3 inline-block py-[4px] px-[12px]'>
                    {postMostView.category_name}
                  </div>
                  <div className='display-2 text-[#1A1919]'>
                    {postMostView.name}
                  </div>
                  <div className='body-1 text-gray-900'>
                    {postMostView.description}
                  </div>
                </div>
                <Link
                  href={{
                    pathname: '/blogs/[categories]/[slug]/[id]',
                    query: {
                      categories: postMostView.category_slug,
                      slug: postMostView.slug,
                      id: postMostView.id,
                    },
                  }}
                >
                  <div className='inline-flex space-x-[6px] text-blue-fdx mt-[12px] md:mt-[24px]'>
                    <div className='title-2' >Xem chi tiết</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#0647C9" />
                      <path d="M9.5 17L14.5 12L9.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {postsMore.length && (
        <section className='bg-white text-gray-700 py-[32px] md:py-[72px]'>
          <div className="container">
            <div className='display-3 mb-[24px]'>
              Tìm hiểu thêm
            </div>
            <div className='grid grid-cols-12 gap-[12px] lg:gap-[32px]'>
              {postsMore.slice(0, visibleItems).map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="col-span-full md:col-span-4">
                    <ViewItem item={item} />
                  </div>
                )
              })}
            </div>
          </div>
          {visibleItems < postsMore.length && (
            <div className='text-center flex items-center justify-center mt-[32px] md:mt-[40px]'
              onClick={handleShowMore}
            >
              <ButtonViewMoreProject />
            </div>
          )}
        </section>
      )}

      <SectionNearFooter />
      <SocialMeta title="Góc nhìn"
        description='Nơi Uptechers cùng chia sẻ về công nghệ dưới góc nhìn và kinh nghiệm của những người làm nghề.'
      />
    </main>

  )
}

export default Index
