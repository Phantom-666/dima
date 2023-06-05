import { resolve } from 'path'

const rootPath = resolve(__dirname, '..')
const pagesPath = resolve(rootPath, 'pages')
const stylesPath = resolve(rootPath, 'styles')
const dbPath = resolve(rootPath, 'db')
const userDbPath = resolve(rootPath, 'db', 'users.json')

const PORT = 3021

export { rootPath, pagesPath, PORT, stylesPath, dbPath, userDbPath }
