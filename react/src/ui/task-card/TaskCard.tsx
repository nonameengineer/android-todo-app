import React, { useContext, useEffect, useRef, useState } from 'react'
import './TaskCard.scss'
import { ColorPicker } from '../color-picker/ColorPicker'
import { DateInput } from '../date-input/DateInput'
import { ReactComponent as AccessTimeIcon } from '../../assets/svg/access_time-24px.svg'
import { ReactComponent as AccessTimeDarkIcon } from '../../assets/svg/access_time-dark-24px.svg'
import { ReactComponent as ClearIcon } from '../../assets/svg/clear-24px.svg'
import { ReactComponent as ClearDarkIcon } from '../../assets/svg/clear-dark-24px.svg'
import { ReactComponent as DoneIcon } from '../../assets/svg/done-24px.svg'
import { ReactComponent as DoneDarkIcon } from '../../assets/svg/done-dark-24px.svg'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'
import { useForm } from 'react-hook-form'

export const TaskCard: React.FC = () => {
  const theme = useContext(ThemeContext)
  const { register, handleSubmit } = useForm();
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
    setIsShowColor(true)
  }

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <>
      <div className="card">
        <div className="content">
          <div className="row header">
            <textarea
              placeholder="New..."
              className={`${theme === Themes.DARK ? 'dark' : null}`}/>
            <div className="color-picker-button" onClick={onColor}>
              {isShowColor ? <ColorPicker ref={colorPickerRef}/> : null}
            </div>
          </div>
          <div className="row">
            <DateInput/>
            {theme === Themes.LIGHT ? <AccessTimeIcon/> : <AccessTimeDarkIcon/>}
          </div>
        </div>
        <div className="card__bottom">
          {
            theme === Themes.LIGHT
              ? <>
                <ClearIcon/>
                <DoneIcon/></>
              : <>
                <ClearDarkIcon/>
                <DoneDarkIcon/></>
          }
        </div>
      </div>
    </>
  )
}
