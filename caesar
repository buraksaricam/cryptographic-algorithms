function indexBul(deger, indeks) // index sırasını bulmak için
{
    for(let i=0; i<indeks.length; i++) {
        if(indeks[i] === deger){
           return i;
        }
    }
    return -1;
}

function mod(a, b) {  
    return ((a % b) + b) % b;
}

let alfabe = "abcçdefgğhıijklmnoöprsştuüvyz".split('');

let anahtar = 3;

let duzmetin = "revolution".split(""); // Şifrelenmek istenen metin

// şifreleme
process.stdout.write("Şifrelenmiş metin:\n");
for(let i = 0; i < duzmetin.length; i++) {
    let alfabedebul = indexBul(duzmetin[i], alfabe);
    let sifreliIndex = mod(alfabedebul + anahtar, alfabe.length);
    process.stdout.write(alfabe[sifreliIndex]);
}
process.stdout.write("\n");

// Çözme
process.stdout.write("Çözülmüş metin:\n");
let sifreliMetin = "tğaroyvlrp".split(""); // örnek şifreli metin (revolution şifresi)

for(let i = 0; i < sifreliMetin.length; i++) {
    let alfabedebul = indexBul(sifreliMetin[i], alfabe);
    let cozulmusIndex = mod(alfabedebul - anahtar, alfabe.length);
    process.stdout.write(alfabe[cozulmusIndex]);
}
process.stdout.write("\n");
