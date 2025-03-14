const express = require("express");
const router = express.Router();
const postsController = require('../controllers/postsController')


// Index route 

router.get('/', postsController.index);
