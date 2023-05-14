import React from 'react'
import Banner from '../../../components/Banner'
import SectionNearFooter from '../../../components/SectionNearFooter';
import Tag from '../../../components/Tag'
import ViewItem from '../../../components/ViewItem';
import { useRouter } from 'next/router';
import axios from '../../../configAxios'
import BlogMostView from '../../../components/BlogMostView';
import Loading from '../../../components/Loading';
import ButtonViewMoreProject from '../../../components/ButtonViewMoreProject';

function Categories() {

    const router = useRouter();
    const { id, categories, slug } = router.query;

    const [loading, setLoading] = React.useState<boolean>(false);
    const [listCategory, setListCategory] = React.useState<any[]>([])
    const [data, setData] = React.useState<any>({});

    const [visibleItems, setVisibleItems] = React.useState(3);

    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };

    React.useEffect(() => {
        fetchCategories();
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [categories]);

    const fetchCategories = async () => {

        const locale = router.locale;
        const headers: any = { 'Accept-Language': locale };

        await axios
            .get(`/categories/getListCategories`, { headers })
            .then((res: any) => {
                setListCategory(res.data.data)
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    const fetchData = async () => {

        setLoading(true);
        const locale = router.locale;
        const headers: any = { 'Accept-Language': locale };

        await axios
            .get(`/posts/category/${categories}`, { headers })
            .then((res: any) => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch((error: any) => {
                console.log(error);
                setLoading(true);
            });
    }

    if (loading && !data) return <Loading />;

    return (
        <main>
            <Banner
                title='Góc nhìn'
                description='Nơi Uptechers cùng chia sẻ về công nghệ dưới góc nhìn và kinh <br/> nghiệm của những người làm nghề.'
                textColor='text-gray-700'
                bgBanner="bg-banner-view" />
            <section className='border-b border-gray-300'>
                <div className='container flex items-center py-[24px] space-x-[1rem] flex-nowrap whitespace-nowrap overflow-x-auto overflow-y-hidden'>
                    <Tag
                        item={{ name: "Tất cả", slug: '' }}
                    />
                    {
                        listCategory.map((item: { name: string, slug: string }, index: number) => {
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
            {
                data.postMostView && (
                    <section className='py-[32px] md:py-[77px]'>
                        <div className="container grid grid-cols-12 gap-[12px] xl:gap-x-[48px]">
                            <div className='col-span-full md:col-span-6 xl:col-span-7 rounded-[12px]'>
                                <img src={data.postMostView && data.postMostView.thumbnail
                                    ? data.postMostView.thumbnail.path
                                    : "/images/views/view.png"} className='w-full h-full' />
                            </div>
                            <div className='col-span-full md:col-span-6 xl:col-span-5 flex items-center'>
                                <BlogMostView item={data.postMostView} />
                            </div>
                        </div>
                    </section>
                )
            }

            {
                data && data.listPost && data.listPost.length ? (
                    <section className='bg-white text-gray-700 py-[32px] md:py-[72px]'>
                        <div className="container">
                            <div className='display-3 mb-[24px]'>
                                Tìm hiểu thêm
                            </div>
                            <div className='grid grid-cols-12 gap-[12px] lg:gap-[32px]'>
                                {
                                    data.listPost.slice(0, visibleItems).map((post: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="col-span-full md:col-span-4">
                                                <ViewItem item={post} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {visibleItems < data.listPost.length && (
                            <div className='text-center flex items-center justify-center mt-[32px] md:mt-[40px]'
                                onClick={handleShowMore}
                            >
                                <ButtonViewMoreProject />
                            </div>
                        )}
                    </section>
                ) : ""
            }

            <SectionNearFooter />
        </main>

    )
}

export default Categories
