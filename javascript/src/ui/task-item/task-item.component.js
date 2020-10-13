import Component from '../../lib/Component'
import './task-item.component.scss';

class TaskItemComponent extends Component {

  constructor (title) {
    super();
    this.title = title;
  }

  render () {
    return `
      <div class="item">
        <div class="text">
          ${this.title}
        </div>
      </div>
    `
  }
}

export default TaskItemComponent
