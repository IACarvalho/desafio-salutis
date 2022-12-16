// 06
function embaralhaString(primeiroTexto, segundoTexto){
  const maior = primeiroTexto.length > segundoTexto.length
  ? primeiroTexto.length : segundoTexto.length

  const palavraEmbaralhada = []
  for(let i = 0; i < maior; i++) {
    if(primeiroTexto[i])
      palavraEmbaralhada.push(primeiroTexto[i])
    if(segundoTexto[i])
      palavraEmbaralhada.push(segundoTexto[i])
  }

  return palavraEmbaralhada.join('')
}



// 07
function inverter(texto, tamanho = texto.length - 1, inverso = '') {
  if(tamanho === 0)
    return inverso + texto[tamanho]
  else {
    return inverter(texto, tamanho - 1, inverso + texto[tamanho])
  }
}

//08
function contaOcorrencias(texto) {
  const palavras = separarPalavras(texto)
  const palavrasSemRepeticao = palavras.filter((palavra, i) => palavras.indexOf(palavra) === i)
  const hashTree = {}

  for(const palavra of palavrasSemRepeticao){
    let total = 0

    for(const palavra2 of palavras) {
      if(palavra2 === palavra)
        total += 1
    }
    hashTree[`${palavra}`] = total
  }

  return hashTree
}

function separarPalavras(texto){
  const palavras = []
  let palavra = ''
  for(let letra of texto) {
    if(letra === ' ')
    {
      palavras.push(palavra)
      palavra = ''
    }
    else palavra = palavra + letra
  }
  palavras.push(palavra)

  return palavras
}



// 09

function verificaInterseccao(
  primeiraDataPrimeiroIntervalo,
  segundaDataPrimeiroIntervalo,
  primeiraDataSegundoIntervalo,
  segundaDataSeundoIntervalo) {
    const primeiraData = primeiraDataPrimeiroIntervalo.split('/')
    const segundaData = segundaDataPrimeiroIntervalo.split('/')
    const terceiraData = primeiraDataSegundoIntervalo.split('/')
    const quartaData = segundaDataSeundoIntervalo.split('/')

    if(terceiraData[2] === primeiraData[2] && Number(terceiraData[1]) === Number(primeiraData[1]))
    {
      if(Number(terceiraData[0]) < Number(segundaData[0]))
        return Number(terceiraData[0]) > Number(primeiraData[0])
    }

    if(quartaData[2] === segundaData[2] && Number(quartaData[1]) === Number(segundaData[1]))
    {
      if(Number(quartaData[0]) < Number(segundaData[0]))
        return Number(quartaData[0]) > Number(primeiraData[0])
    }

    return false
}

console.log('Questão 06')
console.log(embaralhaString('abcd','efgh'))
console.log(embaralhaString('abcd','ef'))
console.log(embaralhaString('ab','efgh'))

console.log('Questão 07')
console.log(inverter('israel'))

console.log('Questão 08')
console.log(contaOcorrencias('asa bola casa asa bola asa'))

console.log('Questão 09')
console.log(verificaInterseccao('01/12/2013', '20/12/2013', '15/12/2013', '31/12/2013'))
console.log(verificaInterseccao('01/12/2013', '15/12/2013', '20/12/2013', '31/12/2013'))