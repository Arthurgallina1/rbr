const connection = require("../utils/dbconn");
const { stripeKey } = require("../../config");
const stripe = require("stripe")(stripeKey);
module.exports = {
  async index(req, res) {
    const calculateOrderAmount = (items) => {
      return 1400;
    };
    const value = calculateOrderAmount();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: value,
      currency: "usd",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  },
};
