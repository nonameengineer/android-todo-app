import './header.component.scss'
import deleteIcon from './../../assets/svg/delete-24px.svg'
import wbSunnyIcon from './../../assets/svg/wb_sunny-24px.svg'
import DARK_THEME_VAR from '../../services/theme.service'
import Component from '../../lib/Component'

class Header extends Component {
  constructor () {
    super();
    this.darkTheme = window[DARK_THEME_VAR];
  }

  async beforeRender() {
    this.darkTheme = false;
  }

  async afterRender() {
    document.getElementById('theme-icon').addEventListener('click', () => {
      this.darkTheme = !this.darkTheme;
    })
  }

  async render() {
    return `
      <header>
        <div class="title">Delat<span>'</span></div>
        <div class="buttons">
          <img src="${deleteIcon}">
          <img src="${wbSunnyIcon}" id="theme-icon">
        </div>
      </header>
    `
  }
}

export default Header;
