import React, { useEffect } from 'react'
import './Task.scss'
import { TaskCard } from '../../ui/task-card/TaskCard'
import { useHistory, useLocation } from 'react-router-dom'
import { ITask } from '../../models/ITask'


export const Task = () => {
  const location = useLocation();
  const history = useHistory();

  // @ts-ignore
  const task: ITask = location.state.task;

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state);
    // @ts-ignore
  }, [location]);

  function onAccept(e: any): void {
    console.log(e);
  }

  return (
    <div className="wrapper">
      <TaskCard task={task} accepted={onAccept} closed={() => history.push('/')}/>
    </div>
  )
}
