function in_words(input) {
    //
    var num = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'],
    zero = ['nol'], multis = ['belas', 'puluh', 'ratus', 'ribu', 'juta'],
    inputArr = input.toString().split('').map(Number), result = '';

    //
    switch(inputArr.length) {
        case 1:
            if (input === 0) {result = 'nol';}
            else {result = `${num[inputArr[0]]}`;}
            break;

        case 2:
            if (input === 11) {result = `se${multis[0]}`;}
            else if (input < 20 && input > 11) {result = `${num[inputArr[1]]} ${multis[0]}`;}
            else {result = `${num[inputArr[0]]} ${multis[1]} ${num[inputArr[1]]}`;}
            break;
        
        case 3:
            if (input === 100) {result = `se${multis[2]}`;}
            else if (input < 110) {result = `se${multis[2]} ${num[inputArr[2]]}`;}
            else if (input === 111) {result = `se${multis[2]} se${multis[0]}`;}
            else {result = `se${multis[2]} ${num[inputArr[1]]} ${multis[1]} ${num[inputArr[2]]}`;}
            break;

        case 4:
            if (input === 1000) {result = `se${multis[3]}`;}
            else if (input < )
            // akusdhiuahsdhjasdiiuashdas oh ternyata gausah kaya gitu dong
    }

    console.log(result);
}

in_words(199);