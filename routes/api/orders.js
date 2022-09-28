const express = require('express');
const router = require('express').Router();
const ordersCtrl= require('../../controllers/orders');

router.post('/', ordersCtrl.makeOrder);
router.get('/orders', ordersCtrl.getAllOrders);

module.exports = router;