class Renderer {

  static _createComponentContainer(component) {
    let count = 0;
    const elements = document.getElementsByTagName(component.name);
    if (elements) {
      count = elements.length;
    }
    let elementId = `${component.name}-child-${count}`;

    const duplicateElement = document.querySelector(`#${elementId}`);
    if (duplicateElement) {
      count = +(duplicateElement.id.split('-')[2]);
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

    return componentContainer.outerHTML;
  }
}

export default Renderer;
