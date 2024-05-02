export const noticeProcessSubmit = function () {
	document.querySelector(".wrap-notice").innerHTML = `<div class="notice dispatch unselectable">
															отправка ...
														</div>`;
}

export const noticeSuccessSubmit = function () {
	document.querySelector(".wrap-notice").innerHTML = `<div class="notice submit_success unselectable">
															отправлено!
														</div>`;
}