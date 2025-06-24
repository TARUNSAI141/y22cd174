const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

// Add task on button click
addBtn.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

// Add task on Enter key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");

  // Create span for task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  // Append span and button to li
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
