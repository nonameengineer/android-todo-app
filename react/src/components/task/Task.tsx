import React, { useEffect } from 'react'
import './Task.scss'
import { TaskCard } from '../../ui/task-card/TaskCard'
import { useHistory, useLocation } from 'react-router-dom'
import { ITask } from '../../models/ITask'
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service'


export const Task = () => {
  const location = useLocation();
  const history = useHistory();
  const tasksStorageService = new TasksStorageService()

  // @ts-ignore
  const task: ITask = location.state.task;

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state);
    // @ts-ignore
  }, [location]);

  function onAccept(task: ITask): void {
    tasksStorageService.updateTask(task)
    console.log(task);
    history.push('/')
  }

  return (
    <div className="wrapper">
      <TaskCard task={task} accepted={onAccept} closed={() => history.push('/')}/>
    </div>
  )
}
