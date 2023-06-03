import { Router } from "express"
import {resolve} from 'path'
import {dbPath} from '../../config'
import {readFile} from 'fs/promises'



module.exports = Router().post('/products/:p', async(req, res) => {
    const {p} = req.params

    const txt = await readFile(resolve(dbPath, p + ".json"), 'utf-8')
    const products = await JSON.parse(txt)


    res.send({products})
})