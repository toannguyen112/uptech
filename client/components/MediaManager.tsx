import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import axios from '../configAxios'
import MediaItem from './MediaItem'
import { Dialog } from 'primereact/dialog';
import { Tree } from 'primereact/tree';
import { useRouter } from 'next/router'
import { InputText } from 'primereact/inputtext';
import { toast } from 'react-toastify';

import { FormattedMessage } from 'react-intl';

function MediaManager({
  multiple = false,
  filesSelect = [],
  fileSelect = {},
  onClose,
  onSelectFile }: any) {

  const inputRef = useRef<any>();
  const router = useRouter();
  const { id } = router.query;

  const [selectFiles, setSelectFiles] = useState<any>(multiple ? filesSelect : fileSelect);

  const [visible, setVisible] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);
  const [medias, setMedias] = useState<any[]>([]);
  const [nodes, setNodes] = useState<any>();
  const [selectedKey, setSelectedKey] = useState<any>(1);
  const [folderName, setFolderName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOpenFileInput = () => inputRef.current.click()

  const fetchTreeFolder = async () => {
    try {
      const res = await axios.get('/folders');
      setNodes(res.data.data);
    } catch (err) {
      console.error(err)
    }
  }

  const fetchMediasFolder = async () => {

    try {
      setLoading(true);
      await axios.post('/folders/get-medias',
        { folderId: selectedKey })
        .then((res) => {
          setMedias(res.data.data);
          setLoading(false);
        });

    } catch (err) {
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchTreeFolder();
  }, []);

  useEffect(() => {
    if (files.length) createMedia();
  }, [files]);

  useEffect(() => {
    fetchMediasFolder();
  }, [selectedKey]);

  const createMedia = async () => {
    try {
      const formData = new FormData();
      const folderId = selectedKey;

      Array.from(files).forEach((file) => {
        formData.append('files', file);
      });

      formData.append('folderId', folderId);

      await axios.post('/medias/create', formData)
        .then((res) => {
          fetchMediasFolder();
        })

    } catch (err) {
      console.error(err);
    }
  }

  const handleSelectFile = (file: any) => {

    if (multiple) {
      const fileFoud = selectFiles.find((item: any) => item.id === file.id);
      if (fileFoud) {
        setSelectFiles(selectFiles.filter((item: any) => item.id != file.id));
      }
      else {
        setSelectFiles([...selectFiles, file])
      }
    }
    else {
      if (router.pathname != '/admin/medias') {
        onSelectFile(file);
        onClose(false);
      }
    }

  }

  const handleRemoveFile = async (file: any) => {
    await axios
      .delete(`medias/delete/${file.id}`)
      .then((result) => {
        fetchMediasFolder()
        toast.success('Xóa File thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch((err) => {
      });
  }

  const onDeleteFolder = async () => {
    await axios.delete(`/folders/delete/${selectedKey}`,
    ).then((res) => {
      if (res.data) {
        fetchTreeFolder();
      }
    })
  }

  const onCreateFolder = async () => {

    await axios.post('/folders/create', {
      parent_id: selectedKey,
      label: folderName,
    })
      .then((res) => {
        setVisible(false);
        toast.success('Thêm thư mục thành công !', {
          position: toast.POSITION.TOP_CENTER
        });
        fetchTreeFolder();
        setFolderName("");
      });
  }

  const onRemoveSelect = () => {
    setSelectFiles([]);
  }

  const onEmitFiles = () => {
    onSelectFile(selectFiles);
    onClose(false);
  }

  return (
    <React.Fragment>
      <Dialog header="Tạo Folder"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}>

        <div className='space-y-[8px]'>
          <label htmlFor="">Tên Folder:</label>
          <InputText value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className="w-full" />
        </div>

        <div className='flex justify-end'>
          <button className='btn btn-prime mt-[20px]'
            onClick={() => onCreateFolder()} >
            Tạo
          </button>
        </div>

      </Dialog>
      <div className='fixed top-0 bottom-0 right-0 z-50 overflow-hidden bg-white left-from-sidebar'>
        {
          multiple && selectFiles.length ? (
            <div className='absolute z-[10] bottom-0 inset-x-0 bg-white border-t border-gray-200 flex items-center justify-center py-[1rem] space-x-[12px]'>
              <button
                onClick={() => onRemoveSelect()}
                className='btn-gray-outline uppercase' >
                Bỏ chọn
              </button>
              <button
                onClick={() => onEmitFiles()}
                className='btn-gray-outline uppercase' >
                Chọn ({selectFiles.length})
              </button>
            </div>
          ) : ''
        }
        <div className="absolute inset-x-0 h-[80px] flex justify-between bg-white border-b border-gray-200 py-[1rem] px-[2rem] items-center">

          <div className="text-gray-900 font-medium flex items-center space-x-[10px]">
            {
              router.pathname !== '/admin/medias' &&
              <button
                onClick={() => onClose(false)}
                className="cursor-pointer">
                <img src="/svg/arrow.svg" className='rotate-90' />
              </button>
            }
            <span>File Maneger</span></div>
          <div className="flex items-center space-x-[8px]">
            <div className='p-[8px] border border-gray-400 rounded-[12px] min-w-[400px] bg-white'>
              <input
                className="border-none w-full focus:outline-none placeholder:text-gray-400"
                multiple
                placeholder='Nhập tên tệp...'
                type="text"
              />
            </div>
            <button
              onClick={() => setVisible(true)}
              className="btn-prime"
            >
              <FormattedMessage id="page.admin.btn_create_folder" />
            </button>
            <button
              onClick={handleOpenFileInput}
              className="btn-prime"
            >
              <Image
                src="/svg/upload.svg"
                alt="upload"
                width="20"
                height="20"
                className="text-white"
              />
              <div>
                <FormattedMessage id="page.admin.btn_choosen_folder" />
              </div>
            </button>
          </div>
        </div>
        <input
          ref={inputRef}
          style={{ display: 'none' }}
          multiple
          type="file"
          onChange={(e: any) => { setFiles(e.target.files) }}
        />
        <div className="pt-[80px] grid grid-cols-12 bg-white h-full">
          <div className="col-span-4 border-r border-gray-200 py-[20px] px-4">
            <Tree
              value={nodes}
              selectionMode="single"
              selectionKeys={selectedKey}
              onSelectionChange={(e: any) => setSelectedKey(e.value)}
              className="w-full md:w-30rem" />
          </div>
          <div className='col-span-8 overflow-y-auto py-[20px] px-4 h-screen max-h-screen pb-[200px]'>
            <div className="grid grid-cols-4 gap-[8px] ">
              {
                medias && medias.length ? medias.map((file: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`col-span-1 h-[200px] 
                      flex items-center justify-center bg-gray-100
                      group aspect-w-1 aspect-h-1 border border-gray-300 rounded-[8px] 
                      overflow-hidden  
                      cursor-pointer group-hover:border-prime relative 
                      ${multiple && selectFiles.find((item: any) => item.id === file.id)
                          ? 'border-prime' : ""}`}>
                      <MediaItem
                        onSelectFile={handleSelectFile}
                        onRemoveFile={handleRemoveFile}
                        file={file}
                      />
                    </div>
                  )
                }) : ""
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MediaManager
