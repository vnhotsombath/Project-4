const express = require('express');
const router = require('express').Router();
const ordersCtrl= require('../../controllers/orders');

router.post('/', ordersCtrl.createOrder);
router.get('/userId', ordersCtrl.getAllOrders);

module.exports = router;