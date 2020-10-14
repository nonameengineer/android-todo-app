import './new-task.component.scss';
import Component from '../../lib/Component'
import Renderer from '../../lib/Renderer'
import TaskCardComponent from '../../ui/task-card/task-card.component'

class NewTaskComponent extends Component {

  render () {
    return `
      ${Renderer.render(new TaskCardComponent(), this.id)}
    `
  }
}

export default NewTaskComponent
