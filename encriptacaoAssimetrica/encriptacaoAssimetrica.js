import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync
('rsa', {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },

  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
})

const dadosCripto = publicEncrypt(publicKey, Buffer.from('Mensagem secreta'))

console.log(dadosCripto.toString('hex'))

const dadosDecripto = privateDecrypt(privateKey, dadosCripto)

console.log(dadosDecripto.toString('utf-8'))