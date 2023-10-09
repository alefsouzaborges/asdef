require('dotenv').config();


const express = require('express')
const app = express()

app.use(express.static(__dirname + '/web'))

app.use((_, res) => {
    res.redirect('/')
})

app.get('/', (_, res) => {
    res.sendFile('./web/index.html', { root: __dirname })
})

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
