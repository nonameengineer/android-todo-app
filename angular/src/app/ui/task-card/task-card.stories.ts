import { Story, Meta } from '@storybook/angular/types-6-0';
import {TaskCardComponent} from './task-card.component';
import { TaskCardModule } from './task-card.module';

export default {
  title: 'UI kit/Task card',
  component: TaskCardComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TaskCardComponent> = (args: TaskCardComponent) => ({
  component: TaskCardComponent,
  moduleMetadata: {
    imports: [
      TaskCardModule
    ]
  },
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TaskCardComponent',
};
