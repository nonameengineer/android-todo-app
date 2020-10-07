import React from 'react'
import './NewCard.scss'
import { TaskCard } from '../../ui/task-card/TaskCard'
import { useHistory } from 'react-router-dom'
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service'
import { ITask } from '../../models/ITask'

export const NewCard = () => {
  const history = useHistory();
  const tasksStorageService = new TasksStorageService()

  function onAccept(task: ITask): void {
    tasksStorageService.addTask(task)
    history.push('/')
  }

  return (
    <div className="wrapper">
      <TaskCard
        accepted={onAccept}
        closed={() => history.push('/')}/>
    </div>
  )
}
