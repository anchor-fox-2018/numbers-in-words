function NumberInWords(num) {
  var words = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var connecting = ['puluh', 'ratus', 'ribu', 'juta', 'miliar', 'triliun', 'belas'];

  var tens = Math.floor(num/10);
  var hundreds = Math.floor(num/100);
  var thousands = Math.floor(num/1000);
  var mil = Math.floor(num/1000000);
  var bil = Math.floor(num/1000000000);
  var triliun = Math.floor(num/1000000000000);
  var result = '';

  if (num < 12) {
    result = words[num];
  } else if (num < 20) {
    result = `${words[num % 10]} ${connecting[6]}`;
  } else if (num < 100) {
    result = `${words[tens]} ${connecting[0]} ${words[num-(tens*10)]}`;
  } else if (num === 100) {
    result = 'seratus';
  } else if (num < 200) {
    result = `se${connecting[1]} ${NumberInWords(num %100)}`
  } else if (num < 1000) {
    result = `${words[hundreds]} ${connecting[1]} ${NumberInWords(num % 100)}`
  } else if (num < 2000) {
    result = `se${connecting[1]} ${NumberInWords(num % 1000)}`
  } else if (num < 1000000) {
    result = `${NumberInWords(thousands)} ${connecting[2]} ${NumberInWords(num % 1000)}`
  } else if (num < 1000000000) {
    result = `${NumberInWords(mil)} ${connecting[3]} ${NumberInWords(num % 1000000)}`
  } else if (num < 1000000000000) {
    result = `${NumberInWords(bil)} ${connecting[4]} ${NumberInWords(num % 1000000000)}`
  } else if (num < 1000000000000000) {
    result = `${NumberInWords(triliun)} ${connecting[5]} ${NumberInWords(num % 1000000000000)}`
  }
  return result;
}

console.log(NumberInWords(4));
console.log(NumberInWords(27));
console.log(NumberInWords(208));
console.log(NumberInWords(228));
console.log(NumberInWords(108));
console.log(NumberInWords(928));
console.log(NumberInWords(38079));
console.log(NumberInWords(82102713));
