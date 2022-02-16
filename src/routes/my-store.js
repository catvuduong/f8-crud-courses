const express = require('express');
const router = express.Router();

const mystoreController = require('../app/controllers/MyStoreController');

router.get('/courses', mystoreController.storeCourses);
module.exports = router;
