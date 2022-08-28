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
  return result
}

sendL.onclick = () => {
  resultL.textContent = luidyMoura(numberL.value)
}
