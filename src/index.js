import './main.scss';
import './mobile.scss';
import homePage from './pages/home';
import menuPage from './pages/menu';
import contactPage from './pages/contact';

const getMenu = require('./components/menu');
const getFooter = require('./components/footer');
const setCurrentLink = require('./utilities/current_link');

const PageCtrl = (() => {
  const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';

    contentDiv.append(container);
  };
  const addMenuItems = () => {
    const menu = getMenu.default();
    const UIMainContentDiv = document.querySelector('#content');
    UIMainContentDiv.prepend(menu);
  };

  const addFooter = () => {
    const footer = getFooter.default();
    const UIMainContentDiv = document.querySelector('#content');
    UIMainContentDiv.append(footer);
  };

  const getCurrentRestaurantMenu = () => {
    const currentRestaurantMenu = localStorage.getItem('currentRestaurantMenu')
      ? localStorage.getItem('currentRestaurantMenu')
      : 'home';
    return currentRestaurantMenu;
  };

  return {
    init() {
      addMenuItems();
      createContainer();
      const currentStoredMenu = getCurrentRestaurantMenu();
      setCurrentLink.default(currentStoredMenu);
      if (currentStoredMenu === 'menu') {
        menuPage();
      } else if (currentStoredMenu === 'contact') {
        contactPage();
      } else {
        setCurrentLink.default('home');
        homePage();
      }

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
              setCurrentLink.default('home');
              break;
            case 'Menu':
              menuPage();
              setCurrentLink.default('menu');
              break;
            case 'Contact':
              contactPage();
              setCurrentLink.default('contact');
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
