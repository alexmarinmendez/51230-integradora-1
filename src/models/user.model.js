import mongoose from "mongoose"

const userCollection = 'users'

const userSchema = mongoose.Schema({
    id: Number,
    username: String,
    password: String,
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel