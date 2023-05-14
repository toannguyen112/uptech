import Link from 'next/link'
import React, { useState } from 'react'
import axios from '../configAxios'
import EventBus from '../event-bus'
import TheadFilter from './Fields/Thead/TheadFilter'
import Option from './Option'
import Search from './Admin/Search'
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
import Router, { useRouter } from "next/router";
import { useUpdateEffect } from 'usehooks-ts'

import { Image as ImagePreview } from 'primereact/image';
import Loading from './Loading'
import PaginationV2 from './PaginationV2'
import TheadSort from './Fields/Thead/TheadSort'

interface PropsInterface {
  columns: any[]
  dataSource?: any
  model?: any,
  loading?: boolean,
  isShowCreateBtn?: boolean,
}
interface IFilter {
  name: string,
  value: string,
  field: string
}

export default function Table({ loading, columns, dataSource, model, isShowCreateBtn = true }: PropsInterface) {

  const router = useRouter();

  const { query, isReady }: any = router;
  const { page, page_size, search } = query;

  const setDefaultValue = () => {
    const initArray: IFilter[] = [];
    for (const [key, value] of Object.entries(router.query) as any) {
      const spliceValue = value?.split(',');
      spliceValue.forEach((element: any) => {
        columns.find((item: any) => {
          if (item && item.filters) {
            const colFound = item.filters.find((x: any) => x.value === element);
            if (colFound) {
              const obj = {
                name: colFound.name,
                value: colFound.value,
                field: key
              }
              initArray.push(obj);
            }
          }
        });
      });
    }
    return initArray;
  }

  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [arrFilters, setArrFilters] = useState<IFilter[]>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  React.useEffect(() => {
    if (isReady) {
      setArrFilters(setDefaultValue());
      setCurrentPage(page ? Number(page) : 1);
      setPageSize(page_size ? Number(page_size) : 10);
    }
  }, [isReady]);

  React.useEffect(() => {
    if (dataSource && dataSource.data) {
      setCurrentPage(1);
    }
  }, [search, arrFilters, pageSize]);

  useUpdateEffect(() => {
    const groupByField = arrFilters.reduce((group: any, item: any) => {
      const { field, value } = item;
      const array: any[] = group[field] ? group[field].split(',') : [];
      group[field] = group[field] ?? "";
      array.push(value);
      group[field] = array.join();
      return group;
    }, {});

    if (Object.values(router.query)) {
      Router.push({
        pathname: router.pathname,
        query: {
          ...groupByField,
          page: currentPage,
          page_size: pageSize,
        }
      });
    }

  }, [isReady, arrFilters, currentPage, pageSize]);

  const handleRemoveItem = async (item: any) => {
    confirm("Bạn có chắc muốn xóa");
    await axios
      .delete(`${model.route}/delete/${item.id}`)
      .then((result: any) => {
        EventBus.$dispatch('refreshListData', '');
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const renderStatus = (field: any, col: any) => {

    switch (field[col]) {
      case 'active':
        return (
          <span
            className="text-[#00b69b] p-[6px] rounded-[4px] bg-[#EAF7F5]">
            Hoạt động
          </span>
        )

      case 'inactive':
        return (
          <span
            className="text-[#f576ad] p-[6px] rounded-[4px] bg-[#feebf3]">
            Ẩn
          </span>
        )
      default:
        return (
          <span>
            {field[col]}
          </span>
        )
    }
  }

  const checkHandler = (x: any) => {
    const newArr: any = arrFilters.some((item: any) => item.name === x.name)
      ? arrFilters.filter((cur: any) => cur.name !== x.name)
      : [...arrFilters, x];

    setArrFilters(newArr);
  };

  const onOptionsChange = (x: any) => {
    const newArr: any = selectedOptions.some((item: any) => item.id === x.id)
      ? selectedOptions.filter((cur: any) => cur.id !== x.id)
      : [...selectedOptions, x];

    setSelectedOptions(newArr);
  };

  const onSelectAll = (e: any) => {
    if (e.checked) {
      setCheckedAll(true);
      setSelectedOptions(dataSource.data);
    } else {
      setCheckedAll(false);
      setSelectedOptions([])
    }
  }

  const removeAllSelected = async () => {
    confirm("Bạn có chắc muốn xóa");
    const ids: string[] = selectedOptions.map((item) => item.id);
    await axios.post(`${model.route}/deleteMultipleIds`, { ids })
      .then((res) => {
        if (res) {
          setCheckedAll(false);
          EventBus.$dispatch("refreshListData", "");
        }
      });
  }

  const isShowCreateButton =  () => {
    if (isShowCreateBtn) {
      return (
        <Link href={`/admin/${model && model.route ? model.route : ''}/form`}>
          <Button
            size='small'
            label="Tạo Mới"
            icon="pi pi-plus" />
        </Link>
      )
    }
  }

  return (
    <React.Fragment>
      <div className="flex items-center justify-between mb-4">
        <div className='flex items-center space-x-[12px]'>
          {isShowCreateButton()}
          <div className="title-1 font-bold">
            {model && model.title}
          </div>
        </div>
        <Search />
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        {
          selectedOptions.length > 0 && (
            <div className='py-[4px] px-[8px] flex items-center space-x-[12px] bg-prime text-white text-[12px]'>
              <div className=''> {selectedOptions.length} mục được chọn</div>
              <div
                onClick={() => removeAllSelected()}
                className='font-semibold cursor-pointer'>Xóa tất cả</div>
            </div>
          )
        }
        <table className="table">
          <thead>
            <tr>
              <th>
                <div className='relative flex items-center space-x-[8px]'>
                  <Checkbox
                    checked={checkedAll}
                    onChange={(e) => onSelectAll(e)} />
                </div>
              </th>
              {columns.map((col, index) => {
                return (
                  <th id={col.field} key={index}>
                    <div className="relative">
                      <span className="space-x-[4px] inline-flex items-center">
                        <span>{col.label}</span>
                        {/* <TheadSort
                          col={col}
                        /> */}
                      </span>
                      <TheadFilter
                        arrFilters={arrFilters}
                        onCheckHandler={(value: any) => checkHandler(value)}
                        col={col} />
                    </div>
                  </th>
                );
              })}
              <th className="py-0">
                <div className="text-center">...</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              !dataSource ? (
                <tr>
                  <td colSpan={100} ><Loading /></td>
                </tr>
              )
                :
                dataSource &&
                dataSource.data.map((datum: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Option
                          isLabel={false}
                          option={datum}
                          selectedOptions={selectedOptions}
                          onOptionChange={onOptionsChange}
                        />
                      </td>
                      {columns.map((col: any, index: number) => {
                        return (
                          <td key={index}>
                            {col.field === 'thumbnail' ? (
                              <div className="aspect-w-2 aspect-h-1  min-h-[60px] flex items-center">
                                <ImagePreview
                                  zoomSrc={datum[col.field] ? datum[col.field].path : ""}
                                  src={datum[col.field] ? datum[col.field].path : ''}
                                  alt="Image"
                                  width="100px"
                                  height="100px"
                                  preview />
                              </div>
                            ) : (
                              renderStatus(datum, [col.field])
                            )}
                          </td>
                        )
                      })}
                      <td >
                        <div className="flex items-center justify-center space-x-[12px]">
                          <div className="cursor-pointer">
                            <Link href={{
                              pathname: `/admin/${model && model.route ?
                                model.route : ''}/form`,
                              query: { id: datum['id'] }
                            }}>
                              <div>
                                <i className="pi pi-file-edit"></i>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleRemoveItem(datum)}
                          >
                            <i className="pi pi-trash"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>

        </table>
      </div>
      <div className="py-[8px] w-full bg-white mt-[10px]">
        <div className="flex  w-full">
          {
            dataSource && <PaginationV2
              className="pagination-bar"
              currentPage={currentPage ?? 1}
              totalCount={dataSource.totalItems}
              pageSize={pageSize ?? 10}
              onPageChange={(page: any) => setCurrentPage(page)}
              onPageSizeChange={(pageSize: any) => setPageSize(pageSize)}
            />
          }
        </div>
      </div>
    </React.Fragment>
  )
}
