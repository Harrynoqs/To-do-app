class ToDoChore {
  constructor() {
    this.getTasks();
  }

  refreshTasks() {
    localStorage.setItem('toDochore', JSON.stringify(this.choreArray));
  }

  showTasks = () => JSON.parse(localStorage.getItem('toDochore')) || [];

  getTasks() {
    this.choreArray = JSON.parse(localStorage.getItem('toDochore')) || [];
  }

  setEdit(i) {
    const task = this.choreArray.find((item) => parseInt(item.index, 10) === parseInt(i, 10));
    task.edit = true; this.refreshTasks();
  }

  addChore(choreDescription) {
    const task = {
      choreDescription,
      completed: false,
      index: this.choreArray.length + 1,
      edit: false,
    };
    this.choreArray = [...this.choreArray, task];
    this.refreshTasks();
  }

  // editing of task
  changeComplete(i) {
    const status = this.choreArray[i - 1].completed;
    this.choreArray[i - 1] = {
      ...this.choreArray[i - 1],
      completed: !status,
    };
    this.refreshTasks();
  }
  // removeChore

  removeChore(index) {
    this.choreArray = this.choreArray.filter((item) => item.index !== index);
    this.choreArray = this.choreArray.map((list, i) => {
      list.index = i + 1;
      return list;
    });
    this.refreshTasks();
  }
  // clear all completed

  clearCompleteChore() {
    this.choreArray = this.choreArray.filter((item) => item.completed !== true);
    if (this.choreArray.length > 0) {
      this.choreArray = this.choreArray.map((list, i) => {
        list.index = i + 1;
        return list;
      });
    }
    this.refreshTasks();
  }

  editChore(index, choreDescription) {
    this.choreArray[index - 1].choreDescription = choreDescription;
    this.choreArray[index - 1].edit = false;
    this.refreshTasks();
  }
}

export default ToDoChore;