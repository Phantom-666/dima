import { Router } from 'express'
import { resolve } from 'path'
import { pagesPath } from '../../config'

module.exports = Router().get('/login', (req, res) => {
  res.sendFile(resolve(pagesPath, 'login.html'))
})
