import './header.component.scss'
import deleteIcon from './../../assets/svg/delete-24px.svg'
import deleteDarkIcon from './../../assets/svg/delete-dark-24px.svg'
import wbSunnyIcon from './../../assets/svg/wb_sunny-24px.svg'
import wbSunnyDarkIcon from './../../assets/svg/wb_sunny-dark-24px.svg'
import DARK_THEME_VAR from '../../services/theme.service'
import Component from '../../lib/Component'

class HeaderComponent extends Component {

  constructor () {
    super();
  }

  afterRender() {
    document.getElementById('title').addEventListener('click', () => {
      window.location.pathname = '/';
    })

    document.getElementById('theme-icon').addEventListener('click', () => {
      window[DARK_THEME_VAR] = !window[DARK_THEME_VAR];

      const BODY_DARK_CLASS = 'dark'
      window[DARK_THEME_VAR]
        ? document.body.classList.add(BODY_DARK_CLASS)
        : document.body.classList.remove(BODY_DARK_CLASS)

      this.updateView();
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
          <img src="${window[DARK_THEME_VAR] ? deleteDarkIcon : deleteIcon}" id="trashcan-icon">
          <img src="${window[DARK_THEME_VAR] ? wbSunnyDarkIcon : wbSunnyIcon}" id="theme-icon">
        </div>
      </header>
    `
  }
}

export default HeaderComponent;
