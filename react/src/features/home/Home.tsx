import React, { useContext } from 'react'
import './Home.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { Colors } from '../../models/colors'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'

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
            <TaskItem key="index" task={task} onClick={() => {}}/>)
        }
      </section>
      <section>
        <SectionTitle title="Favourites" onClick={() => {}}/>
        {
          todayTasks.map((task, index) =>
            <TaskItem key="index" task={task} onClick={() => {}}/>)
        }
      </section>
      <section>
        <SectionTitle title="Soon" onClick={() => {}}/>
        {
          todayTasks.map((task, index) =>
            <TaskItem key="index" task={task} onClick={() => {}}/>)
        }
      </section>
      <div className="show-more">See more...</div>
    </div>
  )
}
