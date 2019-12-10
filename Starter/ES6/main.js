class TodoList {
    constructor() {  // todos os metodos precisam ser instanciados
        this.todos = [];
    }

    addTodo() { 

        this.todos.push("Novo To Do");
        console.log(this.todos);
    }

}

const MinhaLista = new TodoList();
document.getElementById("novoTodo").onclick = function() { 

    MinhaLista.addTodo();

}