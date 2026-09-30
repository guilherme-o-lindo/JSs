let tarefas = []

let mensagem = document.getElementById("mensagem")

let lista_tarefas = document.getElementById("lista_tarefas")

function adicionar_tarefa() {
    let input_tarefa = document.getElementById("tarefa")
    let tarefa = input_tarefa.value.trim()

    let conteudo_mensagem = "Tarefa adicionada com sucesso!"

    if (tarefa == "") {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Não foi possivel adicionar à lista, escreva algo!"
    } else {
        tarefas.push(tarefa)

        mostrar_tarefas()

        mensagem.style.color = "#90ff92"
        mensagem.textContent = conteudo_mensagem
    }

    input_tarefa.value = ""
}

function mostrar_tarefas() {
    lista_tarefas.innerHTML = ""

    if (tarefas.length <= 0) {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Sua lista está vazia!"
    } else {
        for (let item = 0; item < tarefas.length; item++) {
            let nova_tarefa = document.createElement("li")
            nova_tarefa.textContent = tarefas[item]

            let botao_remover = document.createElement("button")
            botao_remover.className = "remover"
            botao_remover.textContent = "Remover"
            botao_remover.onclick = () => {
                tarefas.splice(item, 1)
                mostrar_tarefas()
            }

            let botao_editar = document.createElement("button")
            botao_editar.className = "editar"
            botao_editar.textContent = "Editar"
            botao_editar.onclick = () => {
                let resultado = prompt("Edite sua tarefa:")
                if (resultado !== null && resultado.trim() !== ""){
                    tarefas[item] = resultado
                    mostrar_tarefas()
                } else {
                    mensagem.style.color = "#dd2e2e"
                    mensagem.textContent = "Não foi possivel editar sua tarefa!"
                }
            }

            lista_tarefas.appendChild(nova_tarefa)
            nova_tarefa.appendChild(botao_remover)
            nova_tarefa.appendChild(botao_editar)
        }
        mensagem.style.color = "#90ff92"
        mensagem.textContent = "Aqui está sua lista!"
    }
}

function limpar_tarefas() {
    if (tarefas.length > 0) {
        lista_tarefas.innerHTML = ""
        tarefas = []

        mensagem.style.color = "#90ff92"
        mensagem.textContent = "Você apagou sua lista com sucesso!"
    } else {
        mensagem.style.color = "#dd2e2e"
        mensagem.textContent = "Sua lista já está vazia!"
    }
}