import { Router } from "express"
import {resolve} from 'path'
import {pagesPath} from '../../config'


const router = Router().get('/product/:cat/:id', (req, res) => {


    const {cat, id} = req.params

    res.sendFile(resolve(pagesPath, 'product.html'))

})


module.exports = router