import React from 'react'
import './TaskItem.scss'

export const TaskItem = ({task}) => {
  return (
    <div className="item">
      <div className="text">{task?.title}</div>
      <div className="buttons">
        <app-more-menu/>
        <img/>
      </div>
    </div>
  )
}
