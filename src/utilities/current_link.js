const setCurrentLink = (linkText = 'home') => {
  const links = document.querySelectorAll('.menu-link');
  links.forEach((link) => {
    link.classList.remove('current');
  });

  links.forEach((link) => {
    if (link.textContent.toLowerCase() === linkText.toLowerCase()) {
      link.classList.add('current');
      localStorage.setItem('currentRestaurantMenu', linkText);
    }
  });
};


export default setCurrentLink;