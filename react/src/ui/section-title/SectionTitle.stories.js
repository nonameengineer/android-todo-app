import React from 'react'

import { SectionTitle } from './SectionTitle'

export default {
  title: 'UI kit/SectionTitle',
  component: SectionTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <SectionTitle {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
