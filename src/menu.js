const menu = () => {
  const container = document.querySelector('#container');

  const html = `
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-lg-4">
        		<!-- Card Flip -->
				<div class="card-flip">
					<div class="flip">
						<div class="front">
							<!-- front content -->
							<div class="card">
							  <img class="card-img-top" src="./src/assets/specials-1.jpeg" alt="100%x180" style="height: 180px; width: 100%; display: block;" data-holder-rendered="true">
							  <div class="card-block">
							    <h4 class="card-title">Architecto ut </h4>
							    <p class="card-text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							    <a href="#" class="btn btn-primary">Go somewhere</a>
							  </div>
							</div>
						</div>
						<div class="back">
							<!-- back content -->
							<div class="card">
							   <div class="card-block">
							    <h4 class="card-title">Architecto ut </h4>
							    <p class="card-text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							  </div>
							  <img src="./src/assets/specials-1.jpeg" alt="Image [100%x180]" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
							  <div class="card-block">
                  <a href="#" class="card-link">Order <span>$5</span></a>
							    
							  </div>
							</div>
						</div>
					</div>
				</div>
        		<!-- End Card Flip -->
			</div>
		</div>
	</div>
  `;

  const menuSection = document.createElement('section');
  menuSection.innerHTML = html;
  container.append(menuSection);

  const h1 = document.createElement('h1');
  h1.classList.add('my-5', 'container')
  h1.textContent = 'Check Our Delicious Food';
  menuSection.prepend(h1);

  document.querySelector('.card-flip').classList.toggle('flip');
};

export default menu;
