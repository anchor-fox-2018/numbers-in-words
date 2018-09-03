function in_words(angka){
    var angkaPertama = String(angka);
    var kata = ['',' satu ',' dua ',' tiga ',' empat ',' lima ',' enam ',' tujuh ',' delapan ',' sembilan ',' sepuluh '];
    var tingkatan = ['','puluh','ratus','ribu','puluh','ratus',,'puluh','ratus',];
    var awalanSatu = ['',' sepuluh',' seratus',' seribu',' sepuluh',' seratus'];
    var belasan = ['',' sebelas ',' dua belas ',' tiga belas ',' empat belas ',' lima belas ',' enam belas ',' tujuh belas ',' delapan belas ',' sembilan belas ']
    if(angkaPertama.length === 1){
        return ''+kata[Number(angkaPertama)]
    }else{
        
        if(angka > 10 && angka < 20){
            return belasan[Number(angkaPertama[1])]
        }else if(angkaPertama[0] === '1'){
            return awalanSatu[angkaPertama.length-1] + in_words(angkaPertama.substring(1))
        }else if(angkaPertama[0] === '0'){
            return in_words(angkaPertama.substring(1))
        }else{
            if(angkaPertama.length === 7){
                return kata[Number(angkaPertama[0])]+' juta '+ in_words(angkaPertama.substring(1))
            }else if(angkaPertama.length === 5 || angkaPertama.length === 6 && angkaPertama[1] === '0'){
                return kata[Number(angkaPertama[0])]+tingkatan[angkaPertama.length-1]+ ' ribu'+ in_words(angkaPertama.substring(1))
            }else if(angkaPertama.length === 8 || angkaPertama.length === 9 && angkaPertama[1] === '0'){
                return kata[Number(angkaPertama[0])]+tingkatan[angkaPertama.length-1]+ ' juta'+ in_words(angkaPertama.substring(1))
            }else{
                return kata[Number(angkaPertama[0])]+tingkatan[angkaPertama.length-1]+ in_words(angkaPertama.substring(1))
            }
        }
        
        
    } 
}
console.log(in_words(99000000))