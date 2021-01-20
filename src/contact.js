const contact = () => {
  const container = document.querySelector('#container');

   const contactSection = document.createElement('section');
   contactSection.classList.add('contact', 'p-5')

   const divRow = document.createElement('div');
   divRow.classList.add('row');
   contactSection.append(divRow);


   const html = `
          <div class=" pb-4 col-md-5 col-12">
            <h3 class="section-title mb-5 text-white">Get In Touch</h3>
            <form action="#" class="contact-form">
              <div class="form-group py-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control my-2 p-2 input"
                  placeholder="Name"
                />
              </div>
              <div class="form-group py-4">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="form-control my-2 p-2 input"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                class="btn-custom btn-block btn-custom-primary"
              >
                Submit
              </button>
            </form>
          </div>
   `;

   divRow.innerHTML = html;
   console.log(divRow);
  container.append(contactSection);


};

export default contact;
