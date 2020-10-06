import { Meta, Story } from '@storybook/angular/types-6-0';
import { DateInputComponent } from './date-input.component';
import { DateInputModule } from './date-input.module';

export default {
  title: 'UI kit/Date input',
  component: DateInputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DateInputComponent> = (args: DateInputComponent) => ({
  component: DateInputComponent,
  moduleMetadata: {
    imports: [
      DateInputModule
    ]
  },
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'DateInputComponent',
};
