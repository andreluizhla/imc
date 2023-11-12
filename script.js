var txtaltura = document.getElementById("txtaltura")
var altura = Number(txtaltura.value)

var txtpeso = document.getElementById("txtpeso")
var peso = Number(txtpeso.value)

var res = document.getElementById("res")

function verificar(){
    if(txtpeso.value.length == 0 || txtaltura.value.length == 0){
        res.innerHTML = "Não vai não >:-("
    } else {
        console.log(peso, altura)
    }
}