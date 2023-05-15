import mongoose from "mongoose"

const pokeCollection = 'pokemons'

const pokeSchema = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    photo: String
})

const pokeModel = mongoose.model(pokeCollection, pokeSchema)

export default pokeModel