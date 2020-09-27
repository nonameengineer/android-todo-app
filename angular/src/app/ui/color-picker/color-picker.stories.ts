import { Story, Meta } from '@storybook/angular/types-6-0';
import {ColorPickerComponent} from './color-picker.component';

export default {
  title: 'UI kit/Color picker',
  component: ColorPickerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ColorPickerComponent> = (args: ColorPickerComponent) => ({
  component: ColorPickerComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ColorPickerComponent',
};
