// import { URLSearchParams } from url;

let queries = [{
	variety: "кот",
	age: "8 месяцев",
	gender: 0,
	contacts: "john.doe@email.com",
	description: "Кучерявый черный кот с зелеными глазами, потерявшийся на улице."
},

{
	variety: "кролик",
	gender: 0,
	contacts: "+49 (30) 4567-8901",
	description: "Пушистый кролик с белым мехом и родинкой на носу"
},

{
	variety: "собака",
	age: "только родился",
	gender: 1,
	size: "small",
	contacts: "+1 (555) 123-4567",
	description: "позвоните мне"
},

{
	variety: "собака",
	age: "Думаю, около 2ух лет",
	gender: 0,
	size: "middle",
	description: "Прошу вас взять пса, который потерялся и ищет свой новый дом",
	address: "ул. Солнечная, д. 7, кв. 3"
},

{
	variety: "черепаха",
	age: "6 лет",
	gender: 0,
	size: "large",
	contacts: "emily.brown@email.com",
	description: "Маленькая черепаха с исцарапанным панцирем и медлеными движениями. Пожалуйста, уделяйте внимание этой бездомной черепахе и обеспечьте ей новое пристанище."
},

{
	variety: "собака",
	age: "не знаю",
	gender: 1,
	contacts: "+61234567890",
	description: "Пожалуйста, примите этого старого пуделя в свой дом, чтобы он не бродил по улицам."
},

{
	variety: "кролик",
	gender: 1,
	contacts: "alexander.wang@email.com",
	description: "Прошу вас взять этого бездомного пушистого кролика и дать ему тепло и заботу."
},

{
	variety: "кот",
	age: "5 лет и 6 месяцев",
	gender: 1,
	size: "middle",
	description: "Прошу вас помочь этой бездомной кошке найти любящий и заботливый дом.",
	address: "пл. Озерная, д. 10, кв. 5"
}

];


async function pushVals() {
	for (const val of queries) {
		console.log(val);
		console.log(JSON.stringify(val));
		const urlWithParams = new URL("https://lonely-pets.glitch.me/posts/push");
		for (const [key, value] of Object.entries(val)) {
			urlWithParams.searchParams.set(key, value);
		}
		fetch("https://lonely-pets.glitch.me/posts/push", { //urlWithParams.toString()
			method: "PUT",
			body: JSON.stringify(val)
		})
			.then(res => console.log(res.json()))
			.catch(console.error);
		return;
	}
	// queries.forEach(val => {
	// });
}

// pushVals();
