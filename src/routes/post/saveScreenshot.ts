import { Router } from 'express'
import fs from 'fs/promises'
import path from 'path'
import { rootPath } from '../../config'

module.exports = Router().post('/save-screenshot', async (req, res) => {
  const { dataURL, username, filename } = req.body
  const imageData = Buffer.from(
    dataURL.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''),
    'base64'
  )

  // Save the screenshot on the server
  await fs.writeFile(
    path.join(rootPath, 'styles', 'images', 'screenshots', filename),
    imageData
  )

  res.sendStatus(200)
})
