var listElement =  document.querySelector("#app ul");
var inputElement =  document.querySelector("#app input");
var btnElement =  document.querySelector("#app button");

var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

function renderTarefas(){

    listElement.innerHTML = '';
    for (tarefa of tarefas){
        var linkElement =  document.createElement('a');
        var tarefaElement = document.createElement('li');
        var tarefaText =  document.createTextNode(tarefa);

        
        linkElement.setAttribute('href','#');
        var linkText =  document.createTextNode('Excluir');

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'deleteTarefa('+ pos +')');

        linkElement.appendChild(linkText);

        tarefaElement.appendChild(linkElement);
        tarefaElement.appendChild(tarefaText);
        listElement.appendChild(tarefaElement);
        
    }
}
renderTarefas();

function addTarefa(){
    var tarefaText = inputElement.value;

    tarefas.push(tarefaText);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

btnElement.onclick = addTarefa;

function deleteTarefa(pos){
tarefas.splice(pos, 1);
renderTarefas();
saveToStorage();
}

function saveToStorage(){
    JSON
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
}