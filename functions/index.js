const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYqU2FNjKOMdukzV4WQfgBUnmQsWIio568ATT1hKX5O4OOtJXFSBRC7m4ujqBCJWZZLGDkOYHCA1JROAb9dQbPq003oU7ST1w"
);

// - API

// - App Config
const app = express();

// - Middelewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recieve BOOM!!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/react-challenge-5b0d0/us-central1/api
