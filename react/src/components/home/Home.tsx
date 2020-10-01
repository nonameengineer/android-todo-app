import React, { useContext, useEffect, useState } from 'react'
import './Home.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { Colors } from '../../models/colors'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'
import { Task } from '../../models/task'
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
  const theme = useContext(ThemeContext);

  const tasksStorage = new TasksStorageService();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todayTasks, setTodayTasks] = useState<Task[]>([]);
  const [favoriteTasks, setFavoriteTasks] = useState<Task[]>([]);
  const [soonTasks, setSoonTasks] = useState<Task[]>([]);

  function loadAllTasks(): void {
    setTasks(tasksStorage.getTasks());
  }

  function getTodaysTasks(): void {
    setTodayTasks(
      tasks.filter(task => task.date === new Date().toDateString() &&
      !task.isFavorite && !task.isArchived)
    );
  }

  function getFavoriteTasks(): void {
    setFavoriteTasks(
      tasks.filter(task => task.isFavorite && !task.isArchived)
    );
  }

  function getSoonTasks(): void {
    setSoonTasks(
      tasks.filter(task => task.date !== new Date().toDateString() &&
        !task.isFavorite && !task.isArchived)
    );
  }

  useEffect(() => {
    loadAllTasks();
  }, [])

  useEffect(() => {
    getTodaysTasks();
    getFavoriteTasks();
    getSoonTasks();
  }, [tasks])

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="New..."
        className={`input__new ${theme === Themes.DARK ? 'dark' : null}`}
        onClick={() => history.push('/new')}/>
      <section>
        <SectionTitle title="Today" onClick={() => {}}/>
        {
          todayTasks.map((task, index) =>
            <TaskItem key={index} task={task} onClick={() => {}}/>)
        }
      </section>
      <section>
        <SectionTitle title="Favourites" onClick={() => {}}/>
        {
          favoriteTasks.map((task, index) =>
            <TaskItem key={index} task={task} onClick={() => {}}/>)
        }
      </section>
      <section>
        <SectionTitle title="Soon" onClick={() => {}}/>
        {
          soonTasks.map((task, index) =>
            <TaskItem key={index} task={task} onClick={() => {}}/>)
        }
      </section>
      <div className="show-more">See more...</div>
    </div>
  )
}
