const { menuItems } = require('../data/data');

export const getMenu = () => {
  const menu = document.createElement('nav');
  const UIUlMenu = document.createElement('ul');

  menuItems.forEach((menu) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = menu.charAt(0).toUpperCase() + menu.slice(1);
    link.setAttribute('href', '');
    li.appendChild(link);
    UIUlMenu.appendChild(li);
  });

  menu.id = 'main-nav';
  menu.appendChild(UIUlMenu);

  return menu;
};
