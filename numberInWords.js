function NumberInWords(num) {
  var words = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var connecting = ['puluh', 'ratus', 'ribu'];

  var tens = Math.floor(num/10);
  var hundreds = Math.floor(num/100);
  var result = '';

  if (num < 12) {
    result = words[num];
  } else if (num < 100) {
    result = `${words[tens]} ${connecting[0]} ${words[num-(tens*10)]}`;
  } else if (num === 100) {
    result = 'seratus';
  } else if (num < 200) {
    result = `se${connecting[1]} ${NumberInWords(num %100)}`
  // } else if (num > 200 && num < 210 || num > 300 && num < 310 || num > 400 && num < 410 || num > 500 && num < 510 || num > 600 && num < 610 || num > 700 && num < 710 || num > 800 && num < 810 || num > 900 && num < 910) {
  //   result = `${words[hundreds]} ${connecting[1]} ${words[num % 10]}`
  } else if (num < 1000) {
    result = `${words[hundreds]} ${connecting[1]} ${NumberInWords(num % 100)}`
  }
  return result;
}

console.log(NumberInWords(4));
console.log(NumberInWords(27));
console.log(NumberInWords(208));
console.log(NumberInWords(228));
console.log(NumberInWords(108));
console.log(NumberInWords(928));
// console.log(NumberInWords(38079));
// console.log(NumberInWords(82102713));
