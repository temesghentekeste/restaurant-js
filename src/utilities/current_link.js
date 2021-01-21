const setCurrentLink = (linkText = 'home') => {
  let links = document.querySelectorAll('.menu-link');
  links = Array.from(links);
  links.forEach((link) => {
    link.classList.remove('current');
  });

  links.forEach((link) => {
    if (link.textContent.toLowerCase() === linkText.toLowerCase()) {
      link.classList.add('current');
    }
  });
};


export default setCurrentLink;