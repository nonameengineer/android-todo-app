import Component from '../../lib/Component'
import './task-item.component.scss';
import DARK_THEME_VAR from '../../services/theme.service'

class TaskItemComponent extends Component {

  constructor (title) {
    super();
    this.title = title;
  }

  afterRender () {
    document.getElementById(this.id).addEventListener('click', () => {
      console.log(this.id);
    })
  }

  async render () {
    return `
      <div class="item">
        <div class="text ${window[DARK_THEME_VAR] ? 'dark' : ''}">
          ${this.title}
        </div>
      </div>
    `
  }
}

export default TaskItemComponent
