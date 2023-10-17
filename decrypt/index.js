const fs = require('fs');
const crypto = require('crypto');


const encryptedFilePath = 'salesOrdersEncrypted.json';
const encryptedData = fs.readFileSync(encryptedFilePath);

// convert from base64 to Buffer
const key = Buffer.from('YTdmMDlhZDZjZDgzM2MxYWQ5MmZkN2MwYjA1YWVmMzM=', 'base64');
const iv = Buffer.from('3/KHd0lhNmG0PqaCu1RsmQ==', 'base64');

const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
let decryptedData = decipher.update(encryptedData);
decryptedData = Buffer.concat([decryptedData, decipher.final()]);

const decryptedFilePath = 'salesOrdersDecrypted.json';
fs.writeFileSync(decryptedFilePath, decryptedData);
