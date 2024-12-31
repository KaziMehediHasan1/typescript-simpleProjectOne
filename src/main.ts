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
  console.log(todos, "4 noline");
};
