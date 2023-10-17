using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

class Program
{
    static void Main()
    {
        // string encryptedFilePath = "salesOrdersEncrypted.json";
        // string decryptedFilePath = "salesOrdersDecrypted.json";
        string encryptedFilePath = "vendorsEncrypted.json";
        string decryptedFilePath = "vendorsDecrypted.json";

        // Replace these with the actual key and IV obtained from Node.js output
        string keyBase64 = "YTdmMDlhZDZjZDgzM2MxYWQ5MmZkN2MwYjA1YWVmMzM=";
        string ivBase64 = "3/KHd0lhNmG0PqaCu1RsmQ==";

        byte[] key = Convert.FromBase64String(keyBase64);
        byte[] iv = Convert.FromBase64String(ivBase64);

        try
        {
            // Approach A, with file stream
            // using (var inputFile = new FileStream(encryptedFilePath, FileMode.Open, FileAccess.Read))

            // Approach B, with memory stream
            byte[] binaryData = File.ReadAllBytes(encryptedFilePath);
            Stream inputFile = new MemoryStream(binaryData);

            using (var outputFile = new FileStream(decryptedFilePath, FileMode.Create, FileAccess.Write))
            using (var rijndael = Aes.Create())
            {
                rijndael.Key = key;
                rijndael.IV = iv;

                using (var decryptor = rijndael.CreateDecryptor(rijndael.Key, rijndael.IV))
                using (var cryptoStream = new CryptoStream(outputFile, decryptor, CryptoStreamMode.Write))
                {
                    inputFile.CopyTo(cryptoStream);
                }
            }

            Console.WriteLine("Decryption completed. Output saved to vendorsDecrypted.json");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error during decryption: " + ex.Message);
        }
    }
}
