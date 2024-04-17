// Работа с формой
let smile_array = ['👾', '👽', '👻', '🤖', '🐸', '🐻‍❄️'];
console.log(smile_array);

let contacts_input = document.querySelector(".contacts input");

let save = contacts_input.value;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// функция, которая будет вызываться при изменении текста в инпуте
function changeContactsInput() {
    console.log(save);

    // ищем новые символы только если количество символов увеличилось
    if (save.length < contacts_input.value.length) {
        let indexSave = 0;

        while (indexSave < save.length) {
            if (save[indexSave] == contacts_input.value[indexSave]) {
                indexSave += 1;
            }
            else break; // волшебное слово для выхода из цикла 
        }

        // Если боги рандома сказали нам да, то кто мы такие, чтобы препятствовать им?
        if (getRandomInt(3) == 2) {

            // Получаем строку с смайлом вместо символа
            contacts_input.value = contacts_input.value.slice(0, indexSave) +
                smile_array[getRandomInt(smile_array.length)] +
                contacts_input.value.slice(indexSave + 1, contacts_input.value.length);

            // Ставим каретку после смайла 
            contacts_input.setSelectionRange(indexSave + 1, indexSave + 1);
        }

        console.log("увеличилось")
    }
    save = contacts_input.value;
    console.log(save);
}

// функция, которая будет вызываться при потери фокуса с инпута
function changeContactsBlur() {
    let index = 0;
    let local_smile_array = [];

    // while (index < smile_array.length) {
    //     if (local_smile_array.includes())
    //     local_smile_array[index] = local_smile_array[index][0];
    // }



    // let count_smile = contacts_input.value.match(new RegExp("\\uD83D", "g")).length;

    // let contacts_input_text = contacts_input.value;



    console.log(count_smile);

    // while (index < contacts_input.value.length) {

    //     // если символ является смайлом
    //     if (smile_array.includes(contacts_input.value[index])) {
    //         count_smile += 1;
    //     }
    //     console.log([contacts_input_text[index]]);
    //     console.log(`index + ${index}`);
    //     index += 1;
    // }
    // '\uDC38' in ['\uD83D\uDC38', '\uD83D\uDC38', '\uD83D\uDC38', '\uD83D\uDC38',]
    // console.log(count_smile);
}

// при событии change - измении текста вызываем функцию changeContactsInput
contacts_input.addEventListener("input", changeContactsInput);

// при событии потери фокуса (onblur) инпута вызываем функцию changeContactsBlur
contacts_input.addEventListener("blur", changeContactsBlur);

// let indexSave = 0;

// конкатенацию попробовать
console.log(["🤖"[0]]); //uD83E
console.log(["👽"[0]]); //uD83D
console.log(["👻"[0]]); //uD83D
console.log(["👾"[0]]); //uD83D
console.log(["🐸"[0]]); //uD83D
console.log(["🐻‍❄️"[0]]); //uD83D

// console.log(["🤖"[0]]);
console.log("👽"[0] + "👻"[1]);
console.log("👻"[0] + "👽"[1]);
// console.log(["👻"[0]]);
// console.log(["👾"[0]]);
// console.log(["🐸"[0]]);
// console.log(["🐻‍❄️"[0]]);
