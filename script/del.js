// import { URLSearchParams } from url;

let queries = [{
    age: "8 месяцев",
    gender: 0,
    contacts: "john.doe@email.com",
    description: "Кучерявый черный кот с зелеными глазами, потерявшийся на улице."
},

{
    gender: 0,
    contacts: "+49 (30) 4567-8901",
    description: "Пушистый кролик с белым мехом и родинкой на носу"
},

{
    age: "только родился",
    gender: 1,
    size: "small",
    contacts: "+1 (555) 123-4567",
    description: "позвоните мне"
},

{
    age: "Думаю, около 2ух лет",
    gender: 0,
    size: "middle",
    description: "Прошу вас взять пса, который потерялся и ищет свой новый дом",
    address: " ул. Солнечная, д. 7, кв. 3"
},

{
    age: "6 лет",
    gender: 0,
    size: "large",
    contacts: "emily.brown@email.com",
    description: "Маленькая черепаха с исцарапанным панцирем и медлеными движениями. Пожалуйста, уделяйте внимание этой бездомной черепахе и обеспечьте ей новое пристанище."
},

{
    age: "не знаю",
    gender: 1,
    contacts: "+61234567890",
    description: "Пожалуйста, примите этого старого пуделя в свой дом, чтобы он не бродил по улицам."
},

{
    gender: 1,
    contacts: "alexander.wang@email.com",
    description: "Прошу вас взять этого бездомного пушистого кролика и дать ему тепло и заботу."
},

{
    age: "5 лет и 6 месяцев",
    gender: 1,
    size: "middle",
    description: "Прошу вас помочь этой бездомной кошке найти любящий и заботливый дом.",
    address: "пл. Озерная, д. 10, кв. 5"
}

];


async function pushVals() {
    for (const val in queries) {
        console.log(val);
        const urlWithParams = new URL("https://ash-swamp-polka.glitch.me/posts/push");
        for (const key in val) {
            urlWithParams.searchParams.set(key, String(val[key]));
        }
        response = await fetch(
            urlWithParams.toString(),
            // {
            //     method: "GET"
            // }
        );
        console.log(response.json());
    }
    // queries.forEach(val => {
    // });
}

pushVals();
