// Selección de elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let tasks = []; // Array para almacenar las tareas

// Función para actualizar el contador
function updateCounter() {
    taskCounter.textContent = `Tareas pendientes: ${tasks.length}`;
}

// Función para eliminar tarea
function deleteTask(index) {
    tasks.splice(index, 1); // Eliminar del array
    renderTasks();          // Actualizar la lista
}

// Función para renderizar las tareas
function renderTasks() {
    taskList.innerHTML = ''; // Limpiar la lista

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Botón de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateCounter(); // Actualizar contador
}

// Evento para agregar tarea
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que recargue la página
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText); // Agregar al array
        renderTasks();        // Mostrar tareas
        taskInput.value = ''; // Limpiar input
        taskInput.focus();    // Mantener el foco en el input
    }
});