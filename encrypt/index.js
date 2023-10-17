const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const Passthrough = require('stream').PassThrough;

const key = Buffer.from('a7f09ad6cd833c1ad92fd7c0b05aef33', 'utf-8');

// Replace this with your chosen 16-byte IV (encoded in hexadecimal)
const staticIVHex = 'dff2877749613661b43ea682bb546c99';
const iv = Buffer.from(staticIVHex, 'hex'); // Convert the hex IV to a buffer

const encryptedFilePath = 'salesOrdersEncrypted.json';

const input = fs.createReadStream('./salesOrders.json');

// const input = new Passthrough();
// input.write('this should be encrypted.');
// input.write('another batch.');
// input.end();

const output = fs.createWriteStream(encryptedFilePath);

const cipher = crypto.createCipheriv(algorithm, key, iv);

input.pipe(cipher).pipe(output);

cipher.on('end', () => {
  console.log('Encryption completed! Check the contents of', encryptedFilePath, 'to see the encrypted data.');
  console.log('----------')
  console.log('Keys used:');
  console.log('Encryption key (Base64):', key.toString('base64'));
  console.log('Initialization vector (Base64):', iv.toString('base64'));
});

input.on('error', (err) => console.error('Error reading input:', err));
cipher.on('error', (err) => console.error('Error encrypting:', err));
output.on('error', (err) => console.error('Error writing output:', err));
