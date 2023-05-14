import Image from 'next/image'
import React from 'react'
import { TYPE } from '../../enum'
import { createAlert } from '../../store/alertSlice'
import Button from '../Fields/Button'
import { useDispatch, useSelector } from 'react-redux'

function Alert() {
  const dispatch = useDispatch()
  const { isAlert, type, message } = useSelector(
    (state: any) => state.alert.alert,
  )

  const onClose = () => {
    dispatch(createAlert({ isAlert: false }))
  }

  const icon =
    type === TYPE.SUCCESS ? '/svg/icon-success.svg' : '/svg/icon-error.svg'

  return isAlert ? (
    <React.Fragment>
      <div className="modal">
        <div className="modal-header"></div>
        <div className="modal-body text-center flex justify-center">
          <div>
            <div>
              <Image src={icon} width={33} height={33} alt="" />
            </div>
            <div className="mt-[1.25rem] text-[#4B5563] text-[24px] font-bold mb-[2.5rem] leading-[36px]">
              {message}
            </div>

            {type === TYPE.SUCCESS ? (
              <Button label="Đóng" variant="green" onClick={() => onClose()} />
            ) : (
              <div className="flex justify-center items-center space-x-[8px]">
                <Button
                  label="Thử lại"
                  variant="red"
                  onClick={() => onClose()}
                />

                <Button label="Đóng" variant="gray" onClick={() => onClose()} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div onClick={onClose} className="modal-close overplay"></div>
    </React.Fragment>
  ) : null
}

export default Alert
