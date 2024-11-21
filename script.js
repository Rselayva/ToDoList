const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const todoText = input.value.trim();
  if (todoText === "") return; 

  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);

  input.value = "";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      listItem.classList.add("completed");
      todoList.appendChild(listItem); 
    } else {
      listItem.classList.remove("completed");
    }
  });

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
});
