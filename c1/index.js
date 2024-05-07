require('dotenv').config();

const apiKey = process.env.API_KEY;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;

// console.log(`API Key: ${apiKey}`);
// console.log(`Database username: ${dbUser}`);
// console.log(`Database password: ${dbPass}`);

const express = require("express");

const config = require("./pkg/config");
const { getForCity, getFiveDaysForecast } = require("./handlers/weather");

const api = express();

api.get("/api/v1/weather/:city", getForCity);
api.get("/api/v1/forecast/:lat/:lon", getFiveDaysForecast);

api.listen(config.getSection("weather").port, (err) => {
    err 
        ? console.log(err)
        : console.log(
            `Server started on port ${config.getSection("weather").port}`
        )
});