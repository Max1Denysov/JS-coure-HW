let money = prompt("Cумма денег в кошельке");
var price = prompt("Цена одной шоколадки");
var numb = Math.trunc(money/price);
var oth= money-(price*numb) ; 
alert(numb+' шоколадок - Сдача ='+oth);
