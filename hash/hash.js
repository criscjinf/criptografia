import { createHash } from 'crypto'

function criaHash(senha) {
  return createHash('md5').update(senha).digest('hex')
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log('Usuário autenticado com sucesso')
      return true
    }
    console.log('Usuário ou senha incorretos')
  }
}

const user = new Usuario('Cris', 'senha')

user.autentica('Cris', 'senha')


