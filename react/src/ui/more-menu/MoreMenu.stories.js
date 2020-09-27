import React from 'react'

import { MoreMenu } from './MoreMenu'

export default {
  title: 'UI kit/MoreMenu',
  component: MoreMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <MoreMenu {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
