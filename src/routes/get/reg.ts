import { Router } from 'express'
import { resolve } from 'path'
import { pagesPath } from '../../config'

module.exports = Router().get('/reg', (req, res) => {
  res.sendFile(resolve(pagesPath, 'reg.html'))
})
