document.addEventListener('DOMContentLoaded', function () {
    // Carregar dados salvos ao carregar a página
    carregarDadosSalvos();
});

function carregarDadosSalvos() {
    // Obter dados salvos do backend
    fetch('http://localhost:8080/subjects')
    .then(response => response.json())
    .then(data => {
        console.log('Dados obtidos do backend:', data);
        // Exibir os dados na interface do usuário
        exibirDadosNaUI(data);
    })
    .catch(error => console.error('Erro ao obter dados do backend:', error));
}

function exibirDadosNaUI(dados) {
    var listaDados = document.getElementById("listaDados");
    listaDados.innerHTML = ''; // Limpar a lista antes de adicionar os novos dados
    var aux = 0;
    if(dados.length > 0){
        dados.forEach(function (dado) {
            var ul;
            if(aux === 0) {
                ul = document.createElement("ul");
                listaDados.appendChild(ul);
            } 
            var li = document.createElement("li");
            if(aux !== 0) li.className = "disciplinas";
            var i = document.createElement("i");
            i.className = "fa-solid fa-book";
            var h = document.createElement("h4");
            h.textContent = dado.name;
            var p = document.createElement("p");
            p.textContent = dado.topic;
            var a = document.createElement("a");
            a.textContent = "Explorar";
            a.href = "./questoes.html?subjectId=" + dado.id;
            if(aux === 0){
                ul.appendChild(li);
            }else{
                listaDados.lastChild.appendChild(li);
            }
            li.appendChild(i);
            li.appendChild(h);
            li.appendChild(p);
            li.appendChild(a);
            if(aux < 3){
                aux++;
            }else{
                aux = 0;
            }
        });
    }else{
        var msg = document.createElement("h1");
        msg.textContent = "Não há disciplinas cadastradas!";
        msg.setAttribute("align", "center");
        listaDados.appendChild(msg);
    }
}