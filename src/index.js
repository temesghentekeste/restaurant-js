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

  return {
    init() {
      addMenuItems();
      createContainer();
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
              break;
            case 'Menu':
              menuPage();
              break;
            case 'Contact':
              contactPage();
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
