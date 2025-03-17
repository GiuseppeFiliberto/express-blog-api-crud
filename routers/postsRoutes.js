const express = require("express");
const router = express.Router();
const postsController = require('../controllers/postsController')


// Index route 
router.get('/', postsController.index);

// Show route
router.get('/:slug', postsController.show);

// Store Route
router.post('/', postsController.store);

// Updat Route
// router.put('/', postsController.update);

// Modify Route
// router.patch('/', postsController.modify);

// Destroy Route

router.delete('/:title', postsController.destroy);


module.exports = router