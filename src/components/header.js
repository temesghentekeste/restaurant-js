const { getButton } = require('./button');
const menuPage = require('../menu');

export const getHeader = () => {
  const UIHeader = document.createElement('header');
  UIHeader.id = 'showcase';
  const UIContainerDiv = document.createElement('div');
  UIContainerDiv.classList.add('container');

  const UIShowcaseContainerDiv = document.createElement('div');
  UIShowcaseContainerDiv.classList.add('showcase-container');

  const UIShowcaseContentDiv = document.createElement('div');
  UIShowcaseContentDiv.classList.add('showcase-content');

  const UIShowcaseHeading = document.createElement('h1');
  UIShowcaseHeading.textContent = 'Eat & Drink Restaurant';
  UIShowcaseContentDiv.appendChild(UIShowcaseHeading);

  const UIShowcasePara = document.createElement('p');
  UIShowcasePara.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Possimus rerum officia quibusdam mollitia deserunt animi soluta
laudantium. Quam sapiente a dolorum magnam necessitatibus quis
tempore facere totam. Dolor, sequi distinctio!`;
  UIShowcaseContentDiv.appendChild(UIShowcasePara);

  const UIShowcaseOrderBtn = getButton('menu', ['btn-order','btn', 'btn-primary'], 'Order');
  UIShowcaseContentDiv.appendChild(UIShowcaseOrderBtn);

  UIShowcaseContainerDiv.appendChild(UIShowcaseContentDiv);
  UIContainerDiv.appendChild(UIShowcaseContainerDiv);
  UIHeader.append(UIContainerDiv);

  return UIHeader;
};
