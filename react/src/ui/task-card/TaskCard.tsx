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
import { ITask } from '../../models/ITask'
import { Colors } from '../../models/colors'
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service'

type TaskCardProps = {
  task?: ITask;
  accepted: (task: ITask) => void,
  closed: () => void
}

export const TaskCard = ({ task, accepted, closed }: TaskCardProps) => {
  const theme = useContext(ThemeContext)
  const colorPickerRef = useRef(null)
  const [isShowColor, setIsShowColor] = useState(false)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date())
  const [color, setColor] = useState<string>(Colors.GREEN)

  const handleClickOutside = (event: any) => {
    if (colorPickerRef && colorPickerRef.current &&
      // @ts-ignore
      !colorPickerRef.current.contains(event.target)) {
      setIsShowColor(false)
    }
  }

  const onColor = (event: any) => {
    setIsShowColor(true)
  }

  const onColorSelect = (color: string) => {
    setColor(color);
  }

  const onSubmit = (event: any) => {
    event.preventDefault()

    console.log(`
      Email: ${title}
      Password: ${date}
      Country: ${color}
    `)

    const task: ITask = {
      id: '1',
      title: 'task 1',
      date: new Date('1995-12-17T03:24:00').toDateString(),
      color: Colors.RED,
      isFavorite: false,
      isArchived: false,
    }

    accepted(task)
  }

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setColor(task.color)
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <>
      <div
        className="card"
        style={{ borderColor: color }}>
        <div className="content">
          <div className="row header">
            <textarea
              placeholder="New..."
              className={`${theme === Themes.DARK ? 'dark' : null}`}
              value={title}
              onChange={e => setTitle(e.target.value)}/>
            <div
              ref={colorPickerRef}
              className="color-picker-button"
              style={{ backgroundColor: color }}
              onClick={onColor}>
              {isShowColor ? <ColorPicker colorSelect={onColorSelect}/> : null}
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
                <ClearIcon onClick={closed}/>
                <DoneIcon onClick={onSubmit}/></>
              : <>
                <ClearDarkIcon onClick={closed}/>
                <DoneDarkIcon onClick={onSubmit}/></>
          }
        </div>
      </div>
    </>
  )
}
