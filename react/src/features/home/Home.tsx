import React from 'react'
import './Home.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { Colors } from '../../models/colors'


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

export const Home = () => {

  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="New..."
        className="input__new"/>
      <section>
        <SectionTitle title="Today"/>
        {todayTasks.map((task, index) => <TaskItem key="index" task={task}/>)}
      </section>
      <section>
        <SectionTitle title="Favourites"/>
        {todayTasks.map((task, index) => <TaskItem key="index" task={task}/>)}
      </section>
      <section>
        <SectionTitle title="Soon"/>
        {todayTasks.map((task, index) => <TaskItem key="index" task={task}/>)}
      </section>
      <div className="show-more">See more...</div>
    </div>
  )
}
