let money = prompt('Cумма денег в кошельке');
let price = prompt('Цена одной шоколадки');
let numb = Math.trunc(money / price);
let oth = money - (price * numb) ;
let res = numb + '/' + oth;
alert(' шоколадок/Сдача =' + res);
