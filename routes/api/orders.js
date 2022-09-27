const express = require('express');
const router = require('express').Router();
const ordersController = require('../../controllers/orders');

router.post('/', ordersController.create);

module.exports = router;