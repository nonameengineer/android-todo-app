const renderComponent = async (container, comp) => {
  const compChild = document.createElement('div');
  comp.ref = compChild;

  console.log(comp);

  await comp.beforeRender();

  compChild.innerHTML = await comp.render(compChild);
  container.appendChild(compChild)

  await comp.afterRender();
}

export default renderComponent;
