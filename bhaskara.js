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
  if (Math.sign(delta) == -1) return `Delta é negativo`
  return [`x1: ${x1.toFixed(3)}`, `x2: ${x2.toFixed(3)}`]
}

sendB.onclick = () => {
  resultB.value = bhaskara(numX.value, numB.value, numC.value)
}
