const express = require("express");
const router = express.Router();
const postsController = require('../controllers/postsController')


// Index route 
router.get('/', postsController.index);

// Show route
router.get('/:slug', postsController.show);

// Store Route
// router.get('/', postsController.index);

// Updat Route
// router.get('/', postsController.index);

// Modify Route
// router.get('/', postsController.index);

// Destroy Route

router.delete('/:title', postsController.destroy);


module.exports = router