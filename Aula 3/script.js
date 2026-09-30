function adicionar_tarefa() {
    let lista_tarefas = document.getElementById("lista_tarefas")

    let input_tarefa = document.getElementById("tarefa")
    let tarefa = input_tarefa.value.trim()

    let conteudo_mensagem = "Tarefa adicionada com sucesso!"
    let mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Não foi possivel adicionar à lista, escreva algo!"
    } else {
        let nova_tarefa = document.createElement("li")
        nova_tarefa.textContent = tarefa

        lista_tarefas.appendChild(nova_tarefa)
        
        mensagem.style.color = "#90ff92"
        mensagem.textContent = conteudo_mensagem
    }

    input_tarefa.value = ""
}