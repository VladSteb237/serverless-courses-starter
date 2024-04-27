require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;
  if (method !== "POST") {
    return {
      statusCode: 405,
      body: "Only POST Request Allowed!",
    };
  }
  const { purchase, total_amount, shipping_fee } = JSON.parse(event.body);
  const calculateTotalAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return total_amount + shipping_fee;
  };
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateTotalAmount(),
      currency: "USD",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
