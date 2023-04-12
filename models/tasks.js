import Task from './task.js'
import 'colors'

class Tasks {
  _list = {}

  get listArr () {
    const list = []
    Object.keys(this._list).forEach(key => list.push(this._list[key]))
    return list
  }

  constructor () {
    this._list = {}
  }

  createTask (desc = '') {
    const task = new Task(desc)
    this._list[task.id] = task
  }

  listAll () {
    this.listArr.forEach((task, index) => {
      const { completedAt, desc } = task
      const idx = `${index + 1}.`.green
      const status = completedAt ? 'Completed'.green : 'Pending'.red
      console.log(`${idx} ${desc} :: ${status}`)
    })
  }

  listCompletedPending (completed = true) {
    const filteredTask = this.listArr.filter(task => completed ? task.completedAt : task.completedAt === null)
    filteredTask.forEach((task, index) => {
      const { completedAt, desc } = task
      const idx = `${index + 1}.`.green
      const status = completedAt ? 'Completed'.green : 'Pending'.red
      console.log(`${idx} ${desc} :: ${status}`)
    })
  }

  deleteTask (id = '') {
    this._list[id] && delete this._list[id]
  }

  toogleCompleteTasks (ids = []) {
    ids.forEach(id => {
      const task = this._list[id]
      if (!task.completedAt) {
        task.completedAt = new Date().toISOString()
      }
    })

    this.listArr.forEach(task => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedAt = null
      }
    })
  }
}

export default Tasks
