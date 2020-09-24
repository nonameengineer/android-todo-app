import { Meta, Story } from '@storybook/angular/types-6-0';
import { SectionTitleComponent } from './section-title.component';
import { SectionTitleModule } from './section-title.module';

export default {
  title: 'UI kit/Section title',
  component: SectionTitleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SectionTitleComponent> = (args: SectionTitleComponent) => ({
  component: SectionTitleComponent,
  moduleMetadata: {
    imports: [
      SectionTitleModule
    ]
  },
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'SectionTitleComponent',
};
