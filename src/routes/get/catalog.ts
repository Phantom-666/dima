import { Router } from "express"
import {resolve} from 'path'
import {pagesPath} from '../../config'



module.exports = Router().get('/catalog', (req, res) => {

    res.sendFile(resolve(pagesPath, 'catalog.html'))
})