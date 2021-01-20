const { getHeader } = require('./components/header');
const home = () => {
  const container = document.querySelector('#container');

  // Adding Header
  const header = getHeader();
  container.append(header);

  // Add Footer
};

export default home;
