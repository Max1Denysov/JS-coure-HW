var FMoney = prompt("Cумма денег в кошельке");
var OPrice = prompt("Цена одной шоколадки");

     
 var Numb = Math.trunc(FMoney/OPrice);
var s = '   ';
var oth= FMoney-(OPrice*Numb) ;
 
alert(Numb+ s+'шоколадок'+s+'Сдача ='+s+oth);
