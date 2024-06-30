const pwShowHide = document.querySelectorAll(".eye-icon");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

if (document.getElementById('task-form')) {
    document.getElementById('task-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const taskText = document.getElementById('new-task').value;
        if (!taskText) return; 

        // Create new task element
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        
        const taskStatus = document.createElement('span');
        taskStatus.classList.add('task-status', 'status-todo');
        taskStatus.textContent = 'To Do';

        taskStatus.addEventListener('click', () => {
            if (taskStatus.classList.contains('status-todo')) {
                taskStatus.classList.remove('status-todo');
                taskStatus.classList.add('status-urgent');
                taskStatus.textContent = 'Urgent';
            } else if (taskStatus.classList.contains('status-urgent')) {
                taskStatus.classList.remove('status-urgent');
                taskStatus.classList.add('status-done');
                taskStatus.textContent = 'Done';
            } else {
                taskStatus.classList.remove('status-done');
                taskStatus.classList.add('status-todo');
                taskStatus.textContent = 'To Do';
            }
        });

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(taskStatus);
        
        document.getElementById('task-list').appendChild(taskItem);

        // Clear input field
        document.getElementById('new-task').value = '';
    });
}

const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        const href = link.getAttribute("href");
        window.location.href = href; 
    });
});


if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === 'user@gmail.com' && password === 'user1') {
            alert('Login successful!');
            window.location.href = 'tasks.html'; 
        } else {
            alert('Invalid email or password.');
        }
    });
}


if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
        } else {
            alert('Signup successful! Redirecting to tasks.');
            window.location.href = 'tasks.html'; 
        }
    });
}
