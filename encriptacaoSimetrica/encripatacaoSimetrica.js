import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const chaveString = 'MinhaChaveCompartilhada123456789'; // Deve ter 32 bytes para AES-256
const ivString = 'MeuVetorInicial1'; // Deve ter 16 bytes para AES

// const chave = randomBytes(32);
// const iv = randomBytes(16);

const chave = Buffer.from(chaveString, 'utf-8');
const iv = Buffer.from(ivString, 'utf-8');

function encrypt(text) {
  const cipher = createCipheriv('aes-256-cbc', chave, iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encrypted) {
  const decipher = createDecipheriv('aes-256-cbc', chave, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

// Exemplo de uso
const mensagemOriginal = 'Dados sensíveis';
const mensagemCifrada = encrypt(mensagemOriginal);
console.log('Mensagem Cifrada:', mensagemCifrada);

const mensagemDecifrada = decrypt(mensagemCifrada);
console.log('Mensagem Decifrada:', mensagemDecifrada);
