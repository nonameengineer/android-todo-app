import React from 'react'
import './Trashcan.scss'
import { TaskItem } from '../../ui/task-item/TaskItem'
import { SectionTitle } from '../../ui/section-title/SectionTitle'

export const Trashcan = () => (
  <section>
    <SectionTitle title="Archived"/>
    <TaskItem task={null}/>
  </section>
)
