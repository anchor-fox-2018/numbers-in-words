function in_words(angka){
    var angkaPertama = String(angka);
    var kata = ['',' satu ',' dua ',' tiga ',' empat ',' lima ',' enam ',' tujuh ',' delapan ',' sembilan ',' sepuluh '];
    var tingkatan = ['',' puluh ',' ratus ',' ribu ',' puluh ',' ratus ',,' puluh ',' ratus ',];
    var awalanSatu = ['',' sepuluh ',' seratus ',' seribu ',' sepuluh ',' seratus '];
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
            }else{
                return kata[Number(angkaPertama[0])]+tingkatan[angkaPertama.length-1]+ in_words(angkaPertama.substring(1))
            }
        }
        
        
    } 
}