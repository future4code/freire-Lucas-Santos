const fs = require('fs')

const tasks = (JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))).tasks

if (process.argv[2] === "view") {
  try {    
    if (tasks.length === 0) {
      console.log("Lista de tarefas vazia")
    } else {
      console.log("Lista de tarefas:")
      
      tasks.forEach(task => {
        console.log("-"+task.title)
      }
      );
    }
  }catch(error) {
    console.log(error);
  }
} else if (process.argv[2] === "add") {
  try {
    if ((process.argv[3] === undefined) || (process.argv[3] === "")) {
      console.log("Para adicionar uma tarefa, digite o nome dela após o comando 'add'")
    } else {
      const newTask = process.argv.slice(3).join(' ')      
      tasks.push({id:tasks.length, title:newTask})
      
      fs.writeFileSync('./tasks.json', JSON.stringify({tasks}, null, 2))
      console.log("Tarefa adicionada com sucesso")
    }
  }catch (error) {
    console.log(error)
  }
} else if (process.argv[2] === "delete") {
  try {
    if ((process.argv[3] === undefined) || (process.argv[3] === "")) {
      console.log("Para deletar uma tarefa, digite o nome dela após o comando 'delete'")
    } else {
      const taskToDelete = process.argv.slice(3).join(' ')
      
      const newTasks = tasks.filter(task => task.title !== taskToDelete)
      
      if (newTasks.length === tasks.length) {
        console.log("Tarefa não encontrada")
      } else {
        fs.writeFileSync('./tasks.json', JSON.stringify({tasks: newTasks},null,2))
        console.log("Tarefa deletada com sucesso")
      }
    } 
  }catch (error) {
    console.log(error)
  }
} else {
  console.log("Instruções:")
  console.log("npm start view - para ver as tarefas")
  console.log("npm start add [tarefa] - para adicionar uma tarefa")
  console.log("npm start delete [tarefa] - para deletar uma tarefa")
}