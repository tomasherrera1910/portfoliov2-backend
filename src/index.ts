import express from 'express'

const app = express()
app.use(express.json())

app.get('/status', (req, res) => {
    res.json({"status": 'ok'})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})