import { Router } from "express"
import {resolve} from 'path'
import {pagesPath} from '../../config'

module.exports = Router().get('/cart', (req, res) => {
    res.sendFile(resolve(pagesPath, 'cart.html'))
})