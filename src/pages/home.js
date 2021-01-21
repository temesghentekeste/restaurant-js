import menuPage from './menu';

const setCurrentLink = require('../utilities/current_link');

const getHeader = require('../components/header');

const home = () => {
  const container = document.querySelector('#container');

  // Adding Header
  const header = getHeader.default();
  container.append(header);

  const UIShowcaseOrderBtn = document.querySelector('.btn-order');
  UIShowcaseOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const container = document.querySelector('#container');
    container.innerHTML = '';
    setCurrentLink.default('menu');
    menuPage();
  });
};

export default home;
