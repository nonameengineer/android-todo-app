import { Meta, Story } from '@storybook/angular/types-6-0';
import { MoreMenuComponent } from './more-menu.component';
import { MoreMenuModule } from './more-menu.module';

export default {
  title: 'UI kit/More menu',
  component: MoreMenuComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MoreMenuComponent> = (args: MoreMenuComponent) => ({
  component: MoreMenuComponent,
  moduleMetadata: {
    imports: [
      MoreMenuModule
    ]
  },
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'MoreMenuComponent',
};
