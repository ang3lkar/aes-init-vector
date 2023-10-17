const crypto = require('crypto');

const random16bytes = crypto.randomBytes(16);
const random32bytes = crypto.randomBytes(32);

const random16Base64 = random16bytes.toString('base64');
const random16Hex = random16bytes.toString('hex');

console.log('');
console.log('16-hex:   ', random16Hex);
console.log('16-base64:', random16Base64);
// convert base64 to hex
// const converted16 = Buffer.from(random16Base64, 'base64').toString('hex');
// console.log('converted:', converted16);

console.log('');

const random32Base64 = random32bytes.toString('base64');
const random32Hex = random32bytes.toString('hex');

console.log('32-hex:   ', random32Base64);
console.log('32-base64:', random32Hex);
// const converted32 = Buffer.from(random32Base64, 'base64').toString('hex');
// console.log('converted:', converted32);


