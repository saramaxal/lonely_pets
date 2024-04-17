const db_url = "https://ash-swamp-polka.glitch.me/posts"


function recreateData(data) {
	let animalsCards = document.querySelector(".animals-cards");
	if (animalsCards) {
		let htmlContent = "";
		for (let i = 0; i < data.posts.length; i++) {
			const post = data.posts[i];
			htmlContent += `
			<div class="animal-card">
				<div class="address">
					${post.address}
				</div>
				<div class="description">
					${post.description}
				</div>
				<div class="animal-card__wrap-photo">
				<img class="img" src="../img/cat and cold-blooded.jpg">
				</div>
			</div>`;
		}
		animalsCards.innerHTML = htmlContent;
	}
}

async function loadData(start, count) {
	const url = new URL(db_url + "/show");
	url.searchParams.set("start", start);
	url.searchParams.set("count", count);
	fetch(url, { method: "POST" })
		.then(res => res.json())
		.then(recreateData);
}