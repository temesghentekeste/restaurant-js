import './main.scss';
import './mobile.scss';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const { getMenu } = require('./components/menu');
const { getFooter } = require('./components/footer');

const PageCtrl = (() => {
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';

    contentDiv.append(container);
  };
  const addMenuItems = () => {
    const menu = getMenu();
    const UIMainContentDiv = document.querySelector('#content');
    UIMainContentDiv.prepend(menu);
  };

  const addFooter = () => {
    const footer = getFooter();
    const UIMainContentDiv = document.querySelector('#content');
    UIMainContentDiv.append(footer);
  };

  const setCurrentLink = linkText => {
    let links = document.querySelectorAll('.menu-link');
    links = Array.from(links);
    links.forEach(link => {
      link.classList.remove('current');
    });

    links.forEach((link) => {
      if (link.textContent.toLowerCase() === linkText.toLowerCase()) {
        link.classList.add('current');
      }
    });
  };

  return {
    init() {
      addMenuItems();
      createContainer();
      setCurrentLink('home');
      homePage();
      const UIMenuNav = document.querySelector('nav');

      const container = document.querySelector('#container');
      UIMenuNav.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.tagName === 'A') {
          const linkText = e.target.innerText;
          container.innerHTML = '';
          switch (linkText) {
            case 'Home':
              homePage();
              setCurrentLink('home');
              break;
            case 'Menu':
              menuPage();
              setCurrentLink('menu');
              break;
            case 'Contact':
              contactPage();
              setCurrentLink('contact');
              break;
            default:
              break;
          }
        }
      });
      addFooter();
    },

  };
})();

PageCtrl.init();
