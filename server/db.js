const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "YOUR_DATABASE_PASSWORD",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});


module.exports = pool;