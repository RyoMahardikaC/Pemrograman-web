const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Fungsi untuk menambah tugas baru
addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Task cannot be empty!');
    return;
  }

  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '🗑️';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => deleteTask(li));

  li.appendChild(taskSpan);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = '';
}

// Fungsi untuk menghapus tugas
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
