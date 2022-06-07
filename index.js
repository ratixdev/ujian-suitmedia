const express = require('express') // Import express npm

const app = express() // instantiate an express app

const port = 3000 // Specify the port on which the HTTP call will listen

app.get('/', (req, res, next) => res.send({status: 200, data: 'Hey, how are you?'})) // Define a route

app.listen(port, () => console.log(`Example app listening on port ${port}`))
