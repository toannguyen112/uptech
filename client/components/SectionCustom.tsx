import React from 'react'
import { FieldInterface } from '../Interface'
import { Button } from 'primereact/button';
import { useUpdateEffect } from 'usehooks-ts';
import { Accordion, AccordionTab } from 'primereact/accordion';
import MediaManager from './MediaManager';

function SectionCustom({ field, modelValue, updateModelValue }: FieldInterface) {

    const initValue = () => {
        return modelValue ? modelValue : {
            header: "",
            text_small: "",
            sub_text: "",
        }
    }

    const [data, setData] = React.useState<any>({});
    const [indexImage, setIndexImage] = React.useState<number>(0);
    const [isShowMedia, setIsShowMedia] = React.useState<boolean>(false);

    React.useEffect(() => {
        setData(initValue);
    }, [modelValue]);

    useUpdateEffect(() => {
        updateModelValue(data);
    }, [data]);


    return (
        <div>
            {
                isShowMedia && (
                    <div className="absolute p-[20px] inset-x-0 inset-y-0 bg-white z-[99] h-full w-full">
                        <MediaManager
                            fileSelect={data.file}
                            multiple={field.multiple}
                            onClose={(arg: boolean) => setIsShowMedia(arg)}
                            onSelectFile={(file: any) => {
                                data['sections'][indexImage]['file'] = file.path;
                                setData(data);
                            }}
                        />
                    </div>
                )
            }
            <Accordion activeIndex={0}>
                <AccordionTab header="Nội dung">
                    <div className="mt-[12px]">
                        <div>
                            <label>
                                Text nhỏ
                            </label>
                            <input
                                defaultValue={data.text_small}
                                onChange={(e) => {
                                    setData({ ...data, text_small: e.target.value });
                                }}
                                type="text" className="input" />
                        </div>
                        <div className="mt-[12px]">
                            <label>
                                Header
                            </label>
                            <input
                                defaultValue={data.header}
                                onChange={(e) => {
                                    setData({ ...data, header: e.target.value });
                                }}
                                type="text" className="input" />
                        </div>
                        <div className="mt-[12px]">
                            <label>
                                Sub Text
                            </label>
                            <input
                                defaultValue={data.sub_text}
                                onChange={(e) => {
                                    setData({ ...data, sub_text: e.target.value });
                                }}
                                type="text" className="input" />
                        </div>
                        <div>
                            {data && data.sections ? data.sections.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <div className="space-y-[12px]">
                                            <label className="font-bold text-gray-700 text-[14px] my-[12px] block">
                                                Nội dung {index + 1}
                                            </label>
                                            <div className="space-y-[12px]">
                                                <label>
                                                    Tiêu đề
                                                </label>
                                                <div>
                                                    <input
                                                        defaultValue={item.title}
                                                        onChange={(e) => {
                                                            data['sections'][index]['title'] = e.target.value;
                                                            setData(data);

                                                        }}
                                                        type="text" className="input" />
                                                </div>
                                                <div>
                                                    <div>Image</div>
                                                    <div className='flex items-start justify-between'>
                                                        <div className='aspect-w-1 aspect-h-1 max-w-[200px] '>
                                                            <img src={item.file ?? ""} alt="" className="w-full h-full object-containt" />
                                                        </div>
                                                        <Button
                                                            onClick={() => {
                                                                setIndexImage(index);
                                                                setIsShowMedia(true)
                                                            }
                                                            }
                                                            icon="pi pi-cloud-upload"
                                                            className='mt-[12px]'
                                                            size='small'
                                                            label="Chọn hình ảnh"
                                                            severity="help"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label>
                                                        Giá trị
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        defaultValue={item.value}
                                                        onChange={(e) => {
                                                            data['sections'][index]['value'] = e.target.value;
                                                            setData(data);

                                                        }}
                                                        className="input" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                onClick={() => {
                                                    setData({
                                                        ...data,
                                                        sections: data.sections.filter((item, i, arr) => i != index)
                                                    })
                                                }}
                                                className='mt-[12px]'
                                                size='small'
                                                label="Xóa"
                                                severity="danger"
                                                icon="pi pi-trash" />
                                        </div>
                                    </div>
                                )
                            }) : ""}
                            <Button
                                onClick={() => {
                                    if (!data.sections) {
                                        data.sections = [];
                                    }
                                    setData({
                                        ...data, sections: [
                                            ...data.sections,
                                            {
                                                title: "",
                                                file: "",
                                                value: "",
                                            }

                                        ]
                                    })
                                }}
                                className="mt-[12px]"
                                size='small'
                                label="Tạo Mới Section"
                                icon="pi pi-plus" />
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default SectionCustom