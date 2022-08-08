const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())


app.get('/', (req,res) => {
    res.send('hello world!')
})

app.listen(1337, () => console.log('server started on 1337'))