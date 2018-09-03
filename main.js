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

    return result;
}

