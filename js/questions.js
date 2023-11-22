document.addEventListener('DOMContentLoaded', function () {
    // Carregar dados salvos ao carregar a página
    carregarDadosSalvos();
});

function carregarDadosSalvos() {
    // Obter dados salvos do backend
    var urlParams = new URLSearchParams(window.location.search);
    var subjectId = urlParams.get("subjectId");
    fetch('http://localhost:8080/questionsBySubject/' + subjectId)
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
    
    var h = document.createElement("h4");
    h.textContent = dados[0].subject.name;
    listaDados.appendChild(h);
    if(dados.length > 0){
        dados.forEach(function (dado) {
            var ul;
            if(aux === 0) {
                ul = document.createElement("ul");
                ul.className = "service-container";
                listaDados.appendChild(ul);
            } 
            var title = document.createElement("h5");
            title.textContent = dado.statement.title;
            ul.appendChild(title);
            var li = document.createElement("li");
            li.className = "questao";
            var p = document.createElement("p");
            p.textContent = dado.statement.text;
            var a = document.createElement("a");
            a.textContent = "Iniciar";
            a.href = "./questao.html?id=" + dado.id;
            if(aux === 0){
                ul.appendChild(li);
            }else{
                var tamanho = listaDados.childNodes.length > 1 ? listaDados.childNodes.length - 2 : 0;
                listaDados.childNodes[tamanho].appendChild(li);
            }
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
        msg.textContent = "Não há questões cadastradas!";
        msg.setAttribute("align", "center");
        listaDados.appendChild(msg);
    }
}