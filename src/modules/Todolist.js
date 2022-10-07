class ToDoList {
  constructor() {
    this.getTasks();
  }

  refreshTasks() {
    localStorage.setItem('toDoList', JSON.stringify(this.listArray));
  }

  getTasks() {
    this.listArray = JSON.parse(localStorage.getItem('toDoList')) || [];
  }

      showTasks = () => JSON.parse(localStorage.getItem('toDoList')) || [];

      setEdit(i) {
        const task = this.listArray.find(
          (item) => parseInt(item.index, 10) === parseInt(i, 10),
        );
        task.edit = true;
        this.refreshTasks();
      }

      addTask(description) {
        const task = {
          description,
          completed: false,
          index: this.listArray.length + 1,
          edit: false,
        };
        this.listArray = [...this.listArray, task];
        this.refreshTasks();
      }

      removeTask(index) {
        this.listArray = this.listArray.filter((item) => item.index !== index);
        this.listArray = this.listArray.map((list, i) => {
          list.index = i + 1;
          return list;
        });
        this.refreshTasks();
      }

      changeComplete(i) {
        const status = this.listArray[i - 1].completed;
        this.listArray[i - 1] = {
          ...this.listArray[i - 1],
          completed: !status,
        };
        this.refreshTasks();
      }

      editTask(index, description) {
        this.listArray[index - 1].description = description;
        this.listArray[index - 1].edit = false;
        this.refreshTasks();
      }

      clearCompleted() {
        this.listArray = this.listArray.filter((item) => item.completed !== true);
        if (this.listArray.length > 0) {
          this.listArray = this.listArray.map((list, i) => {
            list.index = i + 1;
            return list;
          });
        }
        this.refreshTasks();
      }
}

export default ToDoList;