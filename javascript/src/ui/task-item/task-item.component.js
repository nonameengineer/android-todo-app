import Component from '../../lib/Component'
import './task-item.component.scss';

class TaskItemComponent extends Component {

  render () {
    return `
      <div class="item">
        <div class="text">
          Title
        </div>
      </div>
    `
  }
}

export default TaskItemComponent
