function findIndex(char, list) // find index of a character in a list
{
    for (let i = 0; i < list.length; i++) {
        if (list[i] === char) {
            return i;
        }
    }
    return -1;
}

let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

let plainText = "revolution".split('');

let password = "passwordman".split('');

let table = []; 

// create vigenere table
for (let row = 0; row < alphabet.length; row++) {
    let line = [];
    for (let col = 0; col < alphabet.length; col++) {
        let index = (col + row) % alphabet.length;
        line.push(alphabet[index]);
    }
    table.push(line);
}

// encryption
process.stdout.write("Encrypted text:\n");
for (let i = 0; i < plainText.length; i++) {
    let keyCharIndex = findIndex(password[i % password.length], alphabet);
    let plainCharIndex = findIndex(plainText[i], alphabet);

    process.stdout.write(table[keyCharIndex][plainCharIndex]);
}

console.log();

process.stdout.write("Decrypted text:\n");
// decryption
for (let i = 0; i < plainText.length; i++) {
    let keyCharIndex = findIndex(password[i % password.length], alphabet);
    let encryptedChar = table[keyCharIndex]; 

    let encryptedIndex = encryptedChar.indexOf(table[keyCharIndex][findIndex(plainText[i], alphabet)]); // decrypting
    process.stdout.write(alphabet[encryptedIndex]);
}
