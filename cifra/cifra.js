const mensagemSecreta = 'Alura';

function cifraMensagem(mensagem, movimentos) {
  const msgCifrada = mensagem.split('').map( char => {
    const codChr = char.charCodeAt(0);
    return String.fromCharCode(codChr + movimentos);
  })

  return msgCifrada.join('');
}

function descifraMensagem(mensagem, movimentos) {
  const msgCifrada = mensagem.split('').map( char => {
    const codChr = char.charCodeAt(0);
    return String.fromCharCode(codChr - movimentos);
  })

  return msgCifrada.join('');
}

const msgCifrada = cifraMensagem('casa', 3);
console.log(msgCifrada);
console.log(descifraMensagem(msgCifrada, 3));