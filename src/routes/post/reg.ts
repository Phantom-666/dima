import { Router } from 'express'
import { userDbPath } from '../../config'
import { writeFile, readFile } from 'fs/promises'

module.exports = Router().post('/reg', async (req, res) => {
  const { username, password } = req.body

  console.log(username, password)

  const txt = await readFile(userDbPath, 'utf-8')
  const obj = await JSON.parse(txt)

  let error = null

  for (let i = 0; i < obj.length; ++i) {
    const user = obj[i]

    if (username == user.username) {
      error = 'Такой пользователь уже существует'

      break
    }
  }

  if (error !== null) {
    return res.send({ status: 'error', error })
  }

  obj.push({ username, password })
  await writeFile(userDbPath, JSON.stringify(obj))

  res.send({ status: 'ok' })
})
