interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todoConatainer = document.querySelector(".data") as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("formelement") as HTMLFormElement;
myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value.trim(),
    isCompleted: false,
    id: String(Math.random() * 100),
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
  console.log(todos, "4 noline");
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo = document.createElement("div") as HTMLDivElement;
  todo.className = "todo";

  // creating a checkbox...
  const checkBox = document.createElement("input") as HTMLInputElement;
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item?.id === id) item.isCompleted = checkBox.checked;
    });
    console.log(isCompleted);
    console.log(checkBox.checked);

    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  // crating p for title..
  const paragraph = document.createElement("p") as HTMLParagraphElement;
  paragraph.innerText = title;
  // creating delete button..
  const btn = document.createElement("button") as HTMLButtonElement;
  btn.innerText = "X";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deletTodo(id);
  };

  // appending all to todo..
  todo.append(checkBox, paragraph, btn);
  todoConatainer.append(todo);
};

const deletTodo = (id: string) => {
  const idx = todos.findIndex((index) => index.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};
const renderTodo = (todos: Todo[]) => {
  todoConatainer.innerText = "";
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};
