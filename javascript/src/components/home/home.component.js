import Component from '../../lib/Component'
import './home.component.scss'
import Renderer from '../../lib/Renderer'
import SectionTitleComponent
  from '../../ui/section-title/section-title.component'

class HomeComponent extends Component {

  render () {
    return `
      <h1>Home</h1>
      ${Renderer.render(new SectionTitleComponent('Some title'), this.id)}
     `
  }
}

export default HomeComponent
