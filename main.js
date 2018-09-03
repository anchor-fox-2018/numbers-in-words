function numberToWord(numbers) {
    let word = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    let result = "";
    if (numbers < 12) {
        result = result + word[Math.floor(numbers)];
    }
    else if (numbers < 20) {
        result = result + numberToWord(numbers - 10) + " Belas";
    }
    else if (numbers < 100) {
        result = result + numberToWord(numbers / 10) + " Puluh " + numberToWord(numbers % 10);
    }
    else if (numbers < 200) {
        result = result + "Seratus " + numberToWord(numbers - 100);
    }
    else if (numbers < 1000) {
        result = result + numberToWord(numbers / 100) + " Ratus " + numberToWord(numbers % 100);
    }
    else if (numbers < 2000) {
        result = result + "Seribu " + numberToWord(numbers - 1000);
    }
    else if (numbers < 1000000000) {
        result = result + numberToWord(numbers / 1000) + " Ribu " + numberToWord(numbers % 1000);
    }
    else if (numbers >= 1000000000) {
        result = result + numberToWord(numbers / 1000000) + " Juta " + numberToWord(numbers % 1000000);
    }
    else if (numbers < 100000000000) {
        result = result + numberToWord(numbers / 1000000000) + " Miliar " + numberToWord(numbers % 1000000000)
    }
    else if (numbers < 1000000000000) {
        result = result + numberToWord(numbers / 1000000000000) + " Triliun " + numberToWord(numbers % 1000000000000)
    }
    else if (numbers < 10000000000000) {
        result = result + numberToWord(numbers / 1000000000000000) + " Biliun " + numberToWord(numbers % 1000000000000000)
    }
    return result;
}
// cape bikin if casenya bro
for (let index = 0; index <= 1000; index += 200) {
    console.log(index)
}
