class Component {

  /**
   * Running before calling `render` function
   */
  async beforeRender() {}

  /**
   * Running after calling `render` function
   */
  async afterRender() {}

  /**
   * Returns component template
   */
  async render() {}
}

export default Component;
