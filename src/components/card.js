const getCard = ({name, description, img, price}) => {
   return `
			<div class="col-sm-6 col-lg-4">
        		<!-- Card Flip -->
				<div class="card-flip">
					<div class="flip">
						<div class="front">
							<!-- front content -->
							<div class="card">
							  <img class="card-img-top" src="${img}" alt="100%x180" style="height: 180px; width: 100%; display: block;" data-holder-rendered="true">
							  <div class="card-block">
							    <h4 class="card-title">${name}</h4>
							    <p class="card-text">${description}</p>
							  </div>
							</div>
						</div>
						<div class="back">
							<!-- back content -->
							<div class="card">
							   <div class="card-block">
							    <h4 class="card-title">${name}</h4>
							    <p class="card-text">${description}</p>
							  </div>
							  <img src="${img}" alt="Image [100%x180]" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
							  <div class="card-block">
                  <a href="#" class="card-link">Order <span>$${price}</span></a>
							  </div>
							</div>
						</div>
					</div>
				</div>
        		<!-- End Card Flip -->
			</div>
  `;
}

export default getCard;