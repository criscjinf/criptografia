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

const msgCifrada = cifraMensagem(mensagemSecreta, 4);
console.log(msgCifrada);