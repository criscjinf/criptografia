import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHash(senha) {
  const sal = randomBytes(16).toString('hex');
  const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')
  return `${sal}:${senhaHasheada}`
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHash(senha).split(':')
  }

  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, 'hex');
      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
      if (hashesCorrespondem) {
        console.log('Usuário autenticado com sucesso')
        return true
      }
    }
    console.log('Usuário ou senha incorretos')
  }
}

const user = new Usuario('Cris', 'testedesenha')

console.log(user.sal)
console.log(user.hash)

user.autentica('Cris', 'testedesenha')