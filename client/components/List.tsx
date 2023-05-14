import React, { Fragment } from 'react'
import { Button } from 'primereact/button';
import { FieldInterface } from '../Interface';
import { useUpdateEffect } from 'usehooks-ts';

function List({ field, modelValue, updateModelValue }: FieldInterface) {

    const filterDataEmpty = () => {
        return modelValue.filter((item) => item.title)
    }
    const [data, setData] = React.useState<any[]>(modelValue ? filterDataEmpty() : []);

    useUpdateEffect(() => {
        updateModelValue(data);
    }, [data]);

    return (
        <div>
            <div className="space-y-[12px]">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between space-x-[12px]">
                            <input
                                defaultValue={item.title}
                                onChange={(e) => {
                                    data[index]['title'] = e.target.value;
                                    setData(data);

                                }}
                                type="text" className="w-full input" />
                            <Button
                                onClick={() => {
                                    setData(data.filter((x) => x.title !== item.title))
                                }}
                                size='small'
                                label="Xóa"
                                severity="danger"
                                icon="pi pi-trash" />
                        </div>
                    )
                })}

                <Button
                    onClick={() => {
                        setData([...data, {
                            title: "",
                        }])
                    }}
                    className="mt-[12px]"
                    size='small'
                    label="Thêm mới"
                    icon="pi pi-plus" />

            </div>
        </div>
    )
}

export default List