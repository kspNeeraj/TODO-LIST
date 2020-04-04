const express = require ('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);

router.post('/add-task',homeController.addtask);
router.post('/delete-task',homeController.deletetask);


//exporting the router
module.exports = router;