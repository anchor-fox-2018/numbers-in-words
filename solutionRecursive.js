function in_words(input) {
    var num = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'],
        zero = ['nol'], multis = ['belas', 'puluh', 'ratus', 'ribu', 'juta', 'miliar', 'triliun'],
        inputArr = input.toString().split('').map(Number), result = '';

    if (input <= 9) {
        return `${num[input]}`;
    }
    else if (input < 100) {
        if (input < 20) {
            if (inputArr[1] === 0) {
                return `se${multis[1]}`
            }
            if (inputArr[1] === 1) {
                return `se${multis[0]}`;
            }
            return `${in_words(inputArr[1])} ${multis[0]}`;
        }
        return `${in_words(inputArr[0])} ${multis[1]} ${in_words(inputArr[1])}`;
    }
    else if (input < 1000) {
        if (input === 100) {
            return `se${multis[2]}`
        }
        else {
            return `${num[inputArr[0]]} ${multis[2]} ${in_words(input % 100)}`
        }
        
    }

    else if (input < 10000) {
        if (input === 1000) {
            return `se${multis[3]}`
        }
        else {
            return `${num[inputArr[0]]} ${multis[3]} ${in_words(input % 1000)}`
        }
        
    }

    else if (input < 100000) {
        return `${in_words(input / 1000)} ${multis[3]} ${in_words(input % 1000)}`
    }

    else if (input < 1000000) {
        return `${in_words(input / 1000)} ${multis[3]} ${in_words(input % 1000)}`
    }

    else if (input < 10000000) {
        return `${in_words(Math.floor(input / 1000000))} ${multis[4]} ${in_words(input % 1000000)}`
    }

    else if (input < 100000000) {
        return `${in_words(Math.floor(input / 1000000))} ${multis[4]} ${in_words(input % 1000000)}`
    }

    else if (input < 1000000000) {
        return `${in_words(Math.floor(input / 1000000))} ${multis[4]} ${in_words(input % 1000000)}`
    }

    else if (input < 10000000000) {
        return `${in_words(Math.floor(input / 1000000000))} ${multis[5]} ${in_words(input % 1000000000)}`
    }

    else if (input < 100000000000) {
        return `${in_words(Math.floor(input / 1000000000))} ${multis[5]} ${in_words(input % 1000000000)}`
    }

    else if (input < 1000000000000) {
        return `${in_words(Math.floor(input / 1000000000))} ${multis[5]} ${in_words(input % 1000000000)}`
    }

    else if (input < 10000000000000) {
        return `${in_words(Math.floor(input / 1000000000000))} ${multis[6]} ${in_words(input % 1000000000000)}`
    }


}

console.log(in_words(1267253244934)); //1.267.050.204.930
console.log(in_words(10000)); //
console.log(in_words(100000)); //
console.log(in_words(1000)); //
console.log(in_words(100)); //
console.log(in_words(1000000)); //