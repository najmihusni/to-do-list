document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-status')) {
            toggleTaskStatus(e.target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = <><span>${taskText}</span><span class="task-status">To-Do</span></>;
        taskList.appendChild(li);
    }

    function toggleTaskStatus(statusElement) {
        const currentStatus = statusElement.textContent;
        if (currentStatus === 'To-Do') {
            statusElement.textContent = 'Done';
            statusElement.style.color = 'green';
        } else {
            statusElement.textContent = 'To-Do';
            statusElement.style.color = '#0171d3';
        }
    }
});