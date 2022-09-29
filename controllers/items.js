const Meal = require("../models/meal");
const User = require("../models/user");


module.exports = {
    getItems,
    postItems,
};

async function getItems(req, res){
    try{
        const mealItem = req.body;
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

async function postItems(req, res){
    try{
        const order = await Order.find();
        res.status(200).json({ order });
    } catch(err){
        console.log(err)
        return res.status(400).json({err})
    }
}

