let txtaltura = document.getElementById("txtaltura")
let altura = Number(txtaltura.value)

let txtpeso = document.getElementById("txtpeso")
let peso = Number(txtpeso.value)

let res = document.getElementById("res")

function verificar(){
    if(txtpeso.value.length == 0 || txtaltura.value.length == 0){
        res.innerHTML = "Não vai não >:-("
    } else {
        console.log(peso, altura)
    }
}
