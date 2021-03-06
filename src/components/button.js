const getButton = (link = '', classArr, linkText) => {
  const linkElement = document.createElement('a');
  classArr.forEach((cls) => {
    linkElement.classList.add(cls);
  });
  linkElement.textContent = linkText;
  linkElement.setAttribute('href', link);

  return linkElement;
};

export default getButton;
