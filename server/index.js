const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
import {User} from './models/user.model'

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/auth-mern')

app.post('/api/register', async(req,res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error', error: "Duplicate email"})
    }
    res.json({status: 'ok'})
})

app.listen(1337, () => console.log('server started on 1337'))