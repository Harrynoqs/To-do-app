import './style.css';
import ToDoChore from './modules/Todolist.js';
import * as Element from './modules/declarez.js';

const newChore = new ToDoChore();

const getCheck = (element) => ` ${
  element.completed
    ? `<input type="checkbox" aria-label="${element.index}" data-name="status" name="checked" checked>`
    : `<input type="checkbox" aria-label="${element.index}" data-name="status" name="checked">`
} `;

const showTask = (element) => `<div class="list show">${getCheck(element)}                
    <p class="choreDesc ${element.completed ? 'strike' : ''}">${element.description}</p>
    <i class="fa fa-bars menu-icon" aria-label="${element.index}"  data-name="edit"></i>
    </div>`;

const editDesc = (element) => `<div class="list edit"> ${getCheck(element)}<input type="text" class="desc" value="${
  element.description}" aria-label ="${element.index}"><i class="fa fa-trash-o fa-2x" aria-label="${element.index}"data-name="delete"></i></div>`;

const refresh = () => {
  const list = newChore.choreArray;
  let content = '';
  if (list) {
    list.forEach((element) => {
      content += `${element.edit ? editDesc(element) : showTask(element)
      }`;
    });
  }
  Element.listChores.innerHTML = content;
};
refresh();

Element.addChore.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    const val = Element.addChore.value;
    if (val) {
      newChore.addChore(val);
      Element.addChore.value = '';
      refresh();
    }
  }
});

Element.listChores.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    if (event.target.value) {
      const id = parseInt(event.target.ariaLabel, 10);
      newChore.editChore(id, event.target.value);
      refresh();
    }
  }
});

Element.listChores.addEventListener('change', (event) => {
  if (event.target.dataset.name === 'status') {
    newChore.changeComplete(parseInt(event.target.ariaLabel, 10));
    refresh();
  }
});

Element.listChores.addEventListener('click', (event) => {
  if (event.target.nodeName === 'I') {
    if (event.target.dataset.name === 'edit') {
      newChore.setEdit(event.target.ariaLabel);
      refresh();
    } else if (event.target.dataset.name === 'delete') {
      newChore.removeChore(parseInt(event.target.ariaLabel, 10));
      refresh();
    }
  }
});

Element.clear.addEventListener('click', () => {
  newChore.clearCompleteChore();
  refresh();
});
