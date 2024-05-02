function fantomCard() {
	let animalsCards = document.querySelector(".animals-cards");
	let htmlContent = "";
	animalsCards.innerHTML = "";

	for (let i = 0; i < 3; i++) {
		htmlContent += `
		<div class="animal-card">
			<div></div>
			<div class="animal-card__description unselectable">
				загрузка...
			</div>
			<div class="animal-card__wrap-photo load">
			</div>
		</div>`;
	}
	animalsCards.innerHTML = htmlContent;
}