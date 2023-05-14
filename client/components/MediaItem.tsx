import React from 'react'
interface Props {
  onRemoveFile: (file: any) => void;
  onSelectFile: (file: any) => void;
  file: any,
}

function MediaItem({
  onSelectFile,
  onRemoveFile,
  file,
}: Props) {
  return (
    <div
      className="overflow-hidden"
    >
      <img
        onClick={() => onSelectFile(file)}
        src={file.path}
        alt={file.name}
        className='w-full h-full'
      />
      <div
        onClick={() => onRemoveFile(file)}
        className="text-[12px] absolute z-[10]
          font-bold hidden group-hover:block bottom-1 right-1 py-[4px]
           px-[20px] text-black border border-black rounded-[4px] bg-white uppercase shadow-input"
      >
        Xóa
      </div>
    </div >
  )
}

export default MediaItem
