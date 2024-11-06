/**
 * Validação da maioridade
 * @author Guilherme Holi
 */

//Função para validação de maioridade
function validar(event) {
    //a linha abaixo anula o comportamento padrão de envio 
    //de formulario
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    //Saída
    document.getElementById('aluno').value = `Aluno: ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = `Menor de idade`
    } else {
        document.getElementById('status').value = `Maior de idade`
    }
   

}