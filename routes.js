let express = require('express');
let router = express.Router();


// to import a controller, use this syntax:
// let controller = require('./controller/controller.js');
let reservations = require('./controllers/reservationController.js');
let users = require('./controllers/userController.js');

router.get('/', reservations.home);
router.post('/', reservations.home_post);
router.post('/validation', reservations.validation);
router.get('/confirmation', reservations.confirmation);
router.get('/persons', users.person);
router.post('/persons', users.person_post);

module.exports = router