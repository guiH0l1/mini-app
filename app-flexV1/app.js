/**
 * APP Flex versão 1 Calcular a vantagem do alcool e gasolina
 * @author Guilherme Holi
 */


function calcular(event){
    event.preventDefault()
   let etanol = document.getElementById('txtEtanol').value
   let gasolina = document.getElementById('txtGasolina').value

    if(etanol < 0.7 * gasolina){
        document.getElementById('status').src="img/etanol.png"
    } else {
        document.getElementById('status').src="img/gasolina.png"
    }

}

function limpar() {
    document.getElementById('status').src="img/neutro.png"
}