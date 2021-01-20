import menuPage from './menu';

const { getHeader } = require('./components/header');

const home = () => {
  const container = document.querySelector('#container');

  // Adding Header
  const header = getHeader();
  container.append(header);

  const UIShowcaseOrderBtn = document.querySelector('.btn-order');
  UIShowcaseOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const container = document.querySelector('#container');
    container.innerHTML = '';
    menuPage();
  });
};

export default home;
