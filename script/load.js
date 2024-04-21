let photoInput = document.querySelector(".photo-input");
photoInput.addEventListener("change", changePhoto);

function changePhoto() {
	console.log(this.value);
}