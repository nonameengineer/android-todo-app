import './header.component.scss'
import deleteIcon from './../../assets/svg/delete-24px.svg'
import wbSunnyIcon from './../../assets/svg/wb_sunny-24px.svg'
import DARK_THEME_VAR from '../../services/theme.service'
import Component from '../../lib/Component'

class HeaderComponent extends Component {

  constructor () {
    super();
    this.darkTheme = window[DARK_THEME_VAR];
  }

  beforeRender() {
    this.darkTheme = false;
  }

  afterRender() {
    document.getElementById('title').addEventListener('click', () => {
      window.location.pathname = '/';
    })

    document.getElementById('theme-icon').addEventListener('click', () => {
      this.darkTheme = !this.darkTheme;

      const BODY_DARK_CLASS = 'dark'
      this.darkTheme
        ? document.body.classList.add(BODY_DARK_CLASS)
        : document.body.classList.remove(BODY_DARK_CLASS)
    })

    document.getElementById('trashcan-icon').addEventListener('click', () => {
      window.location.pathname = '/trashcan';
    })
  }

  render() {
    return `
      <header>
        <div class="title" id="title">Delat<span>'</span></div>
        <div class="buttons">
          <img src="${deleteIcon}" id="trashcan-icon">
          <img src="${wbSunnyIcon}" id="theme-icon">
        </div>
      </header>
    `
  }
}

export default HeaderComponent;
