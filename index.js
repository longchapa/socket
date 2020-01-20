const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 5000

server.listen(PORT, ()=>{
    console.log(`Listen on http://localhost:${PORT}`)
})

app.get('/hello',(req,res)=>{
    res.status(200).send(`Hola mundo!!`)
})

io.on('connection', (socket)=>{
    console.log(`Usuario conectado`)

    socket.on('disconnect', ()=>{
        console.log(`Usuario desconectado`)
    })
})