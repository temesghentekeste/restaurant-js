export const getFooter = () => {
  const html = `
   
        <div class="container footer-container">
          <div>
            <h3>Delivering Dishes</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              deserunt assumenda enim non? Ratione ipsum voluptates fuga eos
              earum vitae.
            </p>
          </div>
          <div>
            <h3>Email Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form>
              <input type="email" placeholder="Enter Email..." />
              <input type="submit" value="Subscribe" class="btn btn-primary" />
            </form>
          </div>
          <div>
            <h3>Site Links</h3>
            <ul class="list">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2>Join Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
            <a href="#" class="btn btn-secondary">Join Now</a>
          </div>
          <div>
            <p>Copyright &copy; 2021, All Rights Reserved</p>
          </div>
        </div>
  `;

  const UIMainFooter = document.createElement('footer');
  UIMainFooter.id = 'main-footer';
  UIMainFooter.classList.add('py-2');
  UIMainFooter.innerHTML = html;
  return UIMainFooter;
};
