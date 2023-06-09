import { Router } from 'express'
import { resolve } from 'path'
import { pagesPath } from '../../config'

module.exports = Router().get('/order', (req, res) => {
  res.sendFile(resolve(pagesPath, 'order.html'))
})
