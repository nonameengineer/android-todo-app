import React from 'react'
import './NewCard.scss'
import { TaskCard } from '../../ui/task-card/TaskCard'
import { useHistory } from 'react-router-dom'

export const NewCard = () => {
  const history = useHistory();

  function onAccept(e: any): void {
    console.log(e);
  }

  return (
    <div className="wrapper">
      <TaskCard accepted={onAccept} closed={() => history.push('/')}/>
    </div>
  )
}
