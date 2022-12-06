let i = Math.floor(Math.random() * 100) + 1;
alert('Давайте сыграем в игру: вы должны угадать число, которое мы загадаем(число в диапазоне от 1 до 100)');
let popitka = 7;
let gel = 0;
function quest(){
let pols = prompt('Введите число');
if (pols > i){
    alert('число, загаданное нами меньше вашего числа');
    popitka--;
    alert('Кол-во оставшихся попыток: ' + popitka);
} else if (pols < i){
    alert('число, загаданное нами больше вашего числа');
    popitka--;
    alert('Кол-во оставшихся попыток: ' + popitka);
} else if (pols == i){
    alert('Вы угадали загаданное число');
    gel = 1;
}
if (popitka <= 0){
    alert('Капец ты лузер, я загадал самое легкое число - ' + i);
}
if (popitka <= -1){
    exit;
}
}
while (popitka > 0){
    while(gel == 0){
    quest();
}}