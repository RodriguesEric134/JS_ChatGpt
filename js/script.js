const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

const tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${tasks[i]}</span>
      <button class="delete-button" data-index="${i}">Excluir</button>
    `;
    taskList.appendChild(li);
  }

  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleDelete);
  });
}

function handleDelete(event) {
  const index = event.target.getAttribute('data-index');
  tasks.splice(index, 1);
  renderTasks();
}

taskForm.addEventListener('submit', event => {
  event.preventDefault();
  const task = newTaskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    newTaskInput.value = '';
    renderTasks();
  }
});

renderTasks();