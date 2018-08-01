var toDoAddButton = document.getElementById("addTodoItem");
var toDoElement = document.getElementById("todoList");
var todoTextBox = document.getElementById("newTodoItemText");
function addTodo(){
	var todoText=todoTextBox.value.toString();
	if(todoText.length > 2){
		todoTextBox.classList.toggle("NoMinText",false);
		randomId=Math.random();
		toDoElement.innerHTML += "<li class='ToDoToDo' id='" + randomId + "' onClick='doneTodo(this)'>" + todoText + "<input class='ToDoToDo' type='button' id='" + randomId + "' value='x' onClick='deleteTodo(this)'></li>";
		document.getElementById(randomId).classList.add('ToDoToDo');
		todoTextBox.value="";
		todoTextBox.focus();
	}
	else{
		todoTextBox.classList.toggle("NoMinText");
	}
}
function deleteTodo(toDelete){
	toDoElement.removeChild(toDelete.parentElement);
}
function doneTodo(toToggle){
	console.log(toToggle.classList);
	toToggle.classList.toggle("ToDoDone");
	toToggle.classList.toggle("ToDoToDo");	
}
toDoAddButton.addEventListener("click",addTodo);
todoTextBox.addEventListener("keypress",function(e){
	if(e.keyCode===13){
		addTodo();
	}
});
