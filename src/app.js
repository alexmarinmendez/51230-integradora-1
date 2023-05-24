import express from 'express'
import handlebars from 'express-handlebars'
import pokemonRouter from './routes/pokemon.router.js'
import userRouter from './routes/user.router.js'
import mongoose, { mongo } from 'mongoose'
// import cookieParser from 'cookie-parser'
import session from 'express-session'

const uri = 'mongodb://localhost:27017/pokedex'

const app = express()
// app.use(cookieParser())
app.use(session({
    secret: 'c0d3r',
    resave: true,
    saveUninitialized: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use(express.static('./src/public'))

app.get('/', (req, res) => res.send('Ok'))
app.use('/user', userRouter)
app.use('/pokemon', pokemonRouter)

mongoose.set('strictQuery', false)
try {
    await mongoose.connect(uri)
    console.log('DB connected!')
    app.listen(8080, () => console.log('Server up'))
} catch (err) {
    console.log('No se puede conectar a la BD')
}

