import React from 'react'

import { TaskItem } from './TaskItem'

export default {
  title: 'UI kit/TaskItem',
  component: TaskItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TaskItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
