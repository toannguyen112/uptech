import React from 'react'
import axios from '../../../../configAxios';
import { useRouter } from 'next/router'
import Loading from '../../../../components/Loading';
import Layout_1 from '../../../../components/Sections/Layout/Layout_1';
import Layout_2 from '../../../../components/Sections/Layout/Layout_2';
import Layout_3 from '../../../../components/Sections/Layout/Layout_3';
import Hero from '../../../../components/Sections/Services/Hero';

function Index() {

    const [data, setData] = React.useState<any>();
    const [error, setError] = React.useState<any>();

    const router = useRouter();
    const { id, slug } = router.query;
    const locale = router.locale;
    const headers: any = { 'Accept-Language': locale };

    React.useEffect(() => {
        if (!id) return;
        fetchData();
    }, [id]);

    const fetchData = async () => {

        await axios
            .get(`/services/show/${id}`, { headers })
            .then((res: any) => {
                setData(res.data.data);
            })
            .catch((error: any) => {
                setError(error)
            });
    }

    const renderBgImage = () => {
        if (data.layout_number === 1) {
            return "bg-banner-service";
        }
        if (data.layout_number === 2) {
            return "bg-banner_layout_2";
        }
        if (data.layout_number === 3) {
            return "bg-banner_layout_3";
        }
    }

    if (!data) return <Loading />
    if (error) return <div> {error} </div>

    console.log(data);

    return (
        <div>
            <Hero
                title={data.name}
                description={data.description}
                bgImage={renderBgImage()}
            />
            {data.layout_number === 1 && <Layout_1 data={data} />}
            {data.layout_number === 2 && <Layout_2 data={data} />}
            {data.layout_number === 3 && <Layout_3 data={data} />}

        </div>
    )
}

export default Index