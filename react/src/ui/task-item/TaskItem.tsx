import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './TaskItem.scss'
import { MoreMenu } from '../more-menu/MoreMenu'
import { ReactComponent as AccessTimeIcon } from '../../assets/svg/access_time-24px.svg'
import { Task } from '../../models/task'

type TaskItemProps = {
  task: Task;
  onClick?: () => void
}

export const TaskItem = ({ task, onClick }: TaskItemProps) => {
  const history = useHistory()
  const [isActive, setIsActive] = useState(false)
  const [remaining, setRemaining] = useState('')

  const onTime = (e: any) => {
    e.stopPropagation()
    setIsActive(true)
    setRemaining(`Remaining ${task.date}...`)
  }

  return (
    <div className="item" onClick={() => history.push('/task')}>
      <div className="text">{task?.title}</div>
      <div className="buttons">
        <MoreMenu/>
        <AccessTimeIcon onClick={onTime}/>
      </div>
    </div>
  )
}
