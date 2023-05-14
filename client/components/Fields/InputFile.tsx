import React, { useEffect, useRef, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts';
import MediaManager from '../MediaManager'

export default function InputFile({ field, emit, modelValue }: any) {

  const [isShowMedia, setIsShowMedia] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);
  const [file, setFile] = useState<any>(modelValue);

  useUpdateEffect(() => {
    emit(field.multiple ? files : file);
  }, [file, files])

  return (
    <React.Fragment>
      {
        files.length && field.multiple ? (
          <div className='flex items-center flex-wrap'>
            <div className='flex items-center flex-wrap'>
              {files.map((file: any, index: number) => {
                return (
                  <div
                    key={index}
                    className=" group transition-all ">
                    <div className="aspect-w-1 relative aspect-h-1 w-[100px] h-[100px] mb-[10px] mr-[10px] bg-gray-200">
                      <img
                        src={file.path}
                        alt={file.name}
                        className='w-full h-full object-cover'
                      />
                      <button
                        onClick={() => setFiles(files.filter((item: any) => item.id != file.id))}
                        className="absolute hidden group-hover:block bottom-1 right-1  border border-gray-900 bg-white text-gray-900 rounded-[4px] px-[10px] py-[4px] text-[10px]"
                      >
                        Xóa
                      </button>
                    </div>

                  </div>
                )
              })}
            </div>
            <button
              onClick={() => setIsShowMedia(true)}
              className='border-dashed border-2 border-gray-200 w-[100px] h-[100px] flex items-center justify-center mb-[10px] mr-[10px]'>
              <img src="/svg/admin/sidebar/plus.svg" className='text-gray-200' />
            </button>
          </div>
        ) : ""
      }

      {
        file && !field.multiple ? (
          <div className=''>
            <div
              className=" group transition-all ">
              <div className="relative aspect-w-1 aspect-h-1 mb-[10px] mr-[10px] bg-gray-200 h-[250px] w-full">
                <img
                  src={file.path}
                  alt={file.name}
                  className='object-contain w-full h-full'
                />
                <button
                  onClick={() => setFile(null)}
                  className="absolute hidden group-hover:block bottom-1 right-1  border border-gray-900 bg-white text-gray-900 rounded-[4px] px-[10px] py-[4px] text-[10px]"
                >
                  Xóa
                </button>
              </div>

            </div>
          </div>
        ) : ""
      }

      {!files.length && field.multiple ? (
        <div className='group'>
          <button
            onClick={() => setIsShowMedia(true)}
            className='border-dashed border-2 border-gray-200 w-[100px] h-[100px] flex items-center justify-center mb-[10px] mr-[10px]'>
            <img src="/svg/admin/sidebar/plus.svg" className='text-gray-200' />
          </button>
        </div>
      ) : ""}

      {!file && !field.multiple ? (
        <div className='bg-gray-100 group p-[20px] opacity-50'>
          <div className=" border-dashed border-2 border-gray-700 w-full min-h-[150px] rounded-[4px] text-center p-[10px] flex items-center justify-center transition-all cursor-pointer relative">
            <button
              className="absolute flex items-center justify-center inset-x-0 inset-y-0 text-center uppercase"
              onClick={() => setIsShowMedia(true)}
            >
              <img src="/svg/image_folder.svg" alt="" />
            </button>
          </div>
        </div>
      ) : ""}

      {
        isShowMedia && (
          <div className="absolute p-[20px] inset-x-0 inset-y-0 bg-white z-[99] h-full w-full">
            <MediaManager
              fileSelect={file}
              filesSelect={files}
              multiple={field.multiple}
              onClose={(arg: boolean) => setIsShowMedia(arg)}
              onSelectFile={(file: any) => {
                if (field.multiple) {
                  setFiles(file)
                }
                if (!field.multiple) {
                  setFile(file)
                }
              }}
            />
          </div>
        )
      }
    </React.Fragment >
  )
}

