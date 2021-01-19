const { getMenu } = require('./components/menu');
const { getHeader } = require('./components/header');
const { getFooter } = require('./components/footer');
const home = () => {

  const UIMainContentDiv = document.querySelector('#content');

  // Adding menu
  const menu = getMenu();
  UIMainContentDiv.appendChild(menu);

  // Adding Header
  const header = getHeader();
  UIMainContentDiv.appendChild(header);

  // Add Footer
  const footer = getFooter();
  UIMainContentDiv.appendChild(footer);

};

export default home;
