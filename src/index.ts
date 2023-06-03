import express from 'express'
import { PORT, stylesPath } from './config'

// TODO: make cart
// TODO: make order
// TODO: upload high resolution images
// TODO: make add to cart
// TODO: generate icon

const run = () => {
    const app = express()
    app.use(express.json())

    app.use(express.static(stylesPath))

    app.use('/', 
    require('./routes/get/index'),
    require('./routes/get/catalog'),
    require('./routes/get/about'),
    require('./routes/get/contacts'),
    require('./routes/get/product'))

    app.use('/', 
    require('./routes/post/products'),
    require('./routes/post/product'))
    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

}


run()