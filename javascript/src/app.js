import './app.scss'
import HomeComponent from './components/home/home.component'
import Utils from './services/Utils'
import HeaderComponent from './components/header/header.component'
import Renderer from './lib/Renderer'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': HomeComponent,
}

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

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view element:
  const content = document.getElementById('content');


  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  Renderer.render(new HomeComponent(), 'content');
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
