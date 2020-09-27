import { Meta, Story } from '@storybook/angular/types-6-0';
import { TaskItemComponent } from './task-item.component';
import { TaskItemModule } from './task-item.module';

export default {
  title: 'UI kit/Task item',
  component: TaskItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TaskItemComponent> = (args: TaskItemComponent) => ({
  component: TaskItemComponent,
  moduleMetadata: {
    imports: [
      TaskItemModule
    ]
  },
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TaskItemComponent',
};
