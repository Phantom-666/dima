import { Router } from 'express'
import { resolve } from 'path'
import { pagesPath } from '../../config'

module.exports = Router().get('/constructor', (req, res) => {
  res.sendFile(resolve(pagesPath, 'constructor.html'))
})
