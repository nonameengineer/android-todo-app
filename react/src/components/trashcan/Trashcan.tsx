import React from 'react'
import './Trashcan.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'
import { Colors } from '../../models/colors'

export const Trashcan = () => (
  <section>
    <SectionTitle title="Archived"/>
    <TaskItem task={ {
      id: '1',
      title: 'task 1',
      date: new Date('1995-12-17T03:24:00').toDateString(),
      color: Colors.RED,
      isFavorite: false,
      isArchived: false,
    }}/>
  </section>
)
