import express from 'express'
import handlebars from 'express-handlebars'
import pokemonRouter from './routes/pokemon.router.js'
import mongoose, { mongo } from 'mongoose'

const uri = 'mongodb+srv://coder:coder@cluster0.yd7kuoh.mongodb.net/pokedex'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use(express.static('./src/public'))

app.use('/pokemon', pokemonRouter)
app.get('/', (req, res) => res.send('Ok'))

mongoose.set('strictQuery', false)

// const main = async () => {
//     try {
//         await mongoose.connect(uri)
//         console.log('DB connected!')
//         app.listen(8080, () => console.log('Server up'))
//     } catch(err) {
//         console.log('No se puede conectar a la BD')
//     }
// }

// main()

try {
    await mongoose.connect(uri)
    console.log('DB connected!')
    app.listen(8080, () => console.log('Server up'))
} catch (err) {
    console.log('No se puede conectar a la BD')
}

