import Component from '../../lib/Component'
import './home.component.scss'
import Renderer from '../../lib/Renderer'
import SectionTitleComponent
  from '../../ui/section-title/section-title.component'
import TaskItemComponent from '../../ui/task-item/task-item.component'

class HomeComponent extends Component {

  render () {
    return `
      ${Renderer.render(new SectionTitleComponent('Some title'), this.id)}
      ${Renderer.render(new TaskItemComponent(), this.id)}
      ${Renderer.render(new TaskItemComponent(), this.id)}
     `
  }
}

export default HomeComponent
