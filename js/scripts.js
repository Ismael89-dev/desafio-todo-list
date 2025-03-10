const form = document.getElementById('form')
const tarefas = [];
form.addEventListener('submit', e =>{
    e.preventDefault();
    const tarefa = document.getElementById('tarefa').value;

    if(!tarefa){
        alert('Preencha o campo da tarefa!');
    }else{
        const listaDeTarefas = document.querySelector('.lista-de-tarefas');
        const result = document.createElement('li');
        const text = document.createElement('span');
        const img = document.createElement('img');
        text.innerText = tarefa;
        text.setAttribute('id', 'js-tarefa')
        result.appendChild(text);
        listaDeTarefas.appendChild(result)
    }
    
});

const listaDeTarefas = document.querySelector('.lista-de-tarefas');

listaDeTarefas.addEventListener('click', e =>{
    if(e.target.tagName == "LI"){
        const li = e.target;
        li.remove();    
    }    
})

