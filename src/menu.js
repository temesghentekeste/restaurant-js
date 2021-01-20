const menu = () => {
  const { getHeader } = require('./components/header');

  const container = document.querySelector('#container');


  // Adding Header
  const header = getHeader();
  container.append(header);



};

export default menu;
