const express = require("express");
const router = express.Router();
const postsController = require('../controllers/postsController')


// Index route 
router.get('/', postsController.index);

// Show route
router.get('/:tags', postsController.show);

// Store Route
// router.get('/', postsController.index);

// Updat Route
// router.get('/', postsController.index);

// Modify Route
// router.get('/', postsController.index);

// Destroy Route
// router.get('/', postsController.index);


module.exports = router