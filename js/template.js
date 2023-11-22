document.addEventListener('DOMContentLoaded', function () {
    // Carregar dados salvos ao carregar a página
    carregarDadosSalvos();
});

function carregarDadosSalvos() {
    // Obter dados salvos do backend
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    fetch('http://localhost:8080/questions/' + id)
    .then(response => response.json())
    .then(data => {
        console.log('Dados obtidos do backend:', data);
        // Exibir os dados na interface do usuário
        exibirDadosNaUI(data);
    })
    .catch(error => console.error('Erro ao obter dados do backend:', error));
}

function exibirDadosNaUI(dados) {
    if(dados){
        var listaDados = document.getElementById("listaDados");
        listaDados.innerHTML = ''; // Limpar a lista antes de adicionar os novos dados
        
        var h = document.createElement("h4");
        h.textContent = dados.subject.name;
        h.className = "texto-gabarito";
        listaDados.appendChild(h);
        
        var div = document.createElement("div");
        div.className = "gabarito";
        listaDados.appendChild(div);
        

        var title = document.createElement("h4");
        title.textContent = "Gabarito";
        div.appendChild(title);

        var p = document.createElement("p");
        p.textContent = dados.template.text;
        div.appendChild(p);

        var divImg = document.createElement("div");
        divImg.className = "img-gabarito";
        listaDados.appendChild(divImg);

        var img = document.createElement("img");
        img.src = dados.template.imageUrl;
        img.className = "img";
        divImg.appendChild(img);
    }else{
        var msg = document.createElement("h1");
        msg.textContent = "Erro ao buscar questão!";
        msg.setAttribute("align", "center");
        listaDados.appendChild(msg);
    }
}