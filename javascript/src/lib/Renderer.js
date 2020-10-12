class Renderer {

  static _createComponentContainer(component) {
    let count = 0;
    let elementId = `${component.name}-child-${count}`;

    const duplicateId = document.querySelector(`#${elementId}`);
    if (duplicateId) {
      count = +duplicateId.split('-')[2];
      count++;
    }

    const componentContainer = document.createElement(component.name);
    componentContainer.id = `${component.name}-child-${count}`;

    return componentContainer;
  }

  /**
   * Allows create element inside of other component.
   * @param component - instance of `Component`
   * @param containerId - id property of `Component`.
   * @returns component container innerHTML
   *
   * @example `
   *   // Component template
   *   ...
   *   <div>...</div>
   *   ${Renderer.render(new Component(), 'id-of-parent-component')}
   *   ...
   *
   *   // Renders next
   *   ...
   *   <div>...</div>
   *   <component id="component-child-0">...</component>
   *   ...
   * `
   * @see `src/lib/Component.js`
   */
  static render(component, containerId) {
    const componentContainer = Renderer._createComponentContainer(component);

    // Set id of component
    // to be able add a child components into it.
    component.id = componentContainer.id;

    // Before render
    component.beforeRender();

    // Render
    const container = document.getElementById(containerId)
    container.appendChild(componentContainer);
    componentContainer.innerHTML = component.render();

    // After render
    component.afterRender();

    return componentContainer.innerHTML;
  }
}

export default Renderer;
