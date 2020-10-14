import Component from '../../lib/Component'
import './task-card.component.scss';
import DARK_THEME_VAR from '../../services/theme.service'

class TaskCardComponent extends Component {

  render () {
    return `
      <div class="card">
        <div class="content">
          <div class="row header">
              <textarea
                type="text"
                placeholder="New..."></textarea>
            <div class="color-picker-button">
            </div>
          </div>
          <div class="row">
            <app-date-input formControlName="date"></app-date-input>
            <img src="(isDark$ | async) ? 'assets/svg/access_time-dark-24px.svg' : 'assets/svg/access_time-24px.svg'" alt="Date">
          </div>
        </div>
        <div class="card__bottom">
          <img src="(isDark$ | async) ? 'assets/svg/clear-dark-24px.svg' : 'assets/svg/clear-24px.svg'">
          <img src="(isDark$ | async) ? 'assets/svg/done-dark-24px.svg' : 'assets/svg/done-24px.svg'">
        </div>
      </div>
    `
  }
}

export default TaskCardComponent
