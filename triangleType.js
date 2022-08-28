//Atividade 1 Triangulos

const send = document.querySelector('#send-t-value')
const resultT = document.querySelector('#result-1')

const sizeA = document.querySelector('#size-a')
const sizeB = document.querySelector('#size-b')
const sizeC = document.querySelector('#size-c')

function triangleType(a, b, c) {
  let arrey = [a, b, c]
  let counts = {}
  arrey.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1
  })
  console.log(counts)
  const response = {
    1: 'Equilátero', //três lados iguais
    2: 'Isóceles', //dois lados iguais
    3: 'Escaleno' //todos os lados diferentes
  }
  return response[Object.keys(counts).length]
}

send.onclick = () => {
  resultT.value = triangleType(sizeA.value, sizeB.value, sizeC.value)
}
