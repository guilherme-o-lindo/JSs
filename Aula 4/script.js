let tarefas = []

let mensagem = document.getElementById("mensagem")

function adicionar_tarefa() {
    let input_tarefa = document.getElementById("tarefa")
    let tarefa = input_tarefa.value.trim()

    let conteudo_mensagem = "Tarefa adicionada com sucesso!"

    if (tarefa == "") {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Não foi possivel adicionar à lista, escreva algo!"
    } else {
        tarefas.push(tarefa)

        mensagem.style.color = "#90ff92"
        mensagem.textContent = conteudo_mensagem
    }

    input_tarefa.value = ""
}

function mostrar_tarefas() {
    let lista_tarefas = document.getElementById("lista_tarefas")

    if (tarefas.length <= 0) {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Sua lista está vazia! Adicione itens a sua lista digitando e usando o botão ao lado!"
    } else {
        lista_tarefas.innerHTML = ""

        for (let item = 0; item < tarefas.length; item++) {
            let nova_tarefa = document.createElement("li")
            lista_tarefas.appendChild(nova_tarefa)
            nova_tarefa.textContent = tarefas[item]
        }
        mensagem.style.color = "#90ff92"
        mensagem.textContent = "Aqui está sua lista!"
    }
}