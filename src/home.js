const { getHeader } = require('./components/header');
const { getFooter } = require('./components/footer');
const home = () => {
  const UIMainContentDiv = document.querySelector('#content');

  // Adding Header
  const header = getHeader();
  UIMainContentDiv.appendChild(header);

  // Add Footer
  const footer = getFooter();
  UIMainContentDiv.appendChild(footer);
};

export default home;
