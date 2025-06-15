document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add Task on button click
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add Task when pressing Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save to Local Storage
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        taskText = taskText.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Remove task from list and Local Storage
        removeBtn.onclick = () => {
            li.remove();

            let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';

        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }
});
