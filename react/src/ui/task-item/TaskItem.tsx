import React from 'react'
import './TaskItem.scss'
import { MoreMenu } from '../more-menu/MoreMenu'

type TaskItemProps = {
  task: any;
}

export const TaskItem = ({task}: TaskItemProps) => {
  return (
    <div className="item">
      <div className="text">{task?.title}</div>
      <div className="buttons">
        <MoreMenu />
        <img/>
      </div>
    </div>
  )
}
