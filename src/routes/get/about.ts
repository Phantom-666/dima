import { Router } from "express"
import {resolve} from 'path'
import {pagesPath} from '../../config'

module.exports = Router().get('/about', (req, res) => {

    res.sendFile(resolve(pagesPath, 'about.html'))
})