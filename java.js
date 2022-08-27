//Atividade 1 Triangulos

const sizeA = document.querySelector('#size-a')
const sizeB = document.querySelector('#size-b')
const sizeC = document.querySelector('#size-c')
const send = document.querySelector('#send-t-value')
const resultT = document.querySelector('#result-1')

function triangleType(a, b, c) {
  var arrey = [a, b, c]
  var counts = {}
  arrey.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1
  })
  console.log(counts)
  const response = {
    1: 'Equilátero', //três lados iguais
    2: 'Isóceles', //dois lados iguais
    3: 'Escaleno' //todos os lados diferentes
  }
  console.log(response[Object.keys(counts).length])

  a = Number.parseInt(sizeA)
  b = Number.parseInt(sizeB)
  c = Number.parseInt(sizeC)
}

send.onclick = () => {
  resultT.value = triangleType(sizeA.value, sizeB.value, sizeC.value)
}

//Atividade 2 Bhaskara
const numX = document.querySelector('#value-x2')
const numB = document.querySelector('#value-b')
const numC = document.querySelector('#value-c')
const resultB = document.querySelector('#result-2')
const sendB = document.querySelector('#send-values')

function bhaskara(ax2, bx, c) {
  const delta = bx * bx - 4 * ax2 * c
  const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
  const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
  console.log(delta)
  if (Math.sign(delta) == -1) return console.log(`Delta é negativo`)
  return console.log([`x1: ${x1}`, `x2: ${x2}`])
}

sendB.onclick = () => {
  resultB.value = bhaskara(numX.value, numB.value, numC.value)
}

// Atividade 3 notas

const nota = document.querySelector('#nota')
const sendN = document.querySelector('#sendN')
const resultN = document.querySelector('#result-3')

function gradeSystem(nota) {
  const p_multiplo = Math.ceil(nota / 5) * 5 //pega o próximo número múltiplo de 5
  console.log('nota', nota)
  console.log('proximo multiplo de 5', p_multiplo)
  console.log('diferença entre a nota e o p_multiplo', p_multiplo - nota)
  if (nota > 37) {
    return p_multiplo - nota < 3
      ? `nota: ${p_multiplo}, aprovado\n${'-'.repeat(40)}`
      : `nota: ${nota}, aprovado\n${'-'.repeat(40)}`
  } else return `nota: ${nota}, reprovado\n${'-'.repeat(40)}`
}

sendN.onclick = () => {
  resultN.value = gradeSystem(nota.value)
}

//Atividade 4 luidy

const numberL = document.querySelector('#Luidy')
const sendL = document.querySelector('#sendL')
const resultL = document.querySelector('#result-4')

function luidyMoura(n) {
  const result = []
  let x = 1

  while (x <= n) {
    let string = ''
    if (x % 5 == 0) string = 'Luidy'
    if (x % 9 == 0) string = string + 'Moura'
    result.push(string || x)
    x++
  }
  return console.log(result)
}

sendL.onclick = () => {
  resultL.value = luidyMoura(numberL.value)
}
