import React from 'react'

import { TaskCard } from './TaskCard'

export default {
  title: 'UI kit/TaskCard',
  component: TaskCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TaskCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
