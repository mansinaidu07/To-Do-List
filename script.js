    // Add event listener to the "Add" button
    document.getElementById("add-button").addEventListener("click", addTask);

    // to add task on pressing "Enter" key
    document.getElementById("task-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
    });

    function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Do nothing if input is empty

    // Created new list item
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    //'completed' class when the task is clicked
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Append text and button to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add list item to the task list
    document.getElementById("task-list").appendChild(li);

    // Clear input field
    taskInput.value = "";
    }
