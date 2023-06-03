import { Router } from "express"
import {dbPath} from '../../config'
import {resolve} from 'path'
import {readFile} from 'fs/promises'


module.exports = Router().post('/product/:cat/:id', async (req, res) => {


    const {cat, id} = req.params
    
    const txt = await readFile(resolve(dbPath, cat + '.json'), 'utf-8')
    const products = await JSON.parse(txt)

    let product = null

    for (let i = 0; i < products.length; ++i) {

        if (products[i].id === Number(id)) {
            product = products[i]
        }

    }


    res.send({product})
})