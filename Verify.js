const nota = document.querySelector('#nota')
const sendN = document.querySelector('#sendN')
const resultN = document.querySelector('#result-3')

function gradeSystem(nota) {
  const p_multiplo = Math.ceil(nota / 5) * 5 //pega o próximo número múltiplo de 5
  if (nota > 37) {
    return p_multiplo - nota < 3
      ? `nota: ${p_multiplo}, aprovado`
      : `nota: ${nota}, aprovado`
  } else return `nota: ${nota}, reprovado`
}

sendN.onclick = () => {
  resultN.value = gradeSystem(nota.value)
}
