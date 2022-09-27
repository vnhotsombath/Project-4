const Order = require("../models/order");

module.exports = {
    create,
}

function create(req, res) {
    Order.create(req.body, function (err, orderDocument){
        res.redirect('/');
    })
}