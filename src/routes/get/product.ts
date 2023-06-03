import { Router } from "express"
import {readFile} from 'fs/promises'
import {resolve} from 'path'
import {dbPath, pagesPath} from '../../config'


const router = Router().get('/product/:cat/:id', async (req, res) => {


    const {cat, id} = req.params

    res.sendFile(resolve(pagesPath, 'product.html'))

})


module.exports = router