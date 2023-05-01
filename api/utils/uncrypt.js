"use strict";
const myCrypto = require("crypto");
function decoded(encryptedData) {
    // Replace this with your own secret key
    const secret = "abcdefghijklmnopqrstuvwxyz";
    // Set the initialization vector (IV)
    const iv = "1234567890123456";
    const algorithm = "aes-256-cbc";
    // Create a decipher using the same algorithm and secret key and IV
    const decipher = myCrypto.createDecipheriv(algorithm, secret, iv);
    // Decrypt the data and convert it back to a string
    let decrypted = decipher.update(encryptedData, "base64", "utf8");
    decrypted += decipher.final("utf8");
    // The decrypted data is now stored in the 'decrypted' variable
    console.log(decrypted);
    return decrypted;
}
// Encrypting data example on client side
// function encoded(data) {
//   // Replace this with your own secret key
//   const secret = 'abcdefghijklmnopqrstuvwxyz';
//   // Set the initialization vector (IV)
//   const iv = '1234567890123456';
//   const algorithm = 'aes-256-cbc';
//   // Create a Cipher object using the secret key and IV
//   const cipher = crypto.createCipheriv(algorithm, secret, iv);
//   // Convert the data to a string and encrypt it
//   let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return (encrypted += cipher.final('hex'));
// }
module.exports = decoded;
//# sourceMappingURL=uncrypt.js.map