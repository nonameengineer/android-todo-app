class Component {

  constructor () {
    this.name = this.constructor.name.toLowerCase();
  }

  /**
   * Running before calling `render` function
   */
  beforeRender() {}

  /**
   * Running after calling `render` function
   */
  afterRender() {}

  /**
   * Returns component template
   */
  render() {}
}

export default Component;
