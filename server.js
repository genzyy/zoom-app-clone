const express = require('express'),
	  app 	  = express(),
	  server  = require('http').Server(app),
	  io 	  = require('socket.io')(server),
	  { v4: uuidv4 } 	  = require('uuid'),
      	  port 			  = process.env.PORT || 3000



app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req, res) => {
	res.render('room', { roomId: req.params.room } )
})

io.on('connection', socket => {
	socket.on('join-room', (roomId, userId) => {
		console.log(roomId, userId)
		socket.join(roomId)
		socket.to(roomId).broadcast.emit('user-connected', userId)

		socket.on('disconnect', () => {
			socket.to(roomId).broadcast.emit('user-disconnected', userId)
		})
	})
})



server.listen(port)
