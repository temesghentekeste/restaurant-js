import './main.scss';
import './mobile.scss';
import homePage from './home';
import menuPage from './menu';

const PageCtrl = (() => {
  return {
    init() {
      const UIMenuNav = document.querySelector('nav');
      const UIMainContentDiv = document.querySelector('#content');

      const UIMenuLink = UIMenuNav.querySelector('a');
      console.log(UIMenuLink);
      UIMenuNav.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.tagName === 'A') {
          UIMainContentDiv.innerHTML = '';
          const linkText = e.target.innerText;
          switch (linkText) {
            case 'Home':
              homePage();
              console.log('Home page');
              break;
            case 'Menu':
              UIMainContentDiv.innerHTML = '';
              menuPage();
              console.log('Menu page');
              break;
            case 'About':
              UIMainContentDiv.innerHTML = '';
              menuPage();
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