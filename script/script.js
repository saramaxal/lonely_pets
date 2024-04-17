// получаем элемент по селектору. в данном случае получаем элемент animals-cards, чтобы с ним работать
let animalsCards = document.querySelector(".animals-cards");
console.log(animalsCards);
// animalsCards.style.backgroundColor = "#BB00BB"

console.log(animalsCards.style.backgroundColor);




console.log(animalsCards.innerHTML);


let bColor = "#363636";
let cardWidth = "1179px";
let cardHeight = "63";

// animalsCardsTest.style.cssText = `
//     background-color: ${bColor};
//     width: ${cardWidth};
//     height: ${cardHeight}px; 
// `
console.log("коты не захватят мир 'туман'");

let text = 'туман';

console.log(`коты не захватят мир "${text}"`);

animalsCards.innerHTML.HTML = ""

let arrDescription = [
	"красивая, милая, маленькая. исхудала. заберите!!! очень скулит, но болячек нет ",
	"красивая, милая, маленькая. исхудала. заберите!!!",
	" очень скулит, но болячек нет ",
	"красивая, милая, маленькая. исхудала. заберите!!! очень скулит, но болячек нет ",
	"красивая, милая, маленькая. исхудала. заберите!!!",
	" очень скулит, но болячек нет "
]

let arrDescriptionIndex = 0;
while (arrDescriptionIndex < arrDescription.length) {

	animalsCards.innerHTML += `<div class="animal-card">
								<div class="address">
									
								</div>
								<div class="description">
									${arrDescription[arrDescriptionIndex]}
								</div>
								<div class="animal-card__wrap-photo">
								<img class="img" src="../img/cat and cold-blooded.jpg">
								</div>
							</div>`
	arrDescriptionIndex += 1;
}

let modal = document.querySelector(".modal");
let body = document.querySelector("body");

function cardClick() {
	//удаляю класс из списка (массива) классов, чтобы сделать модалку видимой 
	modal.classList.remove("modal-hidden");
	body.classList.add("not-scroll"); //функция cardClick
}

//Получаем массив наших карточек
let animalCardArray = document.querySelectorAll(".animal-card");

let animalCardIndex = 0;

while (animalCardIndex < animalCardArray.length) {
	// Прикрепляем событию click функцию cardClick
	// (вызывать код, описанный внутри функции cardClick тогда, когда происходит клик)
	animalCardArray[animalCardIndex].addEventListener("click", cardClick);
	animalCardIndex += 1;
}

function crossClick() {
	//добавляю класс в список (массив) классов, чтобы сделать модалку невидимой 
	modal.classList.add("modal-hidden");
	body.classList.remove("not-scroll"); //функция crossClick
}

let cross = document.querySelector(".cross");

// Прикрепляем событию click функцию crossClick
cross.addEventListener("click", crossClick);
