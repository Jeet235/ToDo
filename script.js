let sortedTasks = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addTask);
});

function addTask() {
    let task = document.getElementById('task').value;
    let priority = parseInt(document.getElementById('priority').value);

    sortedTasks.push({ task, priority });

    sortedTasks.sort((a, b) => a.priority - b.priority);

    console.log(sortedTasks);

    let tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    sortedTasks.forEach(taskObj => {
        let li = document.createElement("li");
        li.innerText = `${taskObj.task} (Priority: ${taskObj.priority})`;
        tasksList.appendChild(li);
    });
}