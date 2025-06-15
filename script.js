// Run this when the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define function to add task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Step 3: Create new task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 4: Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 5: Remove task when button clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Step 6: Add button to task, then add task to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 7: Clear input
        taskInput.value = '';
    }

    // Step 8: Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
