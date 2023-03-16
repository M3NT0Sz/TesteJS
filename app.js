const btAdicionar = document.querySelector("adicionar");
let num = 0;

function addPessoas(){
    const nomes = document.querySelector("input[name='nome']");
    const div = document.querySelector("div");
    const btExcluir = document.createElement("button");
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    if(nomes.value != ""){
        const btEditar = document.createElement("button");

        num = num + 1

        li.innerHTML = nomes.value;
        btEditar.innerHTML = "Editar"
        btExcluir.innerHTML = "Excluir"
        btExcluir.setAttribute ("id", num)
        btExcluir.setAttribute ("class", "btExcluir")
        ul.setAttribute ("class", "ul")
        ul.setAttribute ("id", num)
        btExcluir.setAttribute ("onclick", "excPessoas()")

        div.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(btEditar);
        li.appendChild(btExcluir);
    }
}

function excPessoas() {
    const ul = document.querySelector("ul");
    
    delete ul.id;
  }