import React from 'react'

import { ColorPicker } from './ColorPicker'

export default {
  title: 'UI kit/ColorPicker',
  component: ColorPicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ColorPicker {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
