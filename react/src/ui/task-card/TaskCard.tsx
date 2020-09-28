import React, { useEffect, useRef, useState } from 'react'
import './TaskCard.scss'
import { ColorPicker } from '../color-picker/ColorPicker'
import { DateInput } from '../date-input/DateInput'
import { ReactComponent as AccessTimeIcon } from '../../assets/svg/access_time-24px.svg'
import { ReactComponent as ClearIcon } from '../../assets/svg/clear-24px.svg'
import { ReactComponent as DoneIcon } from '../../assets/svg/done-24px.svg'

export const TaskCard: React.FC = () => {
  const colorPickerRef = useRef(null)
  const [isShowColor, setIsShowColor] = useState(false)

  const handleClickOutside = (event: any) => {
    if (colorPickerRef && colorPickerRef.current &&
      // @ts-ignore
      !containerRef.current.contains(event.target)) {
      setIsShowColor(false)
    }
  }

  const onColor = (event: any) => {
    setIsShowColor(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <>
      <div className="card">
        <div className="content">
          <div className="row header">
            <textarea placeholder="New..."/>
            <div className="color-picker-button" onClick={onColor}>
              {isShowColor ? <ColorPicker ref={colorPickerRef}/> : null }
            </div>
          </div>
          <div className="row">
            <DateInput/>
            <AccessTimeIcon/>
          </div>
        </div>
        <div className="card__bottom">
          <ClearIcon/>
          <DoneIcon/>
        </div>
      </div>
    </>
  )
}