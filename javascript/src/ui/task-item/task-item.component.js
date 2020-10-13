import Component from '../../lib/Component'
import './task-item.component.scss';
import DARK_THEME_VAR from '../../services/theme.service'

class TaskItemComponent extends Component {

  constructor (title) {
    super();
    this.title = title;
  }

  render () {
    return `
      <div class="item">
        <div class="text ${window[DARK_THEME_VAR] ? 'dark' : 'light'}">
          ${this.title}
        </div>
      </div>
    `
  }
}

export default TaskItemComponent
