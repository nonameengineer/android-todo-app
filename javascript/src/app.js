import './app.scss'
import Home from './components/home/home.component'
import Utils from './services/Utils'
import renderComponent from './lib/render'
import Header from './components/header/header.component'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Home,
}

// Add Wrapper
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

// Add Header
const header = document.createElement('div');
wrapper.appendChild(header);

// Add Content
const content = document.createElement('div');
content.className = 'content';
content.id = 'content';
header.after(content);

renderComponent(header, new Header());

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById('header_container');
  const content = document.getElementById('content');
  const footer = null || document.getElementById('footer_container');

  console.log(document);



  // Render the Header and footer of the page
/*  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Bottombar.render();
  await Bottombar.after_render();*/


  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  renderComponent(content, new page());
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
