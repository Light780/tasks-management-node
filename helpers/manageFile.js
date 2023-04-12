import fs from 'fs'

const file = './db/data.json'

export const saveDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data))
}

export const readDB = () => {
  const tasks = {}
  if (!fs.existsSync(file)) {
    return {}
  }

  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  data.forEach(task => {
    tasks[task.id] = task
  })

  return tasks
}
