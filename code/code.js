/*
Task 1
*/
function getDayOfWeek(day) {
    return ["", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"][day] || "Некоректне число. Введіть число від 1 до 7.";
}

const userInput = prompt("Введіть число від 1 до 7:");
alert("День тижня: " + getDayOfWeek(parseInt(userInput)));
/*
Task 4
*/
const arr = Array.from({ length: 50 }, (_, i) => i + 1);
        arr.forEach(num => {
            const element = document.createElement(num % 2 === 0 ? "div" : "p");
            element.textContent = num;
            document.body.appendChild(element);
        });
/*
Task 5
*/
let a = 5;
let ggg;

if (a > 0) {
    ggg = function() {
        document.body.textContent = "!";
    };
} else {
    ggg = function() {
        document.body.textContent = "!!";
    };
}
ggg(); 
/*
Task 6
*/
function calculator(num1, num2, operator, callback) {
    if (isNaN(num1) || isNaN(num2)) {
        callback("Ошибка: введены некорректные числа.");
        return;
    }
    if (operator === "/" && num2 === 0) {
        callback("Ошибка: деление на 0.");
        return;
    }
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            callback("Ошибка: некорректный оператор.");
            return;
    }
    callback(null, result);
}
function getInputAndCalculate() {
    const num1 = parseFloat(prompt("Введите первое число:"));
    const num2 = parseFloat(prompt("Введите второе число:"));
    const operator = prompt("Введите оператор (+, -, *, /):");

    calculator(num1, num2, operator, function(error, result) {
        if (error) {
            alert(error);
        } else {
            alert(`Результат: ${result}`);
        }
    });
}
getInputAndCalculate();
