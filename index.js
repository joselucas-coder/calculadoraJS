// calculadora basica

const display = document.getElementById("display");

function adicionarAoDisplay(input){
    display.value += input;
}


function limparDisplay(){
    display.value = "";
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erro";
    }
}

