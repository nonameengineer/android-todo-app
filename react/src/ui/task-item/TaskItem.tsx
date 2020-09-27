import React from 'react'
import './TaskItem.scss'
import { MoreMenu } from '../more-menu/MoreMenu'
import { useHistory } from 'react-router-dom'

type TaskItemProps = {
  task: any;
  onClick?: () => void
}

export const TaskItem = ({task, onClick}: TaskItemProps) => {
  const history = useHistory()

  return (
    <div className="item" onClick={() => history.push('/task')}>
      <div className="text">{task?.title}</div>
      <div className="buttons">
        <MoreMenu />
        <img alt=""/>
      </div>
    </div>
  )
}
