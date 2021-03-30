require('dotenv').config({path:"./.env"});
const express = require('express');
const connetDB = require('./config/db');
const app= express();
const connectDB = require('./config/db')

connetDB();

app.use(express.json());

const PORT= process.env.PORT|| 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });