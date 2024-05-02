import { API_URL } from "./loadData.js";
import { noticeProcessSubmit, noticeSuccessSubmit } from "./notice.js";

const formRemoval = document.querySelector(".form-removal");
const buttonRemoval = document.querySelector(".button-removal");

// buttonRemoval.addEventListener("click", (event) => {
// 	event.preventDefault();

//     try {
//         const formData = new FormData(formRemoval);
		
//         fetch(`${API_URL}/posts/pop`, {
//             method: 'POST',
//             body: formData
//         })
// 		.then(res => res.json())
// 		.then(console.log)
// 		.catch(console.error);
//     } catch (error) {
//         console.error(error);
//     }
// });

formRemoval.addEventListener('submit', async (event) => {
	event.preventDefault();
	noticeProcessSubmit();
    try {
        // const formData = new FormData(formRemoval);
		// formData.forEach((val, key, par) => console.log(key + ": " + val));
		// console.log(formData.values());
		const url = new URL(`${API_URL}/posts/pop`);
		url.searchParams.set("id", formRemoval["id"].value);
        const response = await fetch(url, {
            method: 'POST'
            // body: formData
        })

        if (response.ok) {
            // employerError.textContent = "";
            // window.location.href = 'index.html';

        }
        // alert(response.ok);
        console.log(await response.json());
		formRemoval.reset();
		noticeSuccessSubmit();
    } catch (error) {
        console.error(error);
    }
});

// const url = new URL(db_url + "/posts/show");
// url.searchParams.set("start", start);
// url.searchParams.set("count", count);
// return fetch(url, { method: "POST" })
// 	.then(res => res.json())
// 	.then(recreateData);