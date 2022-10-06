import './style.css';

const tasks = [
  {
    id: 1,
    task: 'Wash my car',
    completed: false,
  },
  {
    id: 2,
    task: 'Shopping for my child',
    completed: true,
  },
  {
    id: 3,
    task: 'Microverse Project',
    completed: false,
  },
];

const toDoLists = document.getElementById('todoList');

const createList = () => {
  const sortedArray = tasks.sort((a, b) => a.index - b.index);
  sortedArray.forEach((alltask) => {
    const eachTask = document.createElement('li');
    eachTask.innerHTML = `<div class="list">
        <input type="checkbox">
        <p>${alltask.task}</p>               
        <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i></a>
      </div>`;
    toDoLists.appendChild(eachTask);
  });
};

document.addEventListener('DOMContentLoaded', createList);