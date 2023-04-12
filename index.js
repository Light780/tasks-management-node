import { inquirerMenu, listTaskToDelete, pause, readInput, confirm, showTasksCheckList } from './helpers/inquirer.js'
import { readDB, saveDB } from './helpers/manageFile.js'
import Tasks from './models/tasks.js'

console.clear()

const main = async () => {
  let opt = ''
  const tasks = new Tasks()
  tasks._list = readDB()

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case '1': { // Create task
        const desc = await readInput('Description: ')
        tasks.createTask(desc)
        break
      }

      case '2': { // List all tasks
        tasks.listAll()
        break
      }

      case '3': { // List completed tasks
        tasks.listCompletedPending()
        break
      }

      case '4': { // List pending tasks
        tasks.listCompletedPending(false)
        break
      }

      case '5': { // Complete tasks(s)
        const ids = await showTasksCheckList(tasks.listArr)
        tasks.toogleCompleteTasks(ids)
        break
      }

      case '6': { // Delete task
        const id = await listTaskToDelete(tasks.listArr)
        if (id === '0') { break }

        const ok = await confirm('Are you sure to delete the task?')
        if (ok) {
          tasks.deleteTask(id)
          console.log('Task deleted')
        }
        break
      }
    }
    saveDB(tasks.listArr)
    await pause()
  } while (opt !== '0')
}
main()
