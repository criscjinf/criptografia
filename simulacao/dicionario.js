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

const user = new Usuario('Cris', 'senha1234')


const senhasComuns = ["senha", "senha123", "senha1234", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.forEach(senha => {
  if (user.autentica('Cris', senha)) {
    console.log(`A Senha do usuário é ${senha}`)
  }
})


