import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(express.static('./public'))

// app.use((req, res, next) => {
//     res.set('Access-Control-Allow-Origin', '*')
//     next()
// })
app.use(cors())

app.get('/health', (req, res) => {
    res.json({status: 'ok'})
})

app.listen(8080, () => console.log('Server Up!'))