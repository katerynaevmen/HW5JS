// Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". 
// Використайте switch

let drinks = prompt("Оберіть напій Кава, Чай або Сік").toLowerCase();
let message = "";
switch (drinks) {
    case "кава":
        drinks = 'Кава';
        alert(message = "Ви обрали каву");
        break;
    case "чай":
        drinks = 'Чай';
        alert(message = "Ви обрали чай");
        break;
    case "сік":
        drinks = 'Сік';
        alert(message = "Ви обрали сік");
        break;
    default:
        alert(message = "Ви не обрали нічого з вище вказаного ");
        break;
}
console.log(message);

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. 
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let day = prompt("Введіть день тижня").toLowerCase();
let mes = "";
if (day === "понеділок") {
    mes = "Будній день";
} else if (day === "вівторок") {
    mes = "Будній день";
} else if (day === "середа") {
    mes = "Будній день";
} else if (day === "четвер") {
    mes = "Будній день";
} else if (day === "п'ятниця") {
    mes = "Будній день";
} else if (day === "суббота") {
    mes = "Вихідний день";
} else if (day === "неділя") {
    mes = "Вихідний день";
} else if (day === null) {
    mes = "Ви не ввели день неділі";
} else {
    mes = "Ви не ввели день неділі";
}
// 2 спосіб

// switch (day) {
//     case "понеділок":
//         day = 'Понеділок';
//         mes = "Будній день";
//         break;
//     case "вівторок":
//         day = 'Вівторок';
//         mes = "Будній день";
//         break;
//     case "середа":
//         day = 'Середа';
//         mes = "Будній день";
//         break;
//     case "четвер":
//         day = 'Четвер';
//         mes = "Будній день";
//         break;
//     case "п'ятниця":
//         day = "П'ятниця";
//         mes = "Будній день";
//         break;
//     case "суббота":
//         day = 'Суббота';
//         mes = "Вихідний день";
//         break;
//     case "неділя":
//         day = 'Неділя';
//         mes = "Вихідний день";
//         break;
//     default:
//         mes = "Ви не ввели день неділі";
// break;
// }
console.log(mes);

// Створіть змінну для зберігання номера місяця. 
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let month = prompt("Введіть номер місяця");
let mess = "";
switch (month) {
    case "1":
        mess = "зима";
        break;
    case "2":
        mess = "зима";
        break;
    case "3":
        mess = "весна";
        break;  
    case "4":
        mess = "весна";
        break;
    case "5":
        mess = "весна";
        break;
    case "6":
        mess = "літо";
        break;
    case "7":
        mess = "літо";
        break;   
    case "8":
        mess = "літо";
        break;   
    case "9":
        mess = "осінь";
        break; 
    case "10":
        mess = "осінь";
        break;  
    case "11":
        mess = "осінь";
        break;  
    case "12":
        mess = "зима";
        break;     
    default:
        mess = "Ви не ввели правильний номер місяця"
        break;            
}
console.log(mess);

// Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: 
// якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let colour = prompt("Оберіть колір зелений, червоний, жовтий").toLowerCase();
let info = "";
switch (colour) {
    case "червоний":
         info = "стоп";
         break;  
    case "зелений":
         info = "йти";
        break;
    case "жовтий":
         info = "чекати";
        break; 
    default:
        info = "Ви не ввели потрібний колір";
        break;
}
console.log(info);

// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. 
//  У випадку ділення на нуль — виведіть попередження.

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let operator = prompt("Оберіть / * + -");
let result = Number("");
if (operator === "/") {
    if (b === 0) {
     console.log("На нуль ділити не можна");
    } else {
        result = a / b;
        console.log(result);
    }
} else if (operator === "*") {
    result = a * b;
    console.log(result);
} else if (operator === "+") {
    result = a + b;
    console.log(result);
} else if (operator === "-") {
    result = a - b;
    console.log(result);
}  else {
    console.log("Ви не ввели потрібний оператор");
}
