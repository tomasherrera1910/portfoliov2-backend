import express from 'express'

const app = express()
app.use(express.json()) //bodyparser

app.get('/server-status', (req, res) => {
    res.json({"status": 'ok'})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})