import React, { useEffect, useState } from 'react'
import './Trashcan.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { ITask } from '../../models/ITask'
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service'

export const Trashcan = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const tasksStorage = new TasksStorageService();

  const onClearAll = () => {}
  const onRestoreAll = () => {}

  useEffect(() => {
    setTasks(tasksStorage.getTasks().filter(task => task.isArchived));
  }, [])

  return (
    <section>
      <header>
        <SectionTitle clickable={false} title="Archived"/>
        <div className="buttons">
          <div className="button" onClick={onClearAll}>Clear all</div>
          <div className="button" onClick={onRestoreAll}>Restore all</div>
        </div>
      </header>
      { tasks.length > 0 ? tasks.map((task: ITask) => <TaskItem key={task.id} task={task}/>) : null}
    </section>
  )
}
