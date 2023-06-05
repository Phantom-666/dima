import { Router } from 'express'
import { userDbPath } from '../../config'
import { readFile } from 'fs/promises'

module.exports = Router().post('/login', async (req, res) => {
  const { username, password } = req.body

  let error = null
  let status = 'ok'

  let founded = false

  const txt = await readFile(userDbPath, 'utf-8')
  const obj = await JSON.parse(txt)

  for (let i = 0; i < obj.length; ++i) {
    const user = obj[i]

    if (user.username === username) {
      founded = true
      if (user.password !== password) {
        status = 'error'
        error = 'Пароли не совпадают'
        break
      }
      break
    }
  }

  if (!founded) {
    status = 'error'
    error = 'Нет такого пользователя'
  }

  res.send({ status, error })
})
