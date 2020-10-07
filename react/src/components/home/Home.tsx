import React, { useContext, useEffect, useState } from 'react'
import './Home.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { Colors } from '../../models/colors'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'
import { ITask } from '../../models/ITask'
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service'

const todayTasks = [
  {
    id: '1',
    title: 'task 1',
    date: new Date('1995-12-17T03:24:00').toDateString(),
    color: Colors.RED,
    isFavorite: false,
    isArchived: false,
  },
]

export const Home: React.FC = () => {
  const history = useHistory()
  const theme = useContext(ThemeContext)

  const tasksStorage = new TasksStorageService()
  const [tasks, setTasks] = useState<ITask[]>([])
  const [todayTasks, setTodayTasks] = useState<ITask[]>([])
  const [favoriteTasks, setFavoriteTasks] = useState<ITask[]>([])
  const [soonTasks, setSoonTasks] = useState<ITask[]>([])
  const [pastTasks, setPastTasks] = useState<ITask[]>([])

  function loadAllTasks (): void {
    setTasks(tasksStorage.getTasks())
  }

  function getTodaysTasks (): void {
    setTodayTasks(
      tasks.filter(task => task.date === new Date().toDateString() &&
        !task.isFavorite && !task.isArchived),
    )
  }

  function getFavoriteTasks (): void {
    setFavoriteTasks(
      tasks.filter(task => task.isFavorite && !task.isArchived),
    )
  }

  function getSoonTasks (): void {
    setSoonTasks(
      tasks.filter(task => task.date < new Date().toDateString() &&
        !task.isFavorite && !task.isArchived),
    )
  }

  function getPastTasks (): void {
    setPastTasks(
      tasks.filter(task => task.date > new Date().toDateString() &&
        !task.isFavorite && !task.isArchived),
    )
  }

  useEffect(() => {
    loadAllTasks()
  }, [])

  useEffect(() => {
    getTodaysTasks()
    getFavoriteTasks()
    getSoonTasks()
    getPastTasks()
  }, [tasks])

  return (
    <div className="wrapper">
      <div className={`new ${theme === Themes.DARK ? 'dark' : null}`}
           onClick={() => history.push('/new')}>
        New...
      </div>
      {
        todayTasks.length > 0 ?
          <section>
            <SectionTitle title="Today" onClick={() => {}}/>
            {
              todayTasks.map((task, index) =>
                <TaskItem key={index} task={task} onClick={() => {}}/>)
            }
          </section> : null
      }
      {
        favoriteTasks.length > 0 ?
          <section>
            <SectionTitle title="Favourites" onClick={() => {}}/>
            {
              favoriteTasks.map((task, index) =>
                <TaskItem key={index} task={task} onClick={() => {}}/>)
            }
          </section> : null
      }
      {
        soonTasks.length > 0 ?
          <section>
            <SectionTitle title="Soon" onClick={() => {}}/>
            {
              soonTasks.map((task, index) =>
                <TaskItem key={index} task={task} onClick={() => {}}/>)
            }
          </section> : null
      }
      {
        pastTasks.length > 0 ?
          <section>
            <SectionTitle title="Past" onClick={() => {}}/>
            {
              pastTasks.map((task, index) =>
                <TaskItem key={index} task={task} onClick={() => {}}/>)
            }
          </section> : null
      }
    </div>
  )
}
