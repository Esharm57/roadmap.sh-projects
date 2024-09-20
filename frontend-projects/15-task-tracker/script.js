function taskAdd() {
    const taskInput = document.querySelector('.js-input');
    const task = taskInput.value;
    let taskContainer = document.querySelector('.taskIncompleteContainer');

    if (task !== '') {
        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <button class="checkboxButton">
                <img class="checkbox" src="images/uncheck.png">
            </button>
            <p class="taskIncomplete">${task}</p>
            <button class="deleteButton">
                <img class="deleteIcon" src="images/trash-bin.png">
            </button>
        `;

        const checkBoxImage = taskElement.querySelector('.checkbox');
        checkBoxImage.addEventListener('click', () => taskComplete(taskElement));

        const deleteButton = taskElement.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => taskDelete(taskElement));

        taskContainer.appendChild(taskElement);
        taskInput.value = '';

        removeTopBorderIfFirst(taskContainer);
    }
}

function taskComplete(taskElement) {
    let taskContainer1 = document.querySelector('.taskIncompleteContainer');
    let taskContainer2 = document.querySelector('.taskCompleteContainer');

    let checkBoxImage = taskElement.querySelector('.checkbox');
    if (checkBoxImage) {
        checkBoxImage.src = "images/check.png";
    }

    let taskText = taskElement.querySelector('.taskIncomplete');
    if (taskText) {
        taskText.classList.add('taskComplete');
        taskText.classList.remove('taskIncomplete');
    }

    if (taskElement) {
        taskContainer2.appendChild(taskElement);
        if (taskContainer1.contains(taskElement)) {
            taskContainer1.removeChild(taskElement);
        }
    }

    removeTopBorderIfFirst(taskContainer1);
    removeTopBorderIfFirst(taskContainer2);
}

function taskDelete(taskElement) {
    let taskContainer = taskElement.parentElement;

    if (taskContainer.contains(taskElement)) {
        taskContainer.removeChild(taskElement);
    }

    removeTopBorderIfFirst(taskContainer);
}

function removeTopBorderIfFirst(container) {
    const tasks = container.querySelectorAll('.task');
    tasks.forEach((task, index) => {
        if (index === 0) {
            task.style.borderTop = 'none';
        } else {
            task.style.borderTop = '1px solid black';
        }
    });
}
