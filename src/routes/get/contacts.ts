import { Router } from "express"
import {resolve} from 'path'
import {pagesPath} from '../../config'


module.exports = Router().get('/contacts', (req, res) => {

    res.sendFile(resolve(pagesPath, 'contacts.html'))
})