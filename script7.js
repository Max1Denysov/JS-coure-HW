var USB = prompt("Размер флешки Гб");
const file =820;
var prop = Math.trunc((USB*1000)/file);
var s = ' ';
alert('На флешке поместиться'+s+prop+s+'файл-а');
