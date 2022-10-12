/**
 * @jest-environment jsdom
 */

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='addtext'>
  <button id='fa-check'>Add task</button>
  <div id='todoList'></div>
  `;
});