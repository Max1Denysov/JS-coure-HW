const usb = prompt('Размер флешки Гб');
const file =820;
const prop = Math.trunc((usb * 1024) / file);
alert('На флешке поместиться_' + prop + '_файлов');
