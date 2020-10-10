import './header.component.scss';
import deleteIcon from './../../assets/svg/delete-24px.svg';
import wbSunnyIcon from './../../assets/svg/wb_sunny-24px.svg';

let Header = {
  render: async () => `
    <header>
      <div class="title">Delat<span>'</span></div>
      <div class="buttons">
        <img src="${deleteIcon}">
        <img src="${wbSunnyIcon}">
      </div>
    </header>
  `,
  after_render: async () => {
  },

}

export default Header
