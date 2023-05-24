import { Router } from 'express'
import userModel from '../models/user.model.js'


const router = Router()

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
    const userNew = req.body
    const userGenerated = new userModel(userNew)
    await userGenerated.save()
    const data = JSON.stringify(userGenerated.username)
    // res.cookie('user', data)
    req.session.user = data
    res.send(`User ${userGenerated.username} creado!`)
})

export default router