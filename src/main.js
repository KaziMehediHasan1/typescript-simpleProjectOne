var todos = [];
var todoConatainer = document.querySelector(".data");
var todoInput = document.getElementsByName("title")[0];
var myForm = document.getElementById("formelement");
myForm.onsubmit = function (e) {
    e.preventDefault();
    var todo = {
        title: todoInput.value.trim(),
        isCompleted: false,
        id: String(Math.random() * 100),
    };
    todos.push(todo);
    console.log(todos, "4 noline");
};
