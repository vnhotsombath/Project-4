const Order = require("../models/order");
const User = require("../models/user");


module.exports = {
    makeOrder,
    getAllOrders,
};

async function makeOrder(req, res){
    try{
        const orderItem = req.body;
        // if (! orderItem) return res.status(404).json({ error: 'Something went Wrong'});
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "Wrong Email, try again"});
        await new Order ({ orderItem }).save();
        res.status(200).json({ message: 'You have successfully placed an order!'})
    } catch(err){
        console.log(err)
        res.status(400).json({err})
    }
}

async function getAllOrders(req, res){
    try{
        const order = await Order.find();
        res.status(200).json({ order });
    } catch(err){
        console.log(err)
        return res.status(400).json({err})
    }
}

