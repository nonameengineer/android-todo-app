import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './TaskItem.scss'
import { MoreMenu } from '../more-menu/MoreMenu'
import { ReactComponent as AccessTimeIcon } from '../../assets/svg/access_time-24px.svg'
import { ReactComponent as EastIcon } from '../../assets/svg/east-24px.svg'
import { Task } from '../../models/task'

type TaskItemProps = {
  task: Task;
  onClick?: () => void
}

export const TaskItem = ({ task, onClick }: TaskItemProps) => {
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
      <div className="text">{isActive ? remaining : task?.title}</div>
      {
        isActive
          ?
          <div className="buttons">
            <EastIcon onClick={onBack}/>
          </div>
          :
          <div className="buttons">
            <MoreMenu/>
            <AccessTimeIcon onClick={onTime}/>
          </div>
      }
    </div>
  )
}
