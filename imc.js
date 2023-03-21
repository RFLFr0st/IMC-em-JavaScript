function calcularIMC(){
    //recuperar peso informado na caixa de texto
    // document representa toda a pagina html

    let peso = document.getElementById("peso").value //valor digitado
    //recuperar a altura informada na caixa de texto
    let altura = document.getElementById("altura").value 
    //calcula IMC
    //peso dividido pela altura ao quadrado

    let imc = (peso / Math.pow(altura, 2))
    //Mostra resultado ao usuario
    alert(imc.toFixed(2))//Mostra o IMC com duas casas depois da virgula

}