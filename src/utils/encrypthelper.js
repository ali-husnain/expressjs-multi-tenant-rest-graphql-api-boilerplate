const crypto = require('crypto');

const hash = (string) => {
    return crypto.createHash('sha256').update(string).digest('hex')
}

const encryptionMethod = 'AES-256-CBC';
let secret = hash('mystring').substring(0, 32);
let iv = hash('mtsstring').substring(0, 16);

const encrypt = (plain_text) => {
    let encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
    let singleEncryptedMessage = encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
    return Buffer.from(singleEncryptedMessage).toString('base64');
}

const decrypt = (encryptedMessage) => {
    let singleDecryptedMessage= Buffer.from(encryptedMessage, 'base64').toString('ascii');
    let decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
    return decryptor.update(singleDecryptedMessage, 'base64', 'utf8') + decryptor.final('utf8');
}


module.exports = {encrypt, decrypt};
