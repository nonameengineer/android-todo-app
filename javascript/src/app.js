import './app.scss'
import HomeComponent from './components/home/home.component'
import Utils from './services/Utils'
import HeaderComponent from './components/header/header.component'
import Renderer from './lib/Renderer'
import TrashcanComponent from './components/trashcan/trashcan.component'
import TaskComponent from './components/task/task.component'
import NewTaskComponent from './components/new-task/new-task.component'
import DARK_THEME_VAR from './services/theme.service'

window[DARK_THEME_VAR] = false;



function renderLayout() {
  document.body.innerHTML = '';

  // Add Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.id = 'wrapper';
  document.body.appendChild(wrapper);

// Add Header
  const header = document.createElement('div');
  header.id = 'header'
  wrapper.appendChild(header);

// Add Content
  const content = document.createElement('div');
  content.className = 'content';
  content.id = 'content';
  header.after(content);

  Renderer.render(new HeaderComponent(), header.id);
}

// List of supported routes.
// Any url other than these routes will throw a 404 error
const routes = {
  '/new-task': NewTaskComponent,
  '/task': TaskComponent,
  '/trashcan': TrashcanComponent,
  '/': HomeComponent,
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  renderLayout();

  // Lazy load view element:
  const content = document.getElementById('content');

  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  console.log(window[DARK_THEME_VAR]);

  Renderer.render(new page(), 'content');
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

// Listen on render change
window.addEventListener('render', router);


