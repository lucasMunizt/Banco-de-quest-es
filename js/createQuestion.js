const formulario = document.querySelector("form");

const Ititulo = document.querySelector(".titulo");
const Ienunciado = document.querySelector(".enunciado");
const IimagemEnunciado = document.querySelector(".imagemEnunciado");
const Igabarito = document.querySelector(".gabarito");
const IimagemGabarito = document.querySelector(".imagemGabarito");
const Idisciplina = document.querySelector(".disciplina");

function cadastrar(){
    
    fetch("http://localhost:8080/questionsAndDependences", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            title: Ititulo.value,
            enunciado: Ienunciado.value,
            enunciadoImage: IimagemEnunciado.value,
            gabarito: Igabarito.value,
            gabaritoImage: IimagemGabarito.value,
            name: Idisciplina.value
        })
    })
    .then(function(res) { console.log(res)})
    .catch(function(res) { console.log(res)})
}

function limpar(){
    Ititulo.value = "";
    Ienunciado.value = "";
    IimagemEnunciado.value = "";
    Igabarito.value = "";
    IimagemGabarito.value = "";
    Idisciplina.value = "";
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    cadastrar();
    limpar();
})
