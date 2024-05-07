require('dotenv').config();

const apiKey = process.env.API_KEY;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;

console.log(`API Key: ${apiKey}`);
console.log(`Database username: ${dbUser}`);
console.log(`Database password: ${dbPass}`);