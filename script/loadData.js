export const LoadData = loadData;

const db_url = "https://lonely-pets.glitch.me";
// const db_url = "https://broadleaf-humorous-melon.glitch.me";

//"https://ash-swamp-polka.glitch.me/posts"

export const API_URL = db_url;

function ecranize(str) {
	if (str === null || str === undefined)
		return "";
	return String(str).replaceAll('"', '\\"');
}

function recreateData(data) {
	console.log(data);
	let animalsCards = document.querySelector(".animals-cards");
	const columns = [
		"id",
		"status",
		"date",
		"variety",
		"age",
		"image",
		"gender",
		"size",
		"contacts",
		"address",
		"description",
	];
	if (animalsCards) {
		let htmlContent = "";
		for (let i = 0; i < data.posts.length; i++) {
			const post = data.posts[i];
			let dataInputs = "";
			for (const col of columns) {
				dataInputs += `
				<input name="${col}" value="${ecranize(post[col])}">`;
			}

			htmlContent += `
			<div class="animal-card">
				<div></div>
				<form class="hidden-for-screen-reader">${dataInputs}
				</form>
				<div class="animal-card__description unselectable">
					${post.description}
				</div>
				<div class="animal-card__wrap-photo">
					<img class="animal-card__photo" src="${db_url}/${post.image}">
				</div>
			</div>`;
		}
		animalsCards.innerHTML = htmlContent;
	}
}

function loadData(start, count) {
	const url = new URL(db_url + "/posts/show");
	url.searchParams.set("start", start);
	url.searchParams.set("count", count);
	return fetch(url, { method: "POST" })
		.then(res => res.json())
		.then(recreateData);
}
