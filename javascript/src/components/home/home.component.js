import Component from '../../lib/Component'
import './home.component.scss'
import renderComponent from '../../lib/render'
import SectionTitleComponent
  from '../../ui/section-title/section-title.component'

class Home extends Component {
  constructor () {
    super()
  }

  async render () {
    return `
      <h1>Home</h1>
      ${await renderComponent(this.ref, new SectionTitleComponent('Some title'))} 
    `
  }
}

export default Home
