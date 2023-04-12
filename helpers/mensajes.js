import 'colors'
import { createInterface } from 'readline'

export const showMenu = () => {
  return new Promise((resolve) => {
    console.clear()
    console.log('=========================='.green)
    console.log('   Select an option'.green)
    console.log('=========================='.green)

    console.log(`${'1.'.green} Create task`)
    console.log(`${'2.'.green} List all tasks`)
    console.log(`${'3.'.green} List all completed tasks`)
    console.log(`${'4.'.green} List all pending tasks`)
    console.log(`${'5.'.green} Complete task(s)`)
    console.log(`${'6.'.green} Delete task`)
    console.log(`${'0.'.green} Exit\n`)

    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question('Select an option: ', (opt) => {
      readline.close()
      resolve(opt)
    })
  })
}

export const pause = () => {
  return new Promise((resolve) => {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPress ${'ENTER'.green} to continue\n`, () => {
      readline.close()
      resolve()
    })
  })
}
