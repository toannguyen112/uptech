import React, { useEffect, useState } from 'react'
import IconSocials from '../../../../components/IconSocials'
import ButtonJob from '../../../../components/ButtonJob'
import { useRouter } from 'next/router';
import axios from '../../../../configAxios';
import Loading from '../../../../components/Loading';
import Link from 'next/link';
import { toast } from 'react-toastify';

function Index() {

  const [data, setData] = useState<any>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "recruitment",
    email: "",
    note: "",
  });

  const router = useRouter();
  const { id } = router.query

  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  useEffect(() => {

    if (!id) return;
    fetchData();

  }, [id]);

  useEffect(() => {

    if (isShowModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

  }, [isShowModal]);

  const fetchData = async () => {
    await axios
      .get(`/jobs/find/${id}`, { headers })
      .then((res: any) => {
        setData(res.data.data);
      })
      .catch((error: any) => {
        console.log(error);
        setError(error);
      });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('contacts/create',
      { ...form }).then((res) => {
        toast.success('Gửi thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        setForm({
          name: "",
          phone: "",
          type: "contact",
          email: "",
          note: "",
        })
      }).catch((error) => {
        toast.error('Gửi Thất bại', {
          position: toast.POSITION.TOP_CENTER
        });
      });
  }

  if (!data) return <Loading />

  return <main>
    {error}
    {
      isShowModal &&
      <div className="modal" >
        <div className="fixed inset-x-0 inset-y-0 bg-black opacity-70 w-screen h-screen z-[100]" onClick={() => setIsShowModal(!isShowModal)} ></div>
        <div className='fixed top-1/2 left-1/2 bg-white z-[110] max-md:w-full md:min-w-[800px] transform -translate-x-1/2 -translate-y-1/2 rounded-[8px] overflow-hidden'>
          <div className='relative'>
            <div className='absolute top-[1rem] right-[1rem] cursor-pointer' onClick={() => setIsShowModal(!isShowModal)} >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L8 24M8 8L24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='grid grid-cols-8  bg-job-modal bg-no-repeat h-full w-full bg-cover' >
              <div className="col-start-2 col-span-6 pt-[54px] pb-[24px] text-white h2">
                Nộp đơn ứng tuyển
              </div>
            </div>
          </div>
          <div className='py-[32px] grid grid-cols-8 md:gap-[32px] md:max-h-[500px] overflow-y-scroll'>
            <form
              onSubmit={(e) => onSubmit(e)}
              className="col-start-2 col-span-6 space-y-[24px]">
              <div className='space-y-[6px]'>
                <div className='text-gray-700 font-semibold' >Họ và tên*</div>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required type="text" placeholder='Nhập họ và tên' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
              </div>
              <div className="flex items-center space-x-[1rem]">
                <div className='flex-1 space-y-[6px]'>
                  <div className='text-gray-700 font-semibold' >Số điện thoại*</div>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required type="number" placeholder='Nhập số điện thoại' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                </div>
                <div className='flex-1 space-y-[6px]'>
                  <div className='text-gray-700 font-semibold' >Email*</div>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required type="email" placeholder='Nhập email' className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
                </div>
              </div>
              <div className='flex-1 space-y-[6px]'>
                <div className='text-gray-700 font-semibold' >Tải CV lên</div>
                <div className='shadow-input flex items-center space-x-[8px] py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33341 13.5352C2.32843 12.8625 1.66675 11.7168 1.66675 10.4167C1.66675 8.46369 3.15967 6.85941 5.06653 6.68281C5.45659 4.31011 7.51695 2.5 10.0001 2.5C12.4832 2.5 14.5436 4.31011 14.9336 6.68281C16.8405 6.85941 18.3334 8.46369 18.3334 10.4167C18.3334 11.7168 17.6717 12.8625 16.6667 13.5352M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>Bấm vào đây để tải lên Hồ sơ/CV từ máy tính của bạn.</div>
                </div>
                <div className="body-3 text-[#667085] mt-[8px]" >File tải lên có định dạng .doc, .docx, .pdf, và dung lượng tối đa 5MB</div>
              </div>
              <div className='space-y-[6px]'>
                <div className='text-gray-700 font-semibold' >Đôi lời về bản thân</div>
                <textarea
                  rows={5}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder='Nhập lời giới thiệu về bản thân'
                  className='shadow-input py-[8px] px-[12px] rounded-[8px] border border-gray-300 text-gray-500 placeholder-gray-500 outline-none w-full' />
              </div>
              <button className='bg-blue-light text-white py-[12px] px-[20px] inline-flex items-center justify-center space-x-[12px] rounded-[8px] cursor-pointer hover:bg-primary text-center min-w-[240px] font-medium'>
                <div>Gửi</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    }
    <section className='pt-[88px] pb-[115px]  bg-gradient' >
      <div className='space-y-[8px] text-white container' >
        <div className=" body-1" >Vị trí</div>
        <div className="display-1" > {data.name} </div>
      </div>

    </section>
    <section>
      <div className="container pt-[32px] pb-[64px]">
        <div className="flex items-start pb-[1rem] border-b border-gray-200 justify-between">
          <div className='flex items-center space-x-[1rem]' >
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6666 22.4157C32.5529 23.5731 36.6666 26.2162 36.6666 29.2917C36.6666 33.4338 29.2047 36.7917 19.9999 36.7917C10.7952 36.7917 3.33325 33.4338 3.33325 29.2917C3.33325 26.2162 7.4469 23.5731 13.3333 22.4157M19.9999 28.4583V5.125L28.8628 10.5791C29.5093 10.9769 29.8325 11.1758 29.9356 11.4264C30.0256 11.645 30.0184 11.8915 29.916 12.1045C29.7986 12.3488 29.4645 12.5287 28.7961 12.8886L19.9999 17.625" stroke="#1849A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className='body-1 text-[#344054]' >
                Vị trí
              </div>
              <div className="title-3 text-[#101828]" >
                {data.location}
              </div>
            </div>
          </div>
          <IconSocials />
        </div>
        <div className='grid grid-cols-12 md:gap-[32px]'>
          <div className='col-span-full md:col-span-8 body-1 text-gray-900' >
            <div className='space-y-[24px] py-[32px] border-b border-gray-600' >
              <div>
                {data.description}
              </div>
              <div onClick={() => setIsShowModal(!isShowModal)} ><ButtonJob /></div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-12' >
          <div className='col-span-full md:col-span-8 body-1 text-gray-900' >

            <div>
              <div className='h2 text-gray-900 py-[24px]' >
                Yêu cầu
              </div>
              <div className='prose'  >
                <div dangerouslySetInnerHTML={{ __html: data.required }} />
              </div>
            </div>
            <div className="bg-gray-50 p-[32px] space-y-[12px] mt-[40px]">
              <div className='h2 text-black'>
                Quyền lợi
              </div>
              <div className='text-[#52525B]' >
                <div className=' prose'  >
                  <div dangerouslySetInnerHTML={{ __html: data.benefit }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-3 md:col-start-10 border-t  border-gray-600">
            <div className='h1 text-black pt-[24px]'>
              Công việc khác
            </div>
            <div>
              {
                data.related.map((item: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={{
                        pathname: '/recruitments/[slug]/[id]',
                        query: {
                          slug: item.slug,
                          id: item.id,
                        },
                      }}
                    >
                      <div

                        className='flex items-start space-x-[12px] py-[24px] border-b border-gray-200 cursor-pointer' >
                        <div className='body-2 text-gray-700' >{index + 1}.</div>
                        <div className='space-y-[8px]' >
                          <div className="title-3 text-gray-700" > {item.name} </div>
                          <div className='body-3 text-gray-500'  > {item.location} </div>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </main >

}

export default Index
