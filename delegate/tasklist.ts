class Task {
  constructor(public name: string) {}
}

class Project {
  private tasks: Task[] = [];

  constructor(...task: Task[]) {
    this.tasks = task;
  }

  addTask(...task: Task[]) {
    task.forEach((task) => this.tasks.push(task));
  }
  get taskList() {
    return this.tasks;
  }
}
let task1 = new Task("Comprar leite");
let task2 = new Task("Pagar contas");
let task3 = new Task("Lavar roupa");
let t4 = new Task("passar roupa");
let t5 = new Task("comida");

let tarefas = new Project(task1, task2, task3);
tarefas.addTask(t4, t5);
// tarefas.addTask(t5)
console.log(tarefas);
