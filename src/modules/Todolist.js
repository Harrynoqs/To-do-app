class ToDoChore {
  constructor() {
    this.getTasks();
  }

  refreshTasks() {
    localStorage.setItem('toDoList', JSON.stringify(this.choreArray));
  }

  getTasks() {
    this.choreArray = JSON.parse(localStorage.getItem('toDoList')) || [];
  }

      showTasks = () => JSON.parse(localStorage.getItem('toDoList')) || [];

      setEdit(i) {
        const task = this.choreArray.find(
          (item) => parseInt(item.index, 10) === parseInt(i, 10),
        );
        task.edit = true;
        this.refreshTasks();
      }

      addChore(description) {
        const task = {
          description,
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

      editChore(index, description) {
        this.choreArray[index - 1].description = description;
        this.choreArray[index - 1].edit = false;
        this.refreshTasks();
      }
}

export default ToDoChore;