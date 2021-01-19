import './main.scss';
import './mobile.scss';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';
const { getMenu } = require('./components/menu');

const PageCtrl = (() => {
  const addMenuItems = () => {
    const menu = getMenu();
    const UIMainContentDiv = document.querySelector('#content');
    UIMainContentDiv.prepend(menu);
  };

  return {
    init() {
      addMenuItems();
      const UIMenuNav = document.querySelector('nav');
      const UIMainContentDiv = document.querySelector('#content');

      const UIMenuLink = UIMenuNav.querySelector('a');
      console.log(UIMenuLink);
      UIMenuNav.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.tagName === 'A') {
          const linkText = e.target.innerText;
          switch (linkText) {
            case 'Home':
              homePage();
              console.log('Home page');
              break;
            case 'Menu':
              menuPage();
              console.log('Menu page');
              break;
            case 'Contact':
              contactPage();
              console.log('About');
              break;
            default:
              console.log('Other');
              break;
          }
        }
      });
    },
  };
})();

homePage();
PageCtrl.init();
