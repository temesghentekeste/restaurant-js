const { getHeader } = require('./components/header');
const contact = () => {
  const container = document.querySelector('#container');

  // Adding Header
  const header = getHeader();
  container.append(header);

};

export default contact;
