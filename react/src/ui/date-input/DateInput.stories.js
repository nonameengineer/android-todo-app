import React from 'react'

import { DateInput } from './DateInput'

export default {
  title: 'UI kit/DateInput',
  component: DateInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <DateInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
