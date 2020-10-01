import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './TaskItem.scss'
import { MoreMenu } from '../more-menu/MoreMenu'
import { ReactComponent as AccessTimeIcon } from '../../assets/svg/access_time-24px.svg'
import { ReactComponent as AccessTimeDarkIcon } from '../../assets/svg/access_time-dark-24px.svg'
import { ReactComponent as EastIcon } from '../../assets/svg/east-24px.svg'
import { Task } from '../../models/task'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'

type TaskItemProps = {
  task: Task;
  onClick?: () => void
}

export const TaskItem = ({ task, onClick }: TaskItemProps) => {
  const theme = useContext(ThemeContext);
  const history = useHistory()
  const [isActive, setIsActive] = useState(false)
  const [remaining, setRemaining] = useState('')

  const onTime = (event: any) => {
    event.stopPropagation()
    setIsActive(true)
    setRemaining(`Remaining ${task.date}...`)
  }

  const onBack = (event: any) => {
    event.stopPropagation()
    setIsActive(false)
  }

  return (
    <div
      className="item"
      style={{
        borderColor: task.color,
        backgroundColor: isActive ? task.color : 'unset'
      }}
      onClick={() => history.push('/task')}>
      <div className={`text ${theme === Themes.DARK && !isActive ? 'dark' : null}`}>
        {isActive ? remaining : task?.title}
      </div>
      {
        isActive
          ?
          <div className="buttons">
            <EastIcon onClick={onBack}/>
          </div>
          :
          <div className="buttons">
            <MoreMenu/>
            {theme === Themes.LIGHT ? <AccessTimeIcon onClick={onTime}/> : <AccessTimeDarkIcon onClick={onTime}/>}
          </div>
      }
    </div>
  )
}
