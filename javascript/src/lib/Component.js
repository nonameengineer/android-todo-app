class Component {

  constructor () {
    this.name = this.constructor.name.toLowerCase();
  }

  /**
   * Dispatch render event to update view.
   */
  updateView() {
    window.dispatchEvent(new Event('render'));
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
  async render() {}
}

export default Component;
