function findIndex(value, indexArray) // to find index position
{
    for (let i = 0; i < indexArray.length; i++) {
        if (indexArray[i] === value) {
            return i;
        }
    }
    return -1;
}

function mod(a, b) {  
    return ((a % b) + b) % b;
}

let alphabet = "abcçdefgğhıijklmnoöprsştuüvyz".split('');

let key = 3;

let plainText = "revolution".split("");

// Encryption
process.stdout.write("Encrypted text:\n");
for (let i = 0; i < plainText.length; i++) {
    let indexInAlphabet = findIndex(plainText[i], alphabet);
    let encryptedIndex = mod(indexInAlphabet + key, alphabet.length);
    process.stdout.write(alphabet[encryptedIndex]);
}
process.stdout.write("\n");

// Decryption
process.stdout.write("Decrypted text:\n");
let encryptedText = "tğaroyvlrp".split("");

for (let i = 0; i < encryptedText.length; i++) {
    let indexInAlphabet = findIndex(encryptedText[i], alphabet);
    let decryptedIndex = mod(indexInAlphabet - key, alphabet.length);
    process.stdout.write(alphabet[decryptedIndex]);
}
process.stdout.write("\n");
