# Encryption POC

This is a sample project to test the encryption/decryption
flow that will be used in d365. Since our tech stack is
node and d365 is C#, we need to make sure that the encryption
and decryption is compatible between the two languages.

We test an AES symmetric key encryption with an initialization
vector and we attempt to decrypt the encrypted file in C#.

## Encrypt

Will encrypt the `salesOrders.json` file:

```sh
node encrypt/index.js
```

## Decrypt

Will decrypt the `salesOrdersEncrypted.json` file and write to `salesOrdersDecrypted.json`:

```sh
dotnet run decrypt/Program.cs
```
