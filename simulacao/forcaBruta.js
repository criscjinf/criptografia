import { createHash } from 'crypto'

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }
  
  criaHash(senha) {
    return createHash('md5').update(senha).digest('hex')
  }
  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log('Usuário autenticado com sucesso')
      return true
    }
    // console.log('Usuário ou senha incorretos')
  }
}

const user = new Usuario('Cris', '2598')

console.log(user.hash)
// user.autentica('Cris', '12345')

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (user.autentica('Cris', senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste} `)
  }
}
