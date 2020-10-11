import Component from '../../lib/Component'

class SectionTitleComponent extends Component {

  constructor(title) {
    super();
    this.title = title;
  }

  async render() {
    return `
      <div class="section-title">${this.title}</div>
    `
  }
}

export default SectionTitleComponent;
