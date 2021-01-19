console.log('Starting...');

const contentDiv = document.querySelector('#content');
console.log(contentDiv);

const html = `
  <h1>Hello there</h1>
`

contentDiv.innerHTML = html;
