import { foodMenuItems } from './data/data';
import getCard from './components/card';
const menu = () => {
  const container = document.querySelector('#container');
  
  const menuSection = document.createElement('section');
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  menuSection.append(divContainer);

  const divRow = document.createElement('div');
  divRow.classList.add('row');
  divContainer.append(divRow);

  console.log(menuSection);
  let html = '';

  foodMenuItems.forEach((food) => {
    html += getCard(food);
  });

  divRow.innerHTML = html;
  container.append(menuSection);

  const h1 = document.createElement('h1');
  h1.classList.add('my-5', 'container');
  h1.textContent = 'Check Our Delicious Food';
  menuSection.prepend(h1);

  document.querySelector('.card-flip').classList.toggle('flip');
};

export default menu;
