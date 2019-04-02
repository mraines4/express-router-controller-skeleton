const express = require('express');
const Router = express.Router;

// const controller = require('../controllers/thinkpad');
//// ORRRRR ////
const{
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');

// create the router
const thinkpadRoutes = Router();

// add handlers for my routes
// GET
thinkpadRoutes.get('/', retrieveAll);

// POST
thinkpadRoutes.post('/', create);

// PUT
thinkpadRoutes.put('/', update);

// DELETE
thinkpadRoutes.delete('/', deleteOne);


// export the router
module.exports = thinkpadRoutes;