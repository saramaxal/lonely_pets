export const EnableModal = setAnimalCardsEvents;
export const SetCrossEvents = setCrossEvents;

const modal = document.querySelector(".modal");
const body = document.querySelector("body");

let modalWrapModal = document.querySelector(".modal__wrap-modal");

const dataFormat = {
	"date": val => val.replace(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/, "$3.$2.$1 $4:$5"),
	"gender": val => val ? "мужской" : "женский",
	"size": val => { return val ? { large: "большой", middle: "средний", small: "маленький" }[val] : "" },
}

function getModalHtml(id, date, variety, age, gender, size, contacts, address, description, imgSrc) {
	return `
		<header class="header-modal">
			<span class="type-animal">${variety}</span>
			<div class="information-modal__wrap-id">
				<span class="information-modal__header">№ объявления</span>
				<span class="information-modal__data id-modal-data">${id}</span>
			</div>
			<div class="cross">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="8.7998" y="28.7998" width="28" height="3.11111" rx="1.55556" transform="rotate(-45 8.7998 28.7998)" fill="#939393"/>
					<rect x="28.5986" y="30.9995" width="28" height="3.11111" rx="1.55556" transform="rotate(-135 28.5986 30.9995)" fill="#939393"/>
				</svg>
			</div>
		</header>
	
		<div class="modal-main">
			<div class="photo-animal-modal">
				<img src="${imgSrc}">
			</div>
	
			<div class="information-modal">
				<div class="information-modal__wrap-age ${age == '' ? 'hidden-for-screen-reader' : ''}">
					<p class="information-modal__header">возраст</p>
					<p class="information-modal__data">${age}</p>
				</div>
	
				<div class="information-modal__wrap-gender ${gender == '' ? 'hidden-for-screen-reader' : ''}">
					<p class="information-modal__header">пол</p>
					<p class="information-modal__data">${gender}</p>
				</div>
	
				<div class="information-modal__wrap-size ${size == '' ? 'hidden-for-screen-reader' : ''}">
					<p class="information-modal__header">размер</p>
					<p class="information-modal__data">${size}</p>
				</div>
	
				<div class="information-modal__wrap-date">
					<p class="information-modal__header">размещено</p>
					<p class="information-modal__data">${date}</p>
				</div>
	
				<div class="information-modal__wrap-contacts ${contacts == '' ? 'hidden-for-screen-reader' : ''}">
					<p class="information-modal__header">контакты</p>
					<p class="information-modal__data">${contacts}</p>
				</div>
	
				<div class="information-modal__wrap-address ${address == '' ? 'hidden-for-screen-reader' : ''}">
					<p class="information-modal__header">адрес</p>
					<p class="information-modal__data">${address}</p>
				</div>
			</div>

		</div>

		<p class="description-modal-data description-modal">${description}</p>
	`
}

function cardClick() {
	const cardData = this.querySelector("form");
	const img = this.querySelector(".animal-card__photo");

	console.log("size: " + cardData.size.value);
	let html = getModalHtml(
		cardData.id.value,
		dataFormat.date(cardData.date.value),
		cardData.variety.value,
		cardData.age.value,
		dataFormat.gender(cardData.gender.value),
		dataFormat.size(cardData.size.value),
		cardData.contacts.value,
		cardData.address.value,
		cardData.description.value,
		img.src
	);

	modalWrapModal.innerHTML = html;
	setCrossEvents();

	modal.classList.remove("hidden-for-screen-reader");
	body.classList.add("not-scroll");
}

function crossClick() {
	modal.classList.add("hidden-for-screen-reader");
	body.classList.remove("not-scroll");
}

function setAnimalCardsEvents() {
	const animalCardArray = document.querySelectorAll(".animal-card");
	let animalCardIndex = 0;
	while (animalCardIndex < animalCardArray.length) {
		animalCardArray[animalCardIndex].addEventListener("click", cardClick);
		animalCardIndex += 1;
	}
}

function setCrossEvents() {
	let cross = document.querySelector(".cross");
	cross.addEventListener("click", crossClick);
}


