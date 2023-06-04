import {resolve} from 'path'


const rootPath = resolve(__dirname, '..')
const pagesPath = resolve(rootPath, 'pages')
const stylesPath = resolve(rootPath, 'styles')
const dbPath = resolve(rootPath, 'db')

const PORT = 3021

export {
    rootPath,
    pagesPath,
    PORT,
    stylesPath,
    dbPath
}