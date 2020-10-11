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

// - Listen Command
exports.api = functions.https.onRequest(app);
