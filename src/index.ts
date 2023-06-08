import express from 'express'
import { PORT, stylesPath } from './config'

const run = () => {
  const app = express()
  app.use(express.json())

  app.use(express.static(stylesPath))

  app.use(
    '/',
    require('./routes/get/index'),
    require('./routes/get/catalog'),
    require('./routes/get/about'),
    require('./routes/get/contacts'),
    require('./routes/get/product'),
    require('./routes/get/cart'),
    require('./routes/get/login'),
    require('./routes/get/reg'),
    require('./routes/get/constructor')
  )

  app.use(
    '/',
    require('./routes/post/products'),
    require('./routes/post/product'),
    require('./routes/post/reg'),
    require('./routes/post/login'),
    require('./routes/post/saveScreenshot')
  )

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

run()
