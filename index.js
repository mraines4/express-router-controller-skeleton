// i need express
const express = require('express');
// i need it to have a port
const PORT = 3000;

// require routers
const thinkpadRouter = require('./routes/thinkpad');


// i need to create an app with express
const app = express();

// i need to connect a router
app.use('/thinkpad', thinkpadRouter)

// i need express to listen on that port
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});