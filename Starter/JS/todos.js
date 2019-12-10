var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  "Fazer café",
  "Estudar JavaScript",
  "Entrar na comunidade RocketSeat"
];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var linkElement = document.createElement("a");
    var textElement = document.createTextNode(todo);
    var linktText = document.createTextNode("Excluir");
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodos('+ pos +')');

    linkElement.setAttribute("href", "#");

    todoElement.appendChild(textElement);
    linkElement.appendChild(linktText);

    listElement.appendChild(todoElement);
    listElement.appendChild(linkElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);

  inputElement.value = "";
  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodos(pos) {
  todos.splice(pos, 1);
  renderTodos();
}
