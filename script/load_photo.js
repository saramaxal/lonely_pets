const fileInput = document.querySelector(".photo-input");
const imagePreview = document.querySelector(".photo-preview");
const fileButton = document.querySelector(".photo__wrap-photo");

fileInput.addEventListener("change", (event) => {
	let target = event.target;

	if (FileReader && target.files && target.files.length) {
		let reader = new FileReader();
        reader.onload = function () {
            imagePreview.src = reader.result;
        }
        reader.readAsDataURL(target.files[0]);
	}
});

fileButton.addEventListener("click", (event) => {
	fileInput.click();
});