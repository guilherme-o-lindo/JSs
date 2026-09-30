function adicionar_tarefa() {
    let mensagem = "Tarefa adicionada com sucesso!"
    let input_tarefa = document.getElementById("tarefa")
    let tarefa = input_tarefa.value

    let lista_tarefas = document.getElementById("lista_tarefas")

    let nova_tarefa = document.createElement("li")
    nova_tarefa.textContent = tarefa

    lista_tarefas.appendChild(nova_tarefa)
    input_tarefa.value = ""
    
    document.getElementById("mensagem").textContent = mensagem
}