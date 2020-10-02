import React, { useEffect } from 'react'
import './Task.scss'
import { TaskCard } from '../../ui/task-card/TaskCard'
import { useLocation } from 'react-router-dom';
import { ITask } from '../../models/ITask'


export const Task = () => {
  const location = useLocation();
  // @ts-ignore
  const task: ITask = location.state.task;

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state);
    // @ts-ignore
  }, [location]);

  return (
    <div className="wrapper">
      <TaskCard task={task}/>
    </div>
  )
}
