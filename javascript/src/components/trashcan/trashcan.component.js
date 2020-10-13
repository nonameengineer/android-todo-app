import Component from '../../lib/Component';
import './trashcan.component.scss';
import Renderer from '../../lib/Renderer'
import TaskItemComponent from '../../ui/task-item/task-item.component'

class TrashcanComponent extends Component {

  render () {
    return `
      ${Renderer.render(new TaskItemComponent('Title 1'), this.id)}
    `
  }
}

export default TrashcanComponent
